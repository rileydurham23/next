import ForkRibbon from "./ForkRibbon";

export default {
  component: ForkRibbon,
  title: "Site/ForkRibbon",
};

export const Default = () => (
  <ForkRibbon repoLink="https://github.com/gravitational/teleport" />
);
