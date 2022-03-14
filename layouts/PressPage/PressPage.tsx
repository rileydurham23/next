import styled from "styled-components";
import css from "@styled-system/css";
import { compareDesc } from "date-fns";
import Centrator from "components/Centrator";
import Drift from "components/Drift";
import SectionHeader from "components/SectionHeader";
import Head from "components/Head";
import Layout from "components/Layout";
import Button from "components/Button";
import Footer from "components/Footer";
import OurOffices from "components/OurOffices";
import Section from "components/Section";
import TryTeleport from "components/TryTeleport";
import { PressList } from "./PressList";
import { PressListItemProps } from "./PressListItem";
import bgOrbit from "./assets/bg-orbit-small.png";

const sortItems = (items: PressListItemProps[]): PressListItemProps[] =>
  items.sort((a, b) => compareDesc(a.date, b.date));

interface ContentPageProps {
  meta: {
    title?: string;
    subtitle?: string;
    description?: string;
    noindex?: boolean;
    articles: PressListItemProps[];
    textColor?: string;
  };
  children: React.ReactNode;
}

export const PressPage = ({
  meta: { title, description, noindex, articles, textColor },
}: ContentPageProps) => {
  return (
    <>
      <Head title={title} description={description} noIndex={noindex} />
      <Layout border="none" behaviour="floating">
        <SectionHeader
          subtitle="Press"
          title="Recent publications and media resources"
          description={
            <>
              <Button
                as="a"
                href="mailto:press@goteleport.com"
                shape="outline"
                variant="secondary"
              >
                Request information
              </Button>
            </>
          }
          bg="wave"
          textColor={textColor}
        />
        <Section bg="grayGradient">
          <Centrator py={[3, 11]}>
            <PressList items={sortItems(articles)} />
          </Centrator>
        </Section>
        <Section bg="grayGradient">
          <Centrator flexDirection="column" py={[3, 11]}>
            <StyledHeader>Media Resources</StyledHeader>
            <StyledCards>
              <StyledCard>
                <StyledCardTitle>Contact information </StyledCardTitle>
                <StyledCardContent>
                  Please use the contact information below to reach us regarding
                  publications, blog posts, multi media, and other press related
                  topics.
                </StyledCardContent>
                <Button
                  as="a"
                  href="mailto:press@goteleport.com"
                  variant="secondary"
                  shape="outline"
                  width={["100%", "auto"]}
                >
                  press@goteleport.com
                </Button>
              </StyledCard>
              <StyledCard>
                <StyledCardTitle>Press kit</StyledCardTitle>
                <StyledCardContent>
                  Our press kit contains official logos, product photos, and
                  exec team pictures. Please contact if you need additional
                  resources. Thank you!
                </StyledCardContent>
                <Button
                  as="a"
                  href="mailto:press@goteleport.com"
                  variant="secondary"
                  shape="outline"
                  width={["100%", "auto"]}
                >
                  Request presskit
                </Button>
              </StyledCard>
            </StyledCards>
          </Centrator>
        </Section>
        <OurOffices />
        <TryTeleport />
      </Layout>
      <Footer />
      <Drift />
    </>
  );
};

const StyledHeader = styled("h2")(
  css({
    mt: 0,
    mb: [3, 7],
    fontSize: "header-1",
    fontWeight: "black",
    lineHeight: "xxl",
    textAlign: "center",
  })
);

const StyledCards = styled("div")(
  css({
    display: "grid",
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(2, 1fr)"],
    gap: ["16px", "24px"],
    px: [0, "96px"],
  })
);

const StyledCard = styled("div")(
  css({
    background: `white url('${bgOrbit}') top center no-repeat`,
    backgroundSize: "cover",
    borderRadius: ["md", "lg"],
    border: ["1px solid dark-purple", "1px solid transparent"],
    boxShadow: "0 4px 16px rgba(0, 0, 0, .12)",
    p: [3, 6],
  })
);

const StyledCardTitle = styled("h3")(
  css({
    fontSize: "header-4",
    lineHeight: "md",
    color: "darkest",
    m: 0,
  })
);

const StyledCardContent = styled("p")(
  css({
    mt: 3,
    mb: 4,
    fontSize: "text-md",
    lineHeight: "md",
    color: "darkest",
  })
);
