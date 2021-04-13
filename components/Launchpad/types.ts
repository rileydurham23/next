interface BasicSectionItem {
  id: string;
  title: string;
}

interface Link extends BasicSectionItem {
  url: string;
}

export interface SectionData extends BasicSectionItem {
  items: Array<Link | SectionData>;
}
