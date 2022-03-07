import styled from "styled-components";
import css from "@styled-system/css";
import NextImage from "next/image";
import Flex from "components/Flex";
import Box from "components/Box";
import AvatarDropdown from "./AvatarDropdown";

interface SpeakerNode extends HTMLElement {
  props?: {
    children?: string;
  };
}

type AvatarItemProps = {
  children: React.ReactNode;
  brief?: string;
  imgSize?: number;
  src: string;
  title: string;
  speaker?: SpeakerNode;
  date?: string;
};

function AvatarListItem({
  children,
  brief,
  src,
  imgSize = 240,
  title,
  speaker,
  date,
  ...props
}: AvatarItemProps) {
  return (
    <StyledItem {...props}>
      <Flex
        position="relative"
        height={imgSize}
        width={imgSize}
        flexShrink={0}
        mb={[3, 0]}
      >
        <NextImage
          alt={speaker.props.children}
          objectFit="contain"
          layout="fill"
          src={src}
        />
      </Flex>
      <Flex flexDirection="column" ml={[3, 52]}>
        <StyledItemText fontSize="header-4" pt={1}>
          {title}
        </StyledItemText>
        <StyledItemText pt={1} pb={1}>
          {speaker}
        </StyledItemText>
        <StyledItemText pt={1} pb={1}>
          {date}
        </StyledItemText>
        {/* the description, in a preview box */}
        <AvatarDropdown brief={brief}>{children}</AvatarDropdown>
      </Flex>
    </StyledItem>
  );
}

const StyledItem = styled("li")(
  css({
    display: "flex",
    flexDirection: ["column", "row"],
    alignItems: ["center", "flex-start"],
    mt: 7,
  })
);

const StyledItemText = styled(Box)(
  css({
    fontWeight: "bold",
    lineHeight: "lg",
  })
);

export default AvatarListItem;
