import Flex from "components/Flex";
import Tile from "./Tile";
import TileList from "./TileList";

type TileType = React.ReactElement<typeof Tile>;
type TileListTyle = React.ReactElement<typeof TileList>;

export interface TileSetProps {
  children: TileType | TileListTyle | Array<TileType | TileListTyle>;
}

const TileSet = ({ children }: TileSetProps) => {
  return (
    <Flex flexWrap="wrap" alignItems="stretch">
      {children}
    </Flex>
  );
};

export default TileSet;
