import Box from "components/Box";
import Flex, { FlexProps } from "components/Flex";
import Icon from "components/Icon";

interface NoticeProps {
  children: React.ReactNode;
}

const Notice = ({ children, ...props }: NoticeProps & FlexProps) => {
  return (
    <Flex
      p={2}
      borderRadius="default"
      border="1px solid"
      borderColor="danger"
      alignItems="center"
      {...props}
    >
      <Icon name="error" mr={2} color="danger" flexShrink="0" />
      <Box fontSize="text-lg" lineHeight="md">
        {children}
      </Box>
    </Flex>
  );
};

export default Notice;
