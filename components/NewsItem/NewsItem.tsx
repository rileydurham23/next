import styled from "styled-components";
import Flex from "components/Flex";
import Centrator from "components/Centrator";

/**
 * This is the News component on the homepage underneath the Get Started button in the header
 *
 * & on use-cases/aws page next to Get Started button
 */

export interface NewsItemProps {
  newsImg?: boolean;
  children: React.ReactNode;
  px?: string | number | string[] | number[];
}
export const NewsItem = ({
  newsImg = false,
  children,
  px = [3, 3, 11],
  ...props
}: NewsItemProps) => {
  return (
    <Centrator
      flexDirection="row"
      mt={2}
      {...props}
      justifyContent="flex-start"
      px={px}
    >
      <Flex
        ml={newsImg ? 3 : 0}
        fontSize="12px"
        alignItems="center"
        flexWrap="wrap"
        gap="5px"
        justifyContent="center"
        {...props}
      >
        {newsImg && <StyledNewsImg>NEW</StyledNewsImg>}
        {children}
      </Flex>
    </Centrator>
  );
};

const StyledNewsImg = styled("div")({
  color: "white",
  textAlign: "center",
  backgroundColor: "#00BFA5",
  borderRadius: "200px",
  fontSize: "11px",
  fontWeight: "bold",
  width: "44px",
  height: "26px",
});
