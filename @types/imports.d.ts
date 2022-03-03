declare module "*.svg" {
  const value: string;

  export default value;
}

declare module "*.svg?react" {
  const Component: React.StatelessComponent<React.SVGAttributes<SVGElement>>;

  export default Component;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.woff2" {
  const value: string;
  export default value;
}

declare module "*.yaml" {
  const content: { [key: string]: any };
  export default content;
}
