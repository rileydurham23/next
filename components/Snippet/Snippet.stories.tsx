import { Meta, Story } from "@storybook/react";
import Snippet, { SnippetProps } from "./Snippet";

const generateStoryComponent = () => {
  const StoryComponent: Story<SnippetProps> = (args) => <Snippet {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: Snippet,
  title: "Site/Snippet",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: (
    <>
      <span data-content="$ ">curl \\</span>

      <span>
        {" "}
        --cacert /Users/alice/.tsh/keys/teleport.example.com/certs.pem \\
      </span>

      <span>
        {" "}
        --cert
        /Users/alice/.tsh/keys/teleport.example.com/alice-app/cluster-name/grafana-x509.pem
        \\
      </span>

      <span> --key /Users/alice/.tsh/keys/teleport.example.com/alice \\</span>

      <span> https://grafana.teleport.example.com:3080</span>
    </>
  ),
};
