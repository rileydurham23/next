import styled from "styled-components";
import css from "@styled-system/css";
import Flex, { FlexProps } from "components/Flex";
import Box from "components/Box";
import theme from "components/theme";
import Company, { CompanyId } from "components/Company";
import { StyledSystemProps } from "components/system";

type Props = { clients: CompanyId[] } & FlexProps;

export default function ClientsList({ clients, ...props }: Props) {
  return (
    <Flex
      as="section"
      flexDirection="column"
      alignItems="center"
      width="100%"
      py="6"
      {...props}
    >
      <Box as="h2" fontSize="0" color="white">
        Clients
      </Box>
      <Box as="p" color="gray" fontWeight="bold">
        Trusted by Leading Orgnizations
      </Box>

      <StyledList>
        {clients.map((id) => (
          <StyledItem key={id}>
            <Company id={id} />
          </StyledItem>
        ))}
      </StyledList>
    </Flex>
  );
}

const StyledItem = styled("li")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    height: ["auto", "100px"],
    my: 3,
    width: ["100%", `calc(20% - ${theme.space[4]}px)`],
    ml: [0, 4],
    "&:nth-child(5n+1)": {
      ml: [0, 0],
    },
  })
);

const StyledList = styled("ul")<StyledSystemProps>(
  css({
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    listStyle: "none",
    m: 0,
    p: 0,
    mt: 7,
  })
);
