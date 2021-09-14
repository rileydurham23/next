import { useCallback, useState } from "react";
import { Form } from "react-final-form";
import { useRouter } from "next/router";
import Button from "components/Button";
import Box, { BoxProps } from "components/Box";
import Notice from "components/Notice";
import { useUID } from "utils/uid";
import { useDefaultFormValues, submitForm, useMarketoForm } from "./helpers";
import {
  MarketoFieldWrapperEmail,
  MarketoFieldWrapperHidden,
  MarketoFieldWrapperTelephone,
  MarketoFieldWrapperText,
  MarketoFieldWrapperTextArea,
  MarketoFieldWrapperCheckboxes,
} from "./MarketoFieldWrappers";

/*
 * This is not a full list of fields, I didn't implement
 * 'select', 'range' and some others because we didn't use
 * them yet.
 */

const getFieldComponent = (type: MarketoDataType) => {
  switch (type) {
    case "hidden":
      return MarketoFieldWrapperHidden;
    case "text":
      return MarketoFieldWrapperText;
    case "email":
      return MarketoFieldWrapperEmail;
    case "telephone":
      return MarketoFieldWrapperTelephone;
    case "textArea":
      return MarketoFieldWrapperTextArea;
    case "checkboxes":
      return MarketoFieldWrapperCheckboxes;
    default:
      return MarketoFieldWrapperHidden;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormValues = Record<string, any>;

export interface MarketoFormProps {
  buttonLabel: string;
  waitingLabel: string;
  fields: MarketoField[];
  error?: string;
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
}

/*
 * This should be a base for the future form constructor,
 * then we move from Marketo config format to our own one.
 */

export const MarketoForm = ({
  initialValues,
  onSubmit,
  fields,
  error,
  buttonLabel,
  waitingLabel,
}: MarketoFormProps) => {
  const uid = useUID();

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => {
        return (
          <Box as="form" onSubmit={handleSubmit} width="100%">
            {fields.map((field) => {
              const FiledComponent = getFieldComponent(field.dataType);

              return (
                <FiledComponent
                  key={field.id}
                  formId={uid}
                  disabled={submitting}
                  {...field}
                />
              );
            })}
            <Button
              type="submit"
              shape="lg"
              mt={3}
              width="100%"
              disabled={submitting}
            >
              {submitting ? waitingLabel : buttonLabel}
            </Button>
            {error && (
              <Notice type="danger" mt={3}>
                {error}
              </Notice>
            )}
          </Box>
        );
      }}
    />
  );
};

/*
 * This is a wrapper for the strictly Marketo-related
 * things like data fetching, sending and redirects.
 */

export type MarketobrowserFormProps = {
  id: string;
} & BoxProps;

export const MarketoBrowserForm = ({
  id,
  ...boxProps
}: MarketobrowserFormProps) => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState("");
  const { data, loading, error } = useMarketoForm(id);
  const initialValues = useDefaultFormValues(
    data ? data.fields : [],
    router.query
  );

  const thankYou = data?.meta?.thankYou;

  const onSubmit = useCallback(
    async (formData: FormValues) => {
      setSubmitError("");

      try {
        await submitForm(id, formData);

        if (thankYou?.followupType === "url") {
          window.location.href = thankYou.followupValue;
        }
      } catch {
        setSubmitError("Form submission failed, please try again.");
      }
    },
    [id, thankYou]
  );

  return (
    <Box {...boxProps}>
      {loading && (
        <Box textAlign="center" p={4}>
          Loading...
        </Box>
      )}
      {!loading && error && (
        <Notice type="danger">Error in loading form config.</Notice>
      )}
      {!loading && !error && data && (
        <MarketoForm
          buttonLabel={data.meta.buttonLabel}
          waitingLabel={data.meta.waitingLabel}
          fields={data.fields}
          error={submitError}
          onSubmit={onSubmit}
          initialValues={initialValues}
        />
      )}
    </Box>
  );
};
