import { useCallback, useState, useMemo } from "react";
import { useRouter } from "next/router";
import { useDefaultFormValues, useMarketoForm } from "components/MarketoForm";
import fallbackData from "./data.json";

export const useNewsletter = () => {
  const router = useRouter();

  const {
    data,
    error,
    submitted,
    onSubmit: onFormSubmit,
    UID,
  } = useMarketoForm(
    process.env.NEXT_PUBLIC_EMAIL_SUBSCRIPTION_FORM_ID,
    fallbackData as unknown as MarketoFormDataAPIResponse
  );

  const initialValues = useDefaultFormValues(
    data ? data.fields : [],
    router.query
  );

  const [value, setValue] = useState<string>(initialValues.Email);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();

      if (!value || !value.includes("@")) {
        return false;
      }

      setSubmitting(true);

      try {
        await onFormSubmit({ ...initialValues, Email: value });
      } finally {
        setSubmitting(false);
      }

      return false;
    },
    [initialValues, value, onFormSubmit]
  );

  const onChange = useCallback(
    (e: React.SyntheticEvent<HTMLInputElement>) =>
      setValue(e.currentTarget.value),
    []
  );

  const buttonLabel = data?.meta?.buttonLabel;

  return useMemo(
    () => ({
      onSubmit,
      onChange,
      value,
      submitting,
      submitted,
      error,
      buttonLabel,
      UID,
    }),
    [onSubmit, onChange, value, submitting, submitted, error, buttonLabel, UID]
  );
};
