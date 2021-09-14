/*
 * We need to use some of this logic without the form constructor
 * e. g. in newsletter form, so this helpers are stored separately.
 */

import { useCallback, useMemo } from "react";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";

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
      fields.reduce((result, { id, autoFill }) => {
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

interface MarketoForm {
  data: MarketoFormDataAPIResponse;
  loading: boolean;
  error: boolean;
}

export const useMarketoForm = (id: string): MarketoForm => {
  /*
   * I use swr here instead of simple fetch for built-in request cache
   * to preserve data on page navigation for newsletter and other common forms.
   */
  const { data, error } = useSWR<MarketoFormDataAPIResponse>(
    `/api/form/${id}/meta/`,
    fetcher
  );

  console.log(data);

  return useMemo(
    () => ({
      data,
      loading: !error && !data,
      error: !!error,
    }),
    [data, error]
  );
};

export const submitForm = async (
  id: string,
  fields: Record<string, string>
) => {
  try {
    const response = await fetch(`/api/form/${id}/`, {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 200) {
      throw new Error(`Wrong response code ${response.status}`);
    }
  } catch (e) {
    throw e;
  }
};
