import styled from "styled-components";
import css from "@styled-system/css";
import Drift from "react-driftjs";
import Head from "components/Head";
import Layout, { Centrator } from "components/Layout";
import Box from "components/Box";
import SectionHeader from "components/SectionHeader";
import Footer from "components/Footer";
import ArticleCard from "components/ArticleCard";
import SearchSite from "components/SearchSite";
import Link from "components/Link";
import { getArticlesListAndTags } from "server/resources-helpers";

export async function getStaticProps() {
  return { props: { data: await getArticlesListAndTags() } };
}

function BlogIndexPage({ data }) {
  const newArticles = data.list.slice(0, 5).map((art, index) => {
    return (
      <Box as="li" key={index}>
        <ArticleCard meta={art} needImg />
      </Box>
    );
  });
  const restArticles = data.list.slice(5).map((art, index) => {
    return (
      <Box as="li" key={index}>
        <ArticleCard meta={art} />
      </Box>
    );
  });
  const tags = data.tags.map((tag, index) => {
    return (
      <Box as="li" marginRight={[2, 0]} key={index}>
        <StyledTags scheme="site" href="#">
          {tag}
        </StyledTags>
      </Box>
    );
  });

  return (
    <>
      <Head
        title="The Teleport Blog"
        description="Welcome to the Teleport Blog! We write about operating cloud software in production"
      />
      <Layout border="none" behaviour="floating">
        <SectionHeader
          subtitle="Article & News"
          title="Teleport Blog"
          bg="wave-on-gray"
        />
        <Centrator>
          <StyledWrapper>
            <Box maxWidth="920px" mt={["3", "0"]}>
              <StyledTitle as="h2" text="text-xl">
                Articles
              </StyledTitle>
              <Box as="ul" listStyle="none" mt="3" mb="6">
                {newArticles}
              </Box>
              <StyledTitle as="h2" text="text-xl" mt={["8", "11"]}>
                Additional articles
              </StyledTitle>
              <Box as="ul" listStyle="none" mt="3" mb="6">
                {restArticles}
              </Box>
            </Box>
            <StyledSideWrapper>
              <SearchSite />
              <StyledWrapperTags>
                <StyledLineTitle as="h2">Articles by topic</StyledLineTitle>
                <Box
                  as="ul"
                  listStyle="none"
                  mt={["0", "2"]}
                  mb="5"
                  display={["flex", "block"]}
                  flexWrap="wrap"
                >
                  {tags}
                </Box>
              </StyledWrapperTags>
            </StyledSideWrapper>
          </StyledWrapper>
        </Centrator>
      </Layout>
      <Footer />
      <Drift appId={process.env.NEXT_PUBLIC_DRIFT_ID} />
    </>
  );
}

const StyledWrapper = styled("div")(
  css({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    pt: 11,
    flexDirection: ["column-reverse", "row"],

    "@media(max-width: 560px)": {
      pt: 6,
    },
  })
);

const StyledTitle = styled(Box)(
  css({
    textTransform: "uppercase",
    color: "dark-gray",
  })
);

const StyledSideWrapper = styled("div")(
  css({
    display: ["flex", "block"],
    flexShrink: 0,

    "@media(max-width: 680px)": {
      flexDirection: "row",
    },

    "@media(max-width: 560px)": {
      flexDirection: "column-reverse",
    },
  })
);

const StyledLineTitle = styled(StyledTitle)(
  css({
    fontSize: "text-sm",
    lineHeight: "lg",
    mt: [2, 5],
    borderBottom: ["none", "1px solid"],
    borderBottomColor: ["transparent", "lightest-gray"],
  })
);

const StyledWrapperTags = styled("div")(
  css({
    mt: 0,
    width: "initial",

    "@media(max-width: 899px)": {
      mt: -7,
      width: "100%",
    },

    "@media(max-width: 560px)": {
      mt: 3,
    },
  })
);

const StyledTags = styled(Link)(
  css({
    display: "block",
    fontSize: "text-md",
    lineHeight: "lg",
    textDecoration: "none",
    color: "dark-gray",
  })
);

export default BlogIndexPage;
