import css from "@styled-system/css";
import styled from "styled-components";

import Box from "components/Box";
import Button from "components/Button";
import Flex from "components/Flex";
import Link from "components/Link";
import {
  application,
  bluek8,
  db,
  desktop,
  kubernetes,
  lightBlueDb,
  lightPurpleApp,
  pam,
  purpleBlueDesktop,
  purpleServer,
  server,
} from "./assets";

interface NewProductCardProps {
  cardBG?: string;
  description?: string;
  href?: string;
  image: string;
  title?: string;
}

const cardBackgrounds = {
  blue: `url("${bluek8}")`,
  lightBlue: `url("${lightBlueDb}")`,
  lightPurple: `url("${lightPurpleApp}")`,
  purple: `url("${purpleServer}")`,
  purpleBlue: `url("${purpleBlueDesktop}")`,
};

const cardCoverImage = {
  application: `url("${application}")`,
  db: `url("${db}")`,
  desktop: `url("${desktop}")`,
  kubernetes: `url("${kubernetes}")`,
  pam: `url("${pam}")`,
  server: `url("${server}")`,
};

export const NewProductCard = ({
  cardBG,
  description,
  href,
  image,
  title,
}: NewProductCardProps) => {
  const backgroundImage = cardBackgrounds[cardBG];
  const coverImage = cardCoverImage[image];

  return (
    <>
      {!title ? (
        <PamWrapper>
          <PamCardContainer backgroundImage={coverImage} />
        </PamWrapper>
      ) : (
        <StyledWrapper>
          <StyledLink href={href}>
            <TopHalf>
              <BackgroundLayer backgroundImage={backgroundImage} />
              <CoverPhotoLayer backgroundImage={coverImage} />
            </TopHalf>
            <BottomHalf>
              <TitleBox>{title}</TitleBox>
              <DescriptionBox>{description}</DescriptionBox>
              <StyledButton as={Box} variant="secondary" shape="outline">
                Learn More
              </StyledButton>
            </BottomHalf>
          </StyledLink>
        </StyledWrapper>
      )}
    </>
  );
};

const BackgroundLayer = styled(Box)(
  css({
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderTopLeftRadius: "md",
    borderTopRightRadius: "md",
    height: "150px",
  })
);

const BottomHalf = styled(Flex)(
  css({
    flexDirection: "column",
    height: "58%",
  })
);

const StyledLink = styled(Link)(
  css({
    color: "black",
    textDecoration: "none",
  })
);

const StyledButton = styled(Button)(
  css({
    mx: 4,
    mt: 5,
  })
);

const CoverPhotoLayer = styled(Box)(
  css({
    backgroundRepeat: "no-repeat",
    height: "150px",
    backgroundPosition: "right",
    position: "relative",
    top: "-150px",
    borderTopRightRadius: "md",
  })
);

const DescriptionBox = styled(Box)(
  css({
    color: "gray",
    fontSize: "text-md",
    lineHeight: "md",
    height: "50px",
    py: 2,
    px: 4,
  })
);

const PamCardContainer = styled(Box)(
  css({
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "360px",
    backgroundPosition: "center",
    display: ["none", "inherit"],
  })
);

const PamWrapper = styled(Box)(
  css({
    width: "100%",
  })
);

const StyledWrapper = styled(Box)(
  css({
    borderRadius: "md",
    boxShadow: "0px 2px 8px rgba(12, 12, 14, 0.24)",
    height: "360px",
    width: "100%",
    maxWidth: "394px",
    transition: ".3s all",
    "&:hover": {
      boxShadow: "0 8px 32px rgba(0, 0, 0, .24)",
      transform: "translateY(-2px)",
    },
  })
);

const TitleBox = styled(Box)(
  css({
    fontSize: "header-3",
    fontWeight: "bold",
    lineHeight: "lg",
    pt: 4,
    px: 4,
  })
);

const TopHalf = styled(Box)(
  css({
    height: "42%",
  })
);
