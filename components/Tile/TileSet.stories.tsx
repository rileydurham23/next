import { Meta, Story } from "@storybook/react";
import Tile from "./Tile";
import TileSet, { TileSetProps } from "./TileSet";

const generateStoryComponent = () => {
  const StoryComponent: Story<TileSetProps> = (args) => <TileSet {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: TileSet,
  title: "Site/Tile/TileSet",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: (
    <>
      <Tile
        icon="bolt"
        title="Server Access"
        href="./server-access/introduction.mdx"
      >
        Single Sign-On, short-lived certificates, and audit for SSH servers.
      </Tile>
      <Tile
        icon="window"
        title="Application Access"
        href="./application-access/introduction.mdx"
      >
        Provide secure access to internal dashboards and web applications.
      </Tile>
      <Tile
        icon="kubernetes"
        title="Kubernetes Access"
        href="./kubernetes-access/introduction.mdx"
      >
        Single Sign-On, audit and unified access for Kubernetes clusters.
      </Tile>
      <Tile
        icon="database"
        title="Database Access"
        href="./database-access/introduction.mdx"
      >
        Secure access to PostgreSQL and MySQL databases.
      </Tile>
      <Tile icon="cloud" title="Cloud" href="./pro/introduction.mdx">
        Connect your nodes, web apps, kubernetes clusters and databases to
        Teleport as a service.
      </Tile>
      <Tile
        icon="building"
        title="Enterprise"
        href="./enterprise/introduction.mdx"
      >
        OIDC, SAML, compliance controls and commercial support.
      </Tile>
    </>
  ),
};
