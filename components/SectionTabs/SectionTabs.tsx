import { Children, isValidElement, useState } from "react";
import css from "@styled-system/css";
import Box from "components/Box";
import Flex from "components/Flex";
import HeadlessButton from "components/HeadlessButton";
import Image from "components/Image";
import { Centrator } from "components/Layout";
import { transition } from "components/system";

interface SectionTabsItemProps {
  children: React.ReactNode;
  description: React.ReactNode;
  id?: number;
  selected?: boolean;
  src: string;
  title: string;
  onChange?: (id: number) => void;
}

const SectionTabsItem = ({
  children,
  description,
  id = 0,
  selected = false,
  src,
  title,
  onChange = () => undefined,
}: SectionTabsItemProps) => {
  return (
    <>
      <HeadlessButton
        border={["none", "2px solid"]}
        borderColor={["auto", selected ? "light-purple" : "lightest-gray"]}
        borderRadius="default"
        textAlign="left"
        position="relative"
        px={[0, 3]}
        pt={[0, 3]}
        pb={3}
        css={css({ "&:nth-of-type(1n+2)": { mt: 4 } })}
        onClick={() => onChange(id)}
      >
        <Image
          src={src}
          width="24px"
          height="24px"
          position="absolute"
          top={["4px", "20px"]}
          left={["0", "16px"]}
        />
        <Box
          as="h3"
          ml={6}
          fontSize="text-xl"
          fontWeight="black"
          lineHeight="lg"
        >
          {title}
        </Box>
        <Box mt={2} fontSize="text-md" lineHeight="md" color="darkest">
          {description}
        </Box>
      </HeadlessButton>
      <Flex
        zIndex={selected ? 1 : 0}
        pointerEvents={selected ? "none" : "auto"}
        opacity={["1", selected ? "1" : "0"]}
        transition={transition([["opacity", "slow"]])}
        position={["static", "absolute"]}
        top="0"
        right="0"
        bottom="0"
        left="490px"
        alignItems="stretch"
      >
        {children}
      </Flex>
    </>
  );
};

export interface SectionTabsProps {
  children: React.ReactNode;
  subtitle?: string;
}

export const SectionTabs = ({ children, subtitle }: SectionTabsProps) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const onChange = (index: number) => setCurrentTab(index);

  const childTabProps = Children.toArray(children)
    .filter(
      (c) =>
        isValidElement(c) &&
        c.props.title &&
        c.props.children &&
        c.props.src &&
        c.props.description
    )
    .map(
      (c) => (c as React.ReactComponentElement<typeof SectionTabsItem>).props
    ) as SectionTabsItemProps[];

  return (
    <Centrator py={[4, 11]}>
      <Box minWidth="100%">
        {subtitle && (
          <Box
            mb={[3, 5]}
            fontSize={["text-lg", "text-xl"]}
            fontWeight="bold"
            lineHeight="md"
            color="light-purple"
          >
            {subtitle}
          </Box>
        )}
        <Flex position="relative">
          <Box maxWidth={["auto", "400px"]}>
            {childTabProps.map((props, id) => (
              <SectionTabsItem
                key={id}
                {...props}
                onChange={onChange}
                id={id}
                selected={id === currentTab}
              />
            ))}
          </Box>
        </Flex>
      </Box>
    </Centrator>
  );
};

SectionTabs.Item = SectionTabsItem;
