import styled from "styled-components";
import css from "@styled-system/css";
import Box from "components/Box";
import Image from "components/Image";
import Link from "components/Link";
import Icon, { IconName } from "components/Icon";

export interface MenuItemProps {
  title: string;
  description: string;
  href: string;
  icon?: IconName;
  image?: string;
}

const MenuItem = ({ icon, image, title, description, href }: MenuItemProps) => {
  return (
    <Link
      href={href}
      passthrough
      display="block"
      px={3}
      py={2}
      borderRadius="sm"
      textDecoration="none"
      transition="all 0.3s"
      css={{
        "&:focus, &:hover": {
          bg: "lightest-gray",
        },
        "& + &": {
          mt: 2,
        },
      }}
    >
      {image && <StyledImage size="80px" mr={2} src={image} />}
      {icon && (
        <Icon
          name={icon}
          color="dark-purple"
          mt={1}
          mr={2}
          css={css({ float: "left" })}
        />
      )}
      <Box
        as="strong"
        display="block"
        fontSize="text-lg"
        lineHeight="lg"
        fontWeight="bold"
        color="dark-purple"
      >
        {title}
      </Box>
      <Box as="span" text="text-md" color="darkest">
        {description}
      </Box>
    </Link>
  );
};

export default MenuItem;

const StyledImage = styled(Image)(css({ float: "left" }));
