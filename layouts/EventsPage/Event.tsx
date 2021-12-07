import { format } from "date-fns";
import css from "@styled-system/css";
import { truncate } from "utils/string";
import Box, { BoxProps } from "components/Box";
import Flex from "components/Flex";
import Link from "components/Link";
import Icon from "components/Icon";

const formatDate = (start: Date, end?: Date): string => {
  const startString = format(start, "yyyy, MMM d");

  if (!end) {
    return startString;
  }

  if (start.getMonth() === end.getMonth()) {
    return `${startString}-${format(end, "d")}`;
  }

  return `${startString} - ${format(end, "yyyy, MMM d")}`;
};

export interface EventProps {
  title: string;
  description: string;
  link: string;
  src?: string;
  start: Date;
  end?: Date;

  location: string;
}

export const Event = ({
  title,
  description,
  link,
  src,
  start,
  end,
  location,
  ...restProps
}: BoxProps & EventProps) => {
  return (
    <Box
      bg="white"
      borderRadius="md"
      boxShadow="0 1px 4px rgba(0,0,0,.12)"
      m={0}
      minHeight={["auto", "160px"]}
      padding={3}
      transition="all .3s"
      position="relative"
      overflow="hidden"
      pr={[3, "200px"]}
      css={css({
        "&:hover, &:focus": {
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.24)",
          transform: "translateY(-4px)",
        },
      })}
      {...restProps}
    >
      <Link href={link} textDecoration="none" display="block">
        <Box
          as="time"
          color="dark-gray"
          fontSize="text-xs"
          display="inline-block"
          lineHeight="md"
          textTransform="uppercase"
        >
          {formatDate(start, end)}
        </Box>
        <Flex
          as="address"
          color="darkest"
          fontSize="text-sm"
          fontStyle="normal"
          fontWeight="bold"
          lineHeight="md"
          alignItems="center"
          mb={3}
        >
          <Icon name="map" width="12px" height="12px" float="left" mr={2} />
          {location}
        </Flex>
        <Box
          as="strong"
          color="light-blue"
          display="block"
          fontWeight="bold"
          fontSize={["text-md", "text-lg"]}
          lineHeight="md"
          mb={2}
          css={css({
            "&:visited": {
              color: "dark-purple",
            },
          })}
        >
          {title}
        </Box>
        <Box
          as="p"
          m={0}
          color="dark-gray"
          fontSize={["text-sm", "text-md"]}
          lineHeight="md"
          title={description}
        >
          {truncate(description, 120)}
        </Box>
        <Box
          display={["none", "block"]}
          bg="lightest-gray"
          backgroundPosition="50%"
          backgroundSize="cover"
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          zIndex={1}
          width="180px"
          css={css({ backgroundImage: `url(${src})` })}
        />
      </Link>
    </Box>
  );
};
