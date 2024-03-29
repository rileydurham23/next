import { Story } from "@storybook/react";
import Flex from "../Flex";
import List, { Props } from "./List";

const StoryComponent: Story<Props> = (args) => (
  <Flex
    bg="white"
    width="100vw"
    height="100vh"
    display="inline-flex"
    p="2"
    alignItems="center"
    justifyContent="center"
  >
    <List {...args} />
  </Flex>
);

export default {
  component: List,
  title: "List",
};

export const Simple = StoryComponent.bind({});

Simple.args = {
  title: "Lorem ipsum",
  subtitle: "Really Strong",
  children: (
    <>
      <List.Item icon="bolt" title="Title 1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </List.Item>
      <List.Item icon="clock" title="Title 2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </List.Item>
      <List.Item icon="book" title="Title 3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </List.Item>
    </>
  ),
};

export const Grid = StoryComponent.bind({});

Grid.args = {
  title: "Lorem ipsum",
  subtitle: "Really Strong",
  grid: true,
  children: (
    <>
      <List.Item icon="bolt" title="Title 1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </List.Item>
      <List.Item icon="clock" title="Title 2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </List.Item>
      <List.Item icon="book" title="Title 3">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </List.Item>
    </>
  ),
};
