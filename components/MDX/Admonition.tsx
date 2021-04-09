import css from "@styled-system/css";
import capitalize from "utils/capitalize";
import Box from "components/Box";
interface AdmonitionProps {
  type: "warning" | "tip" | "note" | "danger";
  title?: string;
  children: React.ReactNode;
}

const Admonition = ({ type, title, children }: AdmonitionProps) => {
  const finalType = type || "tip";

  return (
    <Box
      border="1px solid"
      borderColor={finalType}
      borderRadius="default"
      mb={["16px", "16px"]}
      boxShadow="0 1px 4px rgba(0, 0, 0, 0.24)"
    >
      <Box
        color={finalType === "warning" ? "black" : "white"}
        bg={finalType}
        height="24px"
        px={[2, "12px"]}
        text="text-sm"
        css={`
          text-transform: uppercase;
        `}
      >
        {title || capitalize(finalType)}
      </Box>
      <Box
        px={[2, 3]}
        py={2}
        fontSize={["text-md", "text-lg"]}
        lineHeight="26px"
        css={css({
          "& *:first-child": {
            mt: 0,
          },
          "& *:last-child": {
            mb: 0,
          },
        })}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Admonition;
