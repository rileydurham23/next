import styled from "styled-components";
import css from "@styled-system/css";
import { Form } from "react-final-form";
import Link from "components/Link";
import Button from "components/Button";
import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import Notice from "components/Notice";
import { useDefaultFormValues, useMarketoForm } from "./helpers";
import {
  MarketoFieldWrapperEmail,
  MarketoFieldWrapperHidden,
  MarketoFieldWrapperTelephone,
  MarketoFieldWrapperText,
  MarketoFieldWrapperTextArea,
  MarketoFieldWrapperCheckboxes,
  MarketoFieldWrapperHTMLText,
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
    case "htmltext":
      return MarketoFieldWrapperHTMLText;
    default:
      return MarketoFieldWrapperHidden;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormValues = Record<string, any>;

export interface MarketoFormProps {
  uid: string;
  buttonLabel: string;
  waitingLabel: string;
  fields: MarketoField[];
  error?: string;
  initialValues: FormValues;
  onSubmit: (values: FormValues) => void;
}

export const RecaptchaTOC = () => {
  return (
    <>
      This site is protected by reCAPTCHA and the Google{" "}
      <Link
        scheme="comment"
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noreferrer nofollow"
      >
        Privacy Policy
      </Link>{" "}
      and{" "}
      <Link
        scheme="comment"
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noreferrer nofollow"
      >
        Terms of Service
      </Link>{" "}
      apply.
    </>
  );
};

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
  uid,
}: MarketoFormProps) => {
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
              <Notice type="danger" icon={false} mt={3}>
                {error}
              </Notice>
            )}
            <Box
              mt={3}
              mx="auto"
              fontSize="text-sm"
              lineHeight="sm"
              textAlign="center"
              color="gray"
              maxWidth="300px"
            >
              <RecaptchaTOC />
            </Box>
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
} & FlexProps;

export const MarketoBrowserForm = ({
  id,
  ...flexProps
}: MarketobrowserFormProps) => {
  const { data, disabled, loading, error, onSubmit, UID } = useMarketoForm(id);

  const initialValues = useDefaultFormValues(data ? data.fields : []);

  return (
    <Flex justifyContent="center" alignItems="center" {...flexProps}>
      {disabled && (
        <Box textAlign="center" p={4}>
          Marketo froms are disabled because ENV variables are missing.
        </Box>
      )}
      {loading && !error && (
        <Box textAlign="center" p={4}>
          Loading...
        </Box>
      )}
      {error && !loading && !data && (
        <Notice type="danger" icon={false}>
          Error in loading form config.
        </Notice>
      )}
      {!loading && data && (
        <>
          <MarketoForm
            buttonLabel={data.meta.buttonLabel}
            waitingLabel={data.meta.waitingLabel}
            fields={data.fields}
            error={error}
            onSubmit={onSubmit}
            initialValues={initialValues}
            uid={UID}
          />
        </>
      )}
      <Box
        css={css({
          ".grecaptcha-badge": { visibility: "hidden" },
        })}
        id={UID}
      />
    </Flex>
  );
};

export const StyledMarketoBrowserForm = styled(MarketoBrowserForm)(
  css({
    fieldset: {
      div: {
        flexDirection: "column",
        label: {
          ml: "5",
        },
      },
    },
  })
);
