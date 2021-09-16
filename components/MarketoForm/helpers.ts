/*
 * We need to use some of this logic without the form constructor
 * e. g. in newsletter form, so this helpers are stored separately.
 */

import { useCallback, useMemo, useState, useEffect } from "react";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "utils/fetcher";
import { useRecaptcha } from "utils/recaptcha";

type RouterQuery = NodeJS.Dict<string | string[]>;

const getDefaultFieldValue = (
  autoFill: MarketoFieldAutoFill,
  query: RouterQuery
) => {
  if (!autoFill) {
    return "";
  }

  const { value: defaultValue = "", valueFrom, parameterName } = autoFill;

  let value = defaultValue;

  if (valueFrom === "query" && query[parameterName]) {
    value = query[parameterName] as string;
  }

  return value;
};

export const useDefaultFormValues = (
  fields: MarketoField[],
  query: NodeJS.Dict<string | string[]>
) => {
  return useMemo(
    () =>
      fields
        .filter(({ dataType }) => dataType !== "htmltext")
        .reduce((result, { id, autoFill }) => {
          result[id] = getDefaultFieldValue(autoFill, query);

          return result;
        }, {} as Record<string, string>),
    [fields, query]
  );
};

/*
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

export const useMarketoForm = (
  id: string,
  fallbackData?: MarketoFormDataAPIResponse
) => {
  const UID = `marketo_${id}`;

  const {
    error: recaptchaError,
    ready: recaptchaReady,
    getToken,
  } = useRecaptcha(UID);

  /*
   * I use swr here instead of simple fetch for built-in request cache
   * to preserve data on page navigation for newsletter and other common forms.
   */
  const { data, error: fieldsError } =
    useSWRImmutable<MarketoFormDataAPIResponse>(
      `/api/form/${id}/meta/`,
      fetcher,
      { fallbackData }
    );

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (recaptchaError) {
      setError(recaptchaError);
    } else if (fieldsError) {
      setError("Can't download fields data.");
    }
  }, [recaptchaError, fieldsError]);

  const loading = !(recaptchaReady && !!data);

  const thankYou = data?.meta?.thankYou;

  const onSubmit = useCallback(
    async (formData: Record<string, string>) => {
      setError("");

      try {
        const token = await getToken();

        await submitForm(id, formData, token);

        setSubmitted(true);

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

  useEffect(() => {
    if (!submitted) {
      return;
    }
    const timeout = setTimeout(() => setSubmitted(false), 5000);

    return () => clearTimeout(timeout);
  }, [submitted]);

  return useMemo(() => {
    return {
      data,
      loading,
      submitted,
      error,
      onSubmit,
      UID,
    };
  }, [data, error, loading, submitted, onSubmit, UID]);
};
