import styled from "styled-components";
import { space, color, SpaceProps, ColorProps } from "components/system";
import LogoSvg from "./logo.svg";

interface LogoProps extends SpaceProps, ColorProps {}

const Logo = styled(LogoSvg)<LogoProps>(space, color);

export default Logo;
