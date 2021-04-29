import { useState } from "react";
import getItems, { ItemOption, ItemAccess } from "./getItems";

export default function useCalculator() {
  // init state
  const [state, setState] = useState(() => {
    const items = getItems();
    const optionItems = items.filter(
      (i): i is ItemOption => i.kind === "option"
    );

    const accessItems = items.filter(
      (i): i is ItemAccess => i.kind === "access"
    );

    return {
      optionItems,
      accessItems,
    };
  });

  const { accessItems, optionItems } = state;
  const price = calcPrice(accessItems, optionItems);

  const changeItemAccessQuantity = (item: ItemAccess, quantity = 1) => {
    state.accessItems[state.accessItems.indexOf(item)] = {
      ...item,
      quantity,
    };

    setState({
      ...state,
      accessItems: [...state.accessItems],
    });
  };

  const checkItemAccess = (item: ItemAccess) => {
    state.accessItems[state.accessItems.indexOf(item)] = {
      ...item,
      selected: !item.selected,
    };

    setState({
      ...state,
      accessItems: [...state.accessItems],
    });
  };

  const changeItemOptionValue = (item: ItemOption, valueIndex: number) => {
    item.variants.forEach((i) => (i.selected = false));
    item.variants[valueIndex] = {
      ...item.variants[valueIndex],
      selected: true,
    };

    const index = state.optionItems.indexOf(item);
    state.optionItems[index] = {
      ...item,
    };

    setState({ ...state });
  };

  return {
    price,
    accessItems,
    optionItems,
    changeItemOptionValue,
    changeItemAccessQuantity,
    checkItemAccess,
  };
}

function calcPrice(accItems: ItemAccess[], optItems: ItemOption[]): number {
  const noPriceForEnterprise = optItems.some((i) =>
    i.variants.some((v) => v.selected && v.enterpriseOnly)
  );
  if (noPriceForEnterprise) {
    return Infinity;
  }

  // find total sum amount of selected items
  return accItems
    .filter((i) => i.selected === true)
    .map(({ quantity = 1, price }) => quantity * price)
    .reduce((total, price) => total + price, 0);
}
