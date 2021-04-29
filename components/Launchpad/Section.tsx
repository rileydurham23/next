import Box from "components/Box";
import { StyledLink } from "components/Link";
import { StyledHeading } from "./StyledHeading";
import { SectionData } from "./types";

interface Props {
  data: SectionData;
  embedded?: boolean;
}

function renderItem(item: SectionData["items"][number], index: number) {
  return (
    <Box as="li" key={index} mt={[2, 0]}>
      {"items" in item ? (
        <Section data={item} embedded />
      ) : (
        <StyledLink href={item.url} text="text-sm" passthrough>
          {item.title}
        </StyledLink>
      )}
    </Box>
  );
}

export function Section({ data, embedded }: Props) {
  return (
    <>
      <StyledHeading
        variant={embedded ? "embedded" : "plain"}
        text={embedded ? "text-sm" : "text-lg"}
      >
        {data.title}
      </StyledHeading>
      <Box as="ul" margin="0" padding="0" listStyle="none">
        {data.items.map(renderItem)}
      </Box>
    </>
  );
}
