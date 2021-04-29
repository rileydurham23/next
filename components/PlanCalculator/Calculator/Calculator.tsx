import { useEffect, useRef, useCallback } from "react";
import { Icon, Flex, Box, BoxProps, Slider } from "components";
import { Table, Row, Cell, Separator } from "components/Table";
import { Dropdown } from "components/Dropdown";
import { transition } from "components/system";
import TitleCell from "./TitleCell";
import { ItemAccess, ItemOption, ItemOptionValue } from "./getItems";
import useCalculator from "./useCalculator";

type Props = BoxProps & {
  onChange: (value: number) => void;
};

export default function Calculator({ onChange, ...props }: Props) {
  const calc = useCalculator();

  useEffect(() => {
    requestAnimationFrame(() => onChange(calc.price));
  }, [calc.price]);

  return (
    <Table borderRight={[undefined, "none"]} {...props}>
      {calc.optionItems.map((item, index) => (
        <RowOption
          key={index}
          item={item}
          onChange={calc.changeItemOptionValue}
        />
      ))}
      <Separator.Row>
        <Separator.Cell textAlign="start">Products</Separator.Cell>
        <Separator.Cell>Capacity</Separator.Cell>
      </Separator.Row>
      {calc.accessItems.map((item, index) => (
        <RowAccess
          key={index}
          item={item}
          onChecked={() => calc.checkItemAccess(item)}
          onChangeQuantity={(value) =>
            calc.changeItemAccessQuantity(item, value)
          }
        />
      ))}
    </Table>
  );
}

type RowAccessProps = {
  item: ItemAccess;
  onChangeQuantity?: (value: number) => void;
  onChecked?: () => void;
};

function RowAccess({ item, onChangeQuantity, onChecked }: RowAccessProps) {
  const refCb = useRef(onChangeQuantity);
  refCb.current = onChangeQuantity;

  const changeQuantity = useCallback(
    (quantity = 0) => refCb.current(quantity),
    []
  );

  return (
    <Row>
      <TitleCell
        title={item.title}
        hasCheckbox
        hint={item.description}
        checked={item.selected}
        onChangeChecked={onChecked}
      />
      <Cell>
        {item.selected && (
          <Slider
            changeThrottle={200}
            onChange={changeQuantity}
            initialValue={item.quantity}
            label={item.label}
            maxValue={item.maxQuantity}
            width={["100%", "50%"]}
            minWidth={[150, 200]}
            renderMax={(value) => `${value}+`}
          />
        )}
      </Cell>
    </Row>
  );
}

type RowOptionProps = {
  item: ItemOption;
  onChange?: (item: ItemOption, index: number) => void;
};

function RowOption({ item, onChange }: RowOptionProps) {
  const handleChange = (variantId: string) =>
    onChange?.(item, parseInt(variantId, 10));

  const selectedItem = item.variants.find((v) => v.selected === true);
  const selectedItemIndex = item.variants.indexOf(selectedItem);
  const pickId = (value: ItemOptionValue) =>
    String(item.variants.indexOf(value));
  const pickTitle = (value: ItemOptionValue) => value.title;

  let label = null;
  if (selectedItem?.enterpriseOnly) {
    label = "Available with Enterprise plan";
  }

  return (
    <Row>
      <TitleCell title={item.title} hint={item.description} />
      <Cell>
        <Flex
          alignItems={["flex-start", "center"]}
          flexDirection={["column", "row"]}
        >
          <Dropdown
            width={["100%", "50%"]}
            minWidth={[150, 200]}
            variant="dark"
            value={String(selectedItemIndex)}
            options={item.variants}
            onChange={handleChange}
            pickValue={pickId}
            renderOption={pickTitle}
            icon={<Icon name="arrow" size="sm" />}
          />
          <Box
            as="span"
            opacity={label ? 1 : 0}
            display={[label ? "initial" : "none", "initial"]}
            transition={transition([["opacity", "interaction"]])}
            color="dark-purple"
            text={["text-sm", "text-md"]}
            ml={[0, 5]}
            mt={[2, 0]}
          >
            {label ?? " "}
          </Box>
        </Flex>
      </Cell>
    </Row>
  );
}
