import styled from "styled-components";
import {
  space,
  color,
  position,
  SpaceProps,
  ColorProps,
  PositionProps,
} from "components/system";
import { ReactComponent as LogoSvg } from "./logo.svg";

interface LogoProps extends SpaceProps, ColorProps, PositionProps {}

const Logo = styled(LogoSvg)<LogoProps>(space, color, position);

export default Logo;
