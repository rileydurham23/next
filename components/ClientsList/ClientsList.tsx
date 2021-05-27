import styled from "styled-components";
import css from "@styled-system/css";
import Flex from "components/Flex";
import Box, { BoxProps } from "components/Box";
import { Centrator } from "components/Layout";
import theme from "components/theme";
import Company, { CompanyId } from "components/Company";
import { StyledSystemProps } from "components/system";

type Props = { clients: CompanyId[] } & BoxProps;

export default function ClientsList({ clients, ...props }: Props) {
  return (
    <Box as="section" {...props}>
      <Centrator>
        <Flex flexDirection="column" alignItems="center" width="100%" py="6">
          <Box as="h2" fontSize="0" color="white">
            Clients
          </Box>
          <Box as="p" fontSize="text-lg" lineHeight="lg" fontWeight="bold">
            Trusted by Leading Organizations
          </Box>

          <StyledList>
            {clients.map((id) => (
              <StyledItem key={id}>
                <Company
                  id={id}
                  px="4"
                  py={[3, 0]}
                  boxShadow="0 1px 3px rgba(0, 0, 0, 0.24);"
                />
              </StyledItem>
            ))}
          </StyledList>
        </Flex>
      </Centrator>{" "}
    </Box>
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
    mt: 6,
  })
);
