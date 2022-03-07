import { ReactNode } from "react";
import styled from "styled-components";
import css from "@styled-system/css";
import Heading from "components/Heading";
import Box from "components/Box";
import Flex from "components/Flex";

type Props = {
  children: ReactNode | Array<ReactNode>;
  description?: ReactNode;
  title: string;
};

function AvatarList({ children, description, title, ...props }: Props) {
  return (
    <Box as="section" pb={[6, 11]} width="100%" {...props}>
      <Flex flexDirection="column">
        <Heading title={title} mb={2} />
        {description}
        <StyledUL>{children}</StyledUL>
      </Flex>
    </Box>
  );
}

export default AvatarList;

const StyledUL = styled("ul")(
  css({
    listStyle: "none",
    m: 0,
    pt: 4,
    pl: 0,
  })
);
