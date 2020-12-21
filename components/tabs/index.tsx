import {
  isValidElement,
  Children,
  ReactNode,
  useCallback,
  useState,
} from "react";

const getSelectedLabel = (
  tabs: React.ReactComponentElement<typeof TabItem>[]
): string => {
  const selectedTab = tabs.find(({ props: { selected } }) => selected);

  return selectedTab ? selectedTab.props.label : tabs[0]?.props.label;
};

interface TabItemProps {
  selected?: boolean;
  label: string;
  children: ReactNode;
}

export const TabItem = ({ children }: TabItemProps) => {
  return <div>{children}</div>;
};

interface TabsLabel {
  selected: boolean;
  label: string;
  onClick: (label: string) => void;
}

const TabLabel = ({ selected, label, onClick }: TabsLabel) => {
  const onClickButton = useCallback(() => onClick(label), [label, onClick]);

  return (
    <button disabled={selected} onClick={onClickButton}>
      {label}
    </button>
  );
};

interface TabsProps {
  children: ReactNode;
}

export const Tabs = ({ children }: TabsProps) => {
  const childTabs = Children.toArray(children).filter(
    (c) => isValidElement(c) && c.props.label && c.props.children
  ) as React.ReactComponentElement<typeof TabItem>[];

  const labels = childTabs.map(({ props: { label } }) => label);

  const [currentLabel, setCurrentLabel] = useState(getSelectedLabel(childTabs));

  const currentTab = childTabs.find(
    ({ props: { label } }) => label === currentLabel
  );

  return (
    <div>
      <div>
        {labels.map((label) => (
          <TabLabel
            key={label}
            label={label}
            onClick={setCurrentLabel}
            selected={label === currentLabel}
          />
        ))}
      </div>
      <br />
      <div>{currentTab}</div>
    </div>
  );
};
