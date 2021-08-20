import Box from "components/Box";

export interface FieldSetProps {
  children: React.ReactNode;
  description?: string;
  error?: string;
  id?: string;
  label: string;
  required?: boolean;
}

export const FieldSet = ({
  children,
  description,
  error,
  id,
  label,
  required,
}: FieldSetProps) => {
  return (
    <Box as="fieldset" border="none" py={1}>
      {label && (
        <Box
          as="label"
          htmlFor={id}
          display="block"
          fontSize="text-sm"
          fontWeight="bold"
          lineHeight="md"
          color="black"
        >
          {label}{" "}
          {required && (
            <Box as="span" color="red">
              *
            </Box>
          )}
        </Box>
      )}
      <Box my={1} display="flex" justifyContent="stretch">
        {children}
      </Box>
      {error && (
        <Box fontSize="text-sm" lineHeight="md" color="red">
          {error}
        </Box>
      )}
      {description && (
        <Box fontSize="text-sm" lineHeight="md" color="gray">
          {description}
        </Box>
      )}
    </Box>
  );
};
