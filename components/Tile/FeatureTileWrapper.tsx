import Flex from "components/Flex";
import Box from "components/Box";
import Icon, { IconProps, IconName } from "components/Icon";

interface FeatureTileWrapperProps {
  children: React.ReactNode;
  iconName: IconName;
  iconSize: IconProps["size"];
  title: string;
}

const FeatureTileWrapper = ({
  children,
  iconName,
  iconSize,
  title,
}: FeatureTileWrapperProps) => {
  return (
    <>
      <Flex flexDirection="row" pl={[3, 4, 11]} pt={[4, 7, 9]} pb={[4, 6]}>
        <Icon color="dark-purple" name={iconName} size={iconSize}></Icon>
        <Box fontSize="header-3" color="darkest" lineHeight="lg" pl={3}>
          {title}
        </Box>
      </Flex>
      <Flex px={[3, 3, 10]} pb={6}>
        {children}
      </Flex>
    </>
  );
};

export default FeatureTileWrapper;
