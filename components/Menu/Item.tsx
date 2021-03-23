import styled from "styled-components";
import { css, media } from "components/system";
import Image from "components/Image";
import Link from "components/Link";
import Icon, { IconName } from "components/Icon";

export interface MenuItemProps {
  title: string;
  description: string;
  href: string;
  icon?: IconName;
  image?: string;
  mobileOnly?: boolean;
}

const MenuItem = ({
  icon,
  image,
  title,
  description,
  href,
  mobileOnly,
}: MenuItemProps) => {
  return (
    <StyledWrapper href={href} passthrough mobileOnly={mobileOnly}>
      {image && <StyledImage src={image} alt="" />}
      {icon && (
        <Icon
          name={icon}
          color="dark-purple"
          mt={1}
          mr={2}
          css={css({ float: "left" })}
        />
      )}
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledWrapper>
  );
};

export default MenuItem;

const StyledImage = styled(Image)(
  css({
    float: "left",
    mr: 2,
    border: "10px solid transparent",
    width: "60px",
    height: "60px",
  }),
  media("sm", {
    width: "90px",
    height: "90px",
    mt: 2,
  })
);

const StyledWrapper = styled(Link)(
  ({ mobileOnly }: { mobileOnly?: boolean }) => [
    css({
      display: mobileOnly ? ["block", "none"] : "block",
      overflow: "hidden",
      px: 3,
      py: 2,
      borderRadius: "sm",
      transition: "all 0.3s",
      lineHeight: "24px",
      textAlign: "left",
      textDecoration: "none",
      "&:focus, &:hover": {
        bg: "lightest-gray",
      },
      "& + &": {
        mt: 2,
      },
    }),
    media("sm", {
      border: "1px solid",
      borderColor: "lightest-gray",
    }),
  ]
);

const StyledTitle = styled("strong")(
  css({
    display: "block",
    fontSize: "text-lg",
    lineHeight: "lg",
    fontWeight: "bold",
    color: "dark-purple",
  })
);

const StyledDescription = styled("span")(
  css({
    display: "block",
    fontSize: "text-md",
    lineHeight: "md",
    color: "darkest",
  })
);
