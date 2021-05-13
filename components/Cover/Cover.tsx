import styled from "styled-components";
import { all, css, media, StyledSystemProps } from "components/system";
import PageIntro, { Props as PageIntroProps } from "components/PageIntro";
import { Centrator } from "components/Layout";
import earthUrl from "./assets/earth.jpg";

export type Props = PageIntroProps;

export default function Cover(props: Props) {
  return (
    <StyledWrapper backgroundImage={`url(${earthUrl})`}>
      <Centrator>
        <PageIntro
          theme={"light" as const}
          maxWidth={["100%", "41%"]}
          verticalResponsive={false}
          {...props}
        />
      </Centrator>
    </StyledWrapper>
  );
}

const StyledWrapper = styled("section")<StyledSystemProps>(
  css({
    display: "flex",
    alignItems: "center",
    boxSizing: "content-box",
    backgroundColor: "#124074",
    backgroundSize: "cover",
    backgroundPositionY: "center",
    minHeight: [200, 437],
    width: "100%",
  }),
  media("mdVertical", {
    minHeight: 200,
  }),
  all
);
