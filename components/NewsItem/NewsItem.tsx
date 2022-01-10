import styled from "styled-components";
import Flex from "components/Flex";
import Centrator from "components/Centrator";

/**
 * This is the News component on the homepage underneath Get Started button in the header
 */

export interface NewsItemProps {
  newsImg?: boolean;
  children: React.ReactNode;
}
export const NewsItem = ({ newsImg = false, children }: NewsItemProps) => {
  return (
    <Centrator flexDirection="row" mt={2} justifyContent="flex-start">
      {newsImg && <StyledNewsImg>NEW</StyledNewsImg>}
      <Flex ml={newsImg ? 3 : 0} fontSize="14px">
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
