import { meta } from "./calculator.mdx";

export interface ItemAccess {
  kind: "access";
  label: string;
  title: string;
  price: number;
  description: string;
  maxQuantity: number;
  selected?: boolean;
  quantity?: number;
}

export interface ItemOptionValue {
  title: string;
  enterpriseOnly?: boolean;
  selected?: boolean;
}

export interface ItemOption {
  kind: "option";
  title: string;
  description: string;
  variants: ItemOptionValue[];
}

export type Item = ItemAccess | ItemOption;

let items: Item[] = [];

if (isItems(meta?.items)) {
  items = meta.items;
}

export default function getItems(): Item[] {
  return JSON.parse(JSON.stringify(items));
}

function isItems(maybeItems: unknown): maybeItems is Item[] {
  if (!Array.isArray(maybeItems)) {
    throw new Error("calculator:items is not a list");
  }

  // we should add an accurate validation here if applicable

  return true;
}
