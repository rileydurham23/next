import NextImage from "next/image";
import Box, { BoxProps } from "components/Box";
import * as logos from "./logos";
import { CompanyId } from "./types";
import companiesList from "./companiesList";

export type Props = {
  id: CompanyId;
} & BoxProps;

export default function Company({ id, ...props }: Props) {
  const url: string = logos[id];
  const data = companiesList.find(({ id: companyId }) => companyId === id);

  return (
    <Box
      borderRadius="default"
      bg="white"
      px="4"
      py={[3, 0]}
      maxHeight="100%"
      maxWidth="100%"
      overflow="hidden"
      boxShadow="0 1px 3px rgba(0, 0, 0, 0.24);"
      {...props}
    >
      <NextImage
        src={url}
        alt={data?.title}
        title={data?.title}
        loading="lazy"
        width="auto"
        height="100%"
        layout="intrinsic"
      />
    </Box>
  );
}
