/*
 * We need to use some of this logic without the form constructor
 * e. g. in newsletter form, so this helpers are stored separately.
 */

import { useCallback, useMemo, useState, useEffect } from "react";
import useSWRImmutable from "swr/immutable";
import { parseCookies } from "nookies";
import { fetcher } from "utils/fetcher";
import { useRecaptcha } from "utils/recaptcha";
import { GTMEvent } from "utils/gtm";

const getDefaultFieldValue = (autoFill: MarketoFieldAutoFill) => {
  if (!autoFill) {
    return "";
  }

  /**
   * this section checks the cookies to see if any match the default
   * keys; if so cookie values replace default values
   */
  const cookie = parseCookies();

  const { value: defaultValue = "", parameterName } = autoFill;

  let value = defaultValue;

  if (cookie[parameterName]) value = cookie[parameterName] as string;
  return value;
};

export const useDefaultFormValues = (fields: MarketoField[]) => {
  return useMemo(
    () =>
      fields
        .filter(({ dataType }) => dataType !== "htmltext")
        .reduce((result, { id, autoFill }) => {
          result[id] = getDefaultFieldValue(autoFill);

          return result;
        }, {} as Record<string, string>),
    [fields]
  );
};

/*
  Validates user-inputed field values for value existence and max length

  Example config:

  {
    required: true,
    validationMessage: "Must be valid email. <span class='mktoErrorDetail'>example@yourdomain.com</span>",
    maxLength: 255,
  }
*/

export const useValidate = ({
  required,
  validationMessage,
  maxLength,
}: MarketoField) => {
  return useCallback(
    (value: string) => {
      if (required && !value) {
        return validationMessage.replace(/<[^>]*>/g, "");
      } else if (maxLength && value.length > maxLength) {
        return `Value should be shorter than ${maxLength}`;
      }
    },
    [required, validationMessage, maxLength]
  );
};

/**
 * passes the values to the "back end" along with the reCAPTCHA token
 */
export const submitForm = async (
  id: string,
  fields: Record<string, string>,
  token: string
) => {
  try {
    const response = await fetch(`/api/form/${id}/`, {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
        "g-recaptcha-response": token,
      },
    });

    if (response.status !== 200) {
      throw new Error(`Wrong response code ${response.status}`);
    }
  } catch (e) {
    throw e;
  }
};

interface UseMarketoFormProps {
  callbackName?: string;
  fallbackData?: MarketoFormDataAPIResponse;
}

/**
 * returns memoized values/functions needed by the actual form component;
 */
export const useMarketoForm = (
  id: string,
  options: UseMarketoFormProps = {}
) => {
  const { callbackName, fallbackData } = options;
  const UID = `marketo_${callbackName || id}`;

  const {
    disabled,
    error: recaptchaError,
    ready: recaptchaReady,
    getToken,
  } = useRecaptcha(UID);

  /*
   * SWR is used here instead of simple fetch for built-in request cache
   * to preserve data on page navigation for newsletter and other common forms.
   */
  const { data, error: fieldsError } =
    useSWRImmutable<MarketoFormDataAPIResponse>(
      disabled ? undefined : `/api/form/${id}/meta/`,
      fetcher,
      { fallbackData }
    );

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (disabled) {
      return;
    }

    if (recaptchaError) {
      setError(recaptchaError);
    } else if (fieldsError) {
      setError("Can't download fields data.");
    }
  }, [recaptchaError, fieldsError, disabled]);

  const loading = !disabled && !(recaptchaReady && !!data);

  const thankYou = data?.meta?.thankYou;

  const onSubmit = useCallback(
    async (formData: Record<string, string>) => {
      setError("");

      try {
        const token = await getToken();

        await submitForm(id, formData, token);

        setSubmitted(true);

        await GTMEvent("mktoFormSubmit", { formMeta: { formid: id } });

        if (thankYou?.followupType === "url") {
          window.location.href = thankYou.followupValue;
        }
      } catch (e) {
        console.log(e);
        setError("Form submission failed, please try again.");
      }
    },
    [id, setError, thankYou, getToken]
  );

  /**
   * Runs after form submission and clears the "Submitted" message after 5 seconds.
   * Does not affect ability to submit form.
   */
  useEffect(() => {
    if (!submitted) {
      return;
    }
    const timeout = setTimeout(() => setSubmitted(false), 5000);

    return () => clearTimeout(timeout);
  }, [submitted]);

  return useMemo(() => {
    return {
      disabled,
      data,
      loading,
      submitted,
      error,
      onSubmit,
      UID,
    };
  }, [data, error, loading, submitted, onSubmit, UID, disabled]);
};
