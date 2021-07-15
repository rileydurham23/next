import Flex from "components/Flex";
import FeatureTile from "./FeatureTile";

type FeatureTileType = React.ReactElement<typeof FeatureTile>;

export interface FeatureTileProps {
  children: FeatureTileType;
}

const FeatureTileDisplay = ({ children }: FeatureTileProps) => {
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent={["center", "flex-start"]}
      alignItems="stretch"
    >
      {children}
    </Flex>
  );
};

export default FeatureTileDisplay;
