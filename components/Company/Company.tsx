import Image from "components/Image";
import Flex, { FlexProps } from "components/Flex";
import * as logos from "./logos";
import { CompanyId } from "./types";
import companiesList from "./companiesList";

export type Props = {
  id: CompanyId;
} & FlexProps;

export default function Company({ id, ...props }: Props) {
  const url: string = logos[id];
  const data = companiesList.find(({ id: companyId }) => companyId === id);

  return (
    <Flex
      borderRadius="default"
      bg="white"
      px="4"
      py={[3, 0]}
      height="100%"
      maxWidth="100%"
      overflow="hidden"
      boxShadow="0 1px 3px rgba(0, 0, 0, 0.24);"
      {...props}
    >
      <Image
        src={url}
        alt={data?.title}
        title={data?.title}
        loading="lazy"
        width="auto"
        height="100%"
      />
    </Flex>
  );
}
