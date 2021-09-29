import styled from "styled-components";
import { css, StyledSystemWrapperProps } from "components/system";
import Section from "components/Section";
import SectionHeader, { SectionHeaderProps } from "components/SectionHeader";
import TryTeleport from "components/TryTeleport";
import { Centrator } from "components/Layout";
import NextImage, { ImageProps } from "next/image";
import accessPlane from "./assets/access-plane-all.png";
import MDX from "components/MDX";
import Quote from "components/Qoute";
import { Figure } from "components/MDX/Image";

type CaseStudyProps = {
  children: React.ReactNode;
  companyLogo: Omit<ImageProps, "src">;
  poster: ImageProps["src"];
} & SectionHeaderProps;

const ACCESS_LINK = {
  href: "../..",
  text: "Learn more",
  variant: "secondary",
  shape: "outline",
} as const;

const Overrides = { Quote: LocalQuote, Figure: LocalFigure };

function LocalQuote(props) {
  return <Quote mt="6" {...props} />;
}

function LocalFigure(props) {
  return <Figure xMargin="0" {...props} />;
}

export default function CaseStudy({
  subtitle,
  title,
  description,
  companyLogo,
  poster,
  children,
}: CaseStudyProps) {
  const logoProps = { ...companyLogo, src: poster } as ImageProps;
  return (
    <>
      <SectionHeader
        mode="full"
        subtitle={subtitle}
        title={title}
        description={description}
        bg="wave-on-gray"
      >
        <NextImage {...logoProps} />
      </SectionHeader>
      <Section
        bg="wavelight"
        color="darkest"
        backgroundPosition="top left"
        backgroundSize="auto"
      >
        <StyledCentrator>
          <MDX components={Overrides}>{children}</MDX>
        </StyledCentrator>
      </Section>
      <SectionHeader
        mode="full"
        subtitle="Teleport is part of the"
        title="Access Plane"
        description="Teleport provides an Access Plane that consolidates access controls and auditing across all environments - infrastructure, applications and data."
        bg="wave"
        link={ACCESS_LINK}
      >
        <NextImage
          src={accessPlane}
          width={588}
          height={356}
          layout="intrinsic"
          alt="Teleport Access Plane"
        />
      </SectionHeader>
      <TryTeleport />
    </>
  );
}

const StyledCentrator = styled(Centrator)<StyledSystemWrapperProps>(
  css({
    flexDirection: "column",
    mt: [7, 11],
    mb: [0, 8],
    "& h2": {
      mt: 5,
      mb: 2,
      color: "dark-purple",
    },
    "& a": {
      color: "dark-purple",
    },
  })
);
