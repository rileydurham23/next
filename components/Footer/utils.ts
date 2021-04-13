import { SectionData } from "components/Launchpad";
import { idify, getSerialId } from "utils/id";

interface Item {
  title: string;
  url: string;
}

export function createSection(
  title: string,
  items: Array<Item | SectionData>
): SectionData {
  return {
    id: getSerialId(),
    title,
    items: items.map(idify),
  };
}
