import css from "@styled-system/css";
import styled from "styled-components";
import Box from "components/Box";
import { Checkbox } from "components/Checkbox";
import { HintIcon } from "components/HintIcon";
import { HorizontalHeader } from "components/Table";

interface Props {
  title: string;
  hasCheckbox?: boolean;
  hint?: string;
  checked?: boolean;
  onChangeChecked?: (value: boolean) => void;
}

export default function TitleCell({
  title,
  checked = false,
  onChangeChecked,
  hint,
  hasCheckbox,
}: Props) {
  let content = (
    <Box
      as="span"
      textAlign="left"
      fontSize={["text-sm", "text-lg"]}
      lineHeight="lg"
    >
      {title}
    </Box>
  );

  if (hasCheckbox) {
    content = (
      <Checkbox
        checked={checked}
        onChange={onChangeChecked}
        flex="1"
        flexShrink="0"
      >
        {content}
      </Checkbox>
    );
  }

  return (
    <HorizontalHeader>
      <StyledTitleRow>
        {content}
        {hint && (
          <HintIcon
            icon="helpCircle"
            mr="-4px"
            color="gray"
            lineHeight="sm"
            size="sm"
          >
            {hint}
          </HintIcon>
        )}
      </StyledTitleRow>
    </HorizontalHeader>
  );
}

const StyledTitleRow = styled("div")(
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    fontSize: "text-lg",
    lineHeight: "lg",
    fontWeight: "bold",
  })
);
