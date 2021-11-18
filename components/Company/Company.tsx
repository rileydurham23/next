import styled from "styled-components";
import css from "@styled-system/css";
import { transition } from "components/system";
import NextImage from "next/image";
import Flex, { FlexProps } from "components/Flex";
import Link from "components/Link";
import * as logos from "./logos";
import { CompanyId } from "./types";
import companiesList from "./companiesList";

export type Props = {
  id: CompanyId;
  needLink?: boolean;
} & FlexProps;

export default function Company({ id, needLink, ...props }: Props) {
  const url: string = logos[id];
  const data = companiesList.find(({ id: companyId }) => companyId === id);
  const Wrapper = needLink && data?.caseStudy ? StyledLink : Flex;

  return (
    <Wrapper
      borderRadius="default"
      bg="white"
      height="100%"
      maxWidth="100%"
      overflow="hidden"
      justifyContent="center"
      href={data?.caseStudy}
      {...props}
    >
      <NextImage
        src={url}
        alt={data?.title}
        title={data?.title}
        layout="intrinsic"
        width="195"
        height="195"
      />
    </Wrapper>
  );
}

const StyledLink = styled(Link)(
  css({
    display: "flex",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "dark-purple",
    transition: transition([["boxShadow", "interaction"]]),
    "&:hover, &:focus": {
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.24)",
    },
  })
);
