import { Tabs as TabsWrapper, TabItem } from "./Tabs";

export default {
  component: TabsWrapper,
  subcomponents: { TabItem },
  title: "Tabs",
};

export const Tabs = () => {
  return (
    <TabsWrapper>
      <TabItem label="Tab one">Tab one content</TabItem>
      <TabItem label="Tab two">Tab two content</TabItem>
    </TabsWrapper>
  );
};
