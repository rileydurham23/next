import css from "@styled-system/css";
import styled from "styled-components";
import { throttle } from "throttle-debounce";
import { useCallback, ChangeEvent, ReactNode, useState } from "react";
import Flex, { FlexProps } from "components/Flex";
import { all, StyledSystemProps, transition } from "components/system";

export interface SliderProps {
  onChange: (val: number) => void;
  maxValue?: number;
  minValue?: number;
  initialValue?: number;
  label?: string;
  changeThrottle?: number;
  renderMin?: (val: number) => ReactNode;
  renderMax?: (val: number) => ReactNode;
  renderValue?: (val: number) => ReactNode;
}

const DEFAULT_CHANGE_THROTTLE = 100;

const echo = <T extends unknown>(thing: T): T => thing;

export default function Slider({
  onChange,
  label,
  maxValue = 50,
  minValue = 1,
  changeThrottle = DEFAULT_CHANGE_THROTTLE,
  initialValue: value = minValue,
  renderMin = echo,
  renderMax = echo,
  renderValue = echo,
  ...props
}: SliderProps & FlexProps) {
  const limitedValue = Math.min(maxValue, Math.max(minValue, value));
  const [innerValue, setInnerValue] = useState(limitedValue);
  const throttledOnChange = useCallback(throttle(changeThrottle, onChange), [
    changeThrottle,
    onChange,
  ]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      setInnerValue(value);
      throttledOnChange(value);
    },
    [onChange]
  );

  return (
    <Flex
      display="inline-flex"
      alignItems={label ? "center" : "baseline"}
      {...props}
    >
      <StyledSpan minWidth={10} textAlign="end">
        {renderMin(minValue)}
      </StyledSpan>
      <Flex flexDirection="column" alignItems="center" width="100%" px="2">
        {label && <StyledSpan>{label}</StyledSpan>}
        <StyledRange
          type="range"
          onChange={handleChange}
          value={innerValue}
          min={minValue}
          max={maxValue}
        />
        <StyledSpan color="light-purple" fontWeight="bold">
          {renderValue(innerValue)}
        </StyledSpan>
      </Flex>
      <StyledSpan minWidth={30}>{renderMax(maxValue)}</StyledSpan>
    </Flex>
  );
}

const StyledSpan = styled("span")<StyledSystemProps>(
  css({
    color: "gray",
    fontSize: "text-sm",
    lineHeight: "12px",
  }),
  all
);

const thumbStyles = css({
  appearance: "none",
  bg: "white",
  border: "1px solid",
  borderColor: "light-gray",
  borderRadius: "circle",
  width: 22,
  height: 22,
  boxShadow: "0 0 4px #D2DBDF",
  transition: transition([["backgroundColor", "interaction"]]),
  cursor: "ew-resize",
});

const StyledRange = styled("input")<StyledSystemProps>(
  css({
    width: "100%",
    height: 10,
    my: "6px",
    appearance: "none",
    bg: "white",
    border: "1px solid",
    borderColor: "light-gray",
    borderRadius: "circle",
    cursor: "pointer",
    boxShadow: "0 0 4px #D2DBDF",
    "&::-webkit-slider-thumb": thumbStyles,
    "&::-moz-range-thumb": thumbStyles,
    "&::-webkit-progress-value": {
      appearance: "none",
      bg: "dark-purple",
    },
    "&::-moz-range-progress": {
      bg: "dark-purple",
      borderRadius: "circle",
      height: "100%",
    },
    ":active, :focus": {
      outline: "none",
      "&::-webkit-slider-thumb": {
        bg: "lightest-gray",
      },
      "&::-moz-range-thumb": {
        bg: "lightest-gray",
      },
    },
  })
);
