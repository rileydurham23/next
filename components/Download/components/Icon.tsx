// import * as icons from "../assets";

export type IconName = keyof typeof icons;

export interface IconProps {
  name: string;
}

const Icon = ({ name }: IconProps) => {
  const IconSVG = icons[name];

  return (
    <div>
      <IconSVG width="100%" height="100%" display="block" />
    </div>
  );
};

export default Icon;
