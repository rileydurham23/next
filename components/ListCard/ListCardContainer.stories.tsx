import ListCard, { ListCardContainer, ListCardItem } from "./ListCard";
import { ListCardContainerProps } from "./ListCard";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<ListCardContainerProps> = (args) => (
    <ListCardContainer {...args} />
  );

  return StoryComponent;
};

const meta: Meta = {
  component: ListCardContainer,
  title: "ListCardContainer",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  children: (
    <>
      <ListCard
        title="Who can Benefit from Teleport's Kubernetes PAM?"
        subtitle="Using Teleport instead of individually-managed authorization and authentication methods means companies can now have a single control plane to manage role-based access control (RBAC) for Kubernetes clusters and clusters of SSH servers for their organization but also for third-party teams. This is useful for:"
      >
        <>
          <ListCardItem icon="lock" mode="compact">
            Company-wide compliance teams overseeing multiple infrastructure and
            engineering groups who use both Kubernetes and SSH.
          </ListCardItem>
          <ListCardItem icon="kubernetes" mode="compact">
            Manage service providers (MSPs) that manage Kubernetes and generic
            server clusters for clients.
          </ListCardItem>
          <ListCardItem icon="cloud" mode="compact">
            Remote support teams from software vendors who wish to manage remote
            on-site Kubernetes clusters.
          </ListCardItem>
          <ListCardItem icon="database" mode="compact">
            Internet-of-Things (IoT) edge cloud management from a centralized
            office.
          </ListCardItem>
        </>
      </ListCard>
      <ListCard
        title="PAM for Kubernetes Highlights"
        bg="flatWhite"
        subtitle="Teleport was built from the ground up to support highly elastic, cloud-native infrastructure being accessed by multiple teams. Teleport integration with Kubernetes extends Teleport benefits to teams who have adopted Kubernetes-based operations:"
      >
        <>
          <ListCardItem icon="success">
            Unified cluster level permissions. Teleport seamlessly integrates
            with Kubernetes role based access controls so you can connect
            permissions set in your identity manager with permissions for your
            Kubernetes clusters and these permissions are enforced for SSH
            access as well. This makes it impossible to bypass Kubernetes RBAC
            via SSH or vice versa.
          </ListCardItem>
          <ListCardItem icon="success">
            Audit log and session recording. Teleport`s strong audit and
            compliance features apply to Kubernetes clusters as well.
            Interactive sessions or remote commands launched via kubectl are
            recorded and can be replayed for compliance, knowledge sharing or
            root-cause analyses.
          </ListCardItem>
          <ListCardItem icon="success">
            Federate trust across Kubernetes clusters. Teleport`s trusted
            clusters allows you to configure trust across Kubernetes clusters in
            order to manage permissions across teams and organizations.
          </ListCardItem>
          <ListCardItem icon="success">
            A bridge from legacy workflows. Using a single tool like Teleport to
            manage both SSH access to your servers and to Kubernetes API
            endpoints allows you to seamlessly support both modern and legacy
            workflows as your organization transitions to cloud-native
            operations.
          </ListCardItem>
        </>
      </ListCard>
    </>
  ),
};
