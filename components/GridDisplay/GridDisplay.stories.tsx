import { Story } from "@storybook/react";
import MDX from "../MDX";
import GridDisplay from "./GridDisplay";
import { GridCard, GridCardProps } from "./GridCard";
import { GridTile, GridTileProps } from "./GridTile";
import deny from "../../pages/features/assets/deny.png";
import kubernetes from "../../pages/features/assets/kubernetes.png";
import tutorial from "../../pages/features/assets/tutorial.svg";
import techpaper from "../../pages/features/assets/tech-paper.svg";
import yubikey from "../../pages/features/assets/yubikey.png";
import SSO from "../../pages/features/assets/SSO.png";

export default {
  component: GridDisplay,
  title: "Site/GridDisplay",
};

const CardWrapper: Story<GridCardProps> = (args) => <GridCard {...args} />;
const TileWrapper: Story<GridTileProps> = (args) => <GridTile {...args} />;

const Card = CardWrapper.bind({});
const Tile = TileWrapper.bind({});

export const Default = () => {
  return (
    <MDX>
      <GridDisplay
        iconName="apartment"
        iconSize="lg"
        title="Enterprise Features"
        bg="flatGray"
      >
        <Card
          cardBG="enterprise"
          src={deny}
          title="Access Requests"
          href="https://goteleport.com/features/access-requests/"
        >
          Teleport allows users to request elevated privileges in the middle of
          their command-line sessions. Requests can be approved or denied via
          ChatOps in Slack & PagerDuty or anywhere else via flexible
          Authorization Workflow API.
        </Card>
        <Card
          cardBG="enterprise"
          src={kubernetes}
          title="FedRamp & Soc 2"
          href="https://goteleport.com/teleport/how-it-works/fedramp-ssh-kubernetes/"
        >
          Teleport can help implement common compliance standards such as SOC2
          or FedRAMP for SSH and Kubernetes access.
        </Card>
        <Card
          cardBG="enterprise"
          src={yubikey}
          title="Per-Session Multi-Factor Authentication"
          href="https://goteleport.com/features/multi-factor-auth/"
        >
          Easily implement Multi-Factor Authentication across your organization
          without relying on device management systems. Teleport MFA is designed
          for distributed teams and comes with a self-enrollment MFA portal.
        </Card>
        <Card
          cardBG="enterprise"
          src={SSO}
          title="Enterprise Single Sign-On (SSO)"
          href="https://goteleport.com/teleport/features/sso-for-ssh/"
        >
          Teleport integrates into a company&apos;s existing company directory
          and SSO system. Enterprise Teleport supports all major SSO providers,
          including Okta, Sailpoint, Active Directory, OneLogin, G Suite, Auth0
          and many others.
        </Card>
      </GridDisplay>
      <GridDisplay
        centralHeading={true}
        title="Learn more about Teleport Server Access"
        subtitle="Explore resources"
      >
        <Tile
          cardBG="whitepaper"
          title="Key feature listing and details"
          src={techpaper}
          smallIcon={true}
          caption="FEATURES"
          href="https://goteleport.com/features"
        >
          Nearly all Teleport features are available in the open source package.
        </Tile>
        <Tile
          cardBG="tutorial"
          title="Five minute demo of Teleport"
          src={tutorial}
          smallIcon={true}
          caption="DEMO"
          href="https://goteleport.com/features"
        >
          This short video shows the basic capabilities of Teleport, Quickly
          access any computing resource anywhere.
        </Tile>
        <Tile
          cardBG="whitepaper"
          title="Teleport Quick Start Guide"
          src={techpaper}
          smallIcon={true}
          caption="DOCS"
          href="https://goteleport.com/features"
        >
          Developer Documentation for using Teleport. This tutorial will guide
          you through the steps needed to install and run Teleport on Linux
          machines.
        </Tile>
        <Tile
          cardBG="whitepaper"
          title="Deep dive into how Teleport works"
          src={techpaper}
          smallIcon={true}
          caption="HOW IT WORKS"
          href="https://goteleport.com/features"
        >
          Learn the fundamentals of how Teleport works. The following is a
          series of articles describing key Teleport concepts.
        </Tile>
      </GridDisplay>
    </MDX>
  );
};
