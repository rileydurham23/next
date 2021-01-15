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
    <Box border="1px solid" borderColor={type} borderRadius="default" my={4}>
      <Box
        color={type === "warning" ? "black" : "white"}
        bg={type}
        height="24px"
        px={3}
        text="text-sm"
        css={`
          text-transform: uppercase;
        `}
      >
        {title || capitalize(type)}
      </Box>
      <Box
        p={3}
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
