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
      height="100%"
      maxWidth="100%"
      overflow="hidden"
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
