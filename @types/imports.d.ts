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

declare module "*.md" {
  const value: any;
  export default value;
}

declare module "md-import-mapping" {
  const value: any;

  export default value;
}
