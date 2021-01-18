declare module "*.svg" {
  export const ReactComponent: React.StatelessComponent<
    React.SVGAttributes<SVGElement>
  >;

  export default string;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}
