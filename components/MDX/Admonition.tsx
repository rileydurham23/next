import css from "@styled-system/css";
import capitalize from "utils/capitalize";
import Box from "components/Box";
interface AdmonitionProps {
  type: "warning" | "tip" | "note" | "danger";
  title?: string;
  children: React.ReactNode;
}

const Admonition = ({ type, title, children }: AdmonitionProps) => {
  return (
    <Box
      border="1px solid"
      borderColor={type}
      borderRadius="default"
      mb={[2, 3]}
    >
      <Box
        color={type === "warning" ? "black" : "white"}
        bg={type}
        height="24px"
        px={[2, 3]}
        text="text-sm"
        css={`
          text-transform: uppercase;
        `}
      >
        {title || capitalize(type)}
      </Box>
      <Box
        p={[2, 3]}
        fontSize={["text-md", "text-lg"]}
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
