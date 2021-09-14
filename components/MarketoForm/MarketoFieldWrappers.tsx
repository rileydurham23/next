import { Field } from "react-final-form";
import { Checkbox } from "components/Checkbox";
import Input from "components/Input";
import FieldSet from "components/FieldSet";
import TextArea from "components/TextArea";
import { useValidate } from "./helpers";

const makeId = (formId: string, fieldId: string) => `${formId}_${fieldId}`;

/*
 * In the future we will want to make our own field config
 * so we can use this form constructor separately from
 * Marketo, but for now its easier to reuse existing one without
 * normalisations.
 */

interface MarketoFieldProps extends MarketoField {
  formId: string;
  disabled?: boolean;
}

export const MarketoFieldWrapperHidden = ({ id }: MarketoFieldProps) => {
  return <Field component="input" type="hidden" name={id} />;
};

export const MarketoFieldWrapperEmail = (field: MarketoFieldProps) => {
  const { id, formId, label, hintText, required, disabled } = field;
  const validate = useValidate(field);

  return (
    <Field name={id} validate={validate}>
      {({ input, meta }) => (
        <FieldSet
          label={label}
          id={makeId(formId, id)}
          error={!!meta.error && meta.touched && meta.error}
          required={Boolean(required)}
        >
          <Input
            {...input}
            id={makeId(formId, id)}
            type="email"
            placeholder={hintText}
            aria-required={Boolean(required)}
            disabled={disabled}
          />
        </FieldSet>
      )}
    </Field>
  );
};

export const MarketoFieldWrapperTextArea = (field: MarketoFieldProps) => {
  const { id, formId, label, hintText, required, disabled } = field;
  const validate = useValidate(field);

  return (
    <Field name={id} validate={validate}>
      {({ input, meta }) => (
        <FieldSet
          label={label}
          id={makeId(formId, id)}
          error={!!meta.error && meta.touched && meta.error}
          required={Boolean(required)}
        >
          <TextArea
            {...input}
            id={makeId(formId, id)}
            placeholder={hintText}
            aria-required={Boolean(required)}
            disabled={disabled}
          />
        </FieldSet>
      )}
    </Field>
  );
};

export const MarketoFieldWrapperTelephone = (field: MarketoFieldProps) => {
  const { id, formId, label, hintText, required, disabled } = field;
  const validate = useValidate(field);

  return (
    <Field name={id} validate={validate}>
      {({ input, meta }) => (
        <FieldSet
          label={label}
          id={makeId(formId, id)}
          error={!!meta.error && meta.touched && meta.error}
          required={Boolean(required)}
        >
          <Input
            {...input}
            id={makeId(formId, id)}
            type="tel"
            placeholder={hintText}
            aria-required={Boolean(required)}
            disabled={disabled}
          />
        </FieldSet>
      )}
    </Field>
  );
};

export const MarketoFieldWrapperText = (field: MarketoFieldProps) => {
  const { id, formId, label, hintText, required, disabled } = field;
  const validate = useValidate(field);

  return (
    <Field name={id} validate={validate}>
      {({ input, meta }) => (
        <FieldSet
          label={label}
          id={makeId(formId, id)}
          error={!!meta.error && meta.touched && meta.error}
          required={Boolean(required)}
        >
          <Input
            {...input}
            id={makeId(formId, id)}
            type="text"
            placeholder={hintText}
            aria-required={Boolean(required)}
            disabled={disabled}
          />
        </FieldSet>
      )}
    </Field>
  );
};

const isCheckboxChecked = (value: string, key: string) => {
  return value.split(",").includes(key);
};

const updateCheckboxes = (value: string, key: string, checked: boolean) => {
  let values = value.split(",");

  if (!checked) {
    values = values.filter((k) => k !== key);
  } else if (!values[key]) {
    values.push(key);
  }

  return values.filter((v) => v).join(",");
};

/*
 * Custom Marketo control for a group of checkbox with non-standard field
 * names. Didn't implement 'fieldMetaData.labelToRight' option for now
 * as we don't use it.
 *
 * Multiple values sohuld be serialised as `one,two,three` and share
 * same ID in request.
 */

export const MarketoFieldWrapperCheckboxes = (field: MarketoFieldProps) => {
  const {
    id,
    formId,
    label,
    required,
    disabled,
    fieldMetaData: { values },
  } = field;
  const validate = useValidate(field);

  return (
    <Field name={id} validate={validate}>
      {({ input: { onChange, value: commonValue }, meta }) => {
        return (
          <FieldSet
            label={label}
            id={makeId(formId, id)}
            error={!!meta.error && meta.touched && meta.error}
            required={Boolean(required)}
          >
            {values.map(({ label, value }) => (
              <Checkbox
                key={value}
                checked={isCheckboxChecked(commonValue, value)}
                onChange={(checked) =>
                  onChange(updateCheckboxes(commonValue, value, checked))
                }
                disabled={disabled}
              >
                {label}
              </Checkbox>
            ))}
          </FieldSet>
        );
      }}
    </Field>
  );
};
