import ListCard, { ListCardItem } from "./ListCard";
import { ListCardProps } from "./ListCard";
import { Meta, Story } from "@storybook/react";

const generateStoryComponent = () => {
  const StoryComponent: Story<ListCardProps> = (args) => <ListCard {...args} />;

  return StoryComponent;
};

const meta: Meta = {
  component: ListCard,
  title: "ListCard",
};

export default meta;

export const Default = generateStoryComponent();

Default.args = {
  title: "Meet Compliance Requirements",
  children: (
    <>
      <ListCardItem icon="circleCheck">
        RBAC is used to secure the infrastructure and meet compliance
        requirements around privileged (SSH) access. Specifically, it enables
        security and systems engineers to enforce security and compliance
        policies such as:
      </ListCardItem>
      <ListCardItem icon="circleCheck">
        Multi-factor authentication (MFA). Integrating with company-wide SSO
        enables two-factor authentication (2FA) for SSH sessions using the same
        access control plane, simplifying management and audit.
      </ListCardItem>
      <ListCardItem icon="circleCheck">
        Enforce infrastructure and data compliance. Isolate production
        environments and production data from specific roles and teams, or limit
        access to certain roles and teams.
      </ListCardItem>
      <ListCardItem icon="circleCheck">
        Compliant process for onboarding and transferring employees. Ensure
        privileged access permissions stay up-to-date as individuals switch
        roles or leave the company.
      </ListCardItem>
      <ListCardItem icon="circleCheck">
        Prohibit root access for all roles. Teleport RBAC allows security
        administrators to remove the need to use root privileges. RBAC also
        separates SSH permissions management from server management.
      </ListCardItem>
      <ListCardItem icon="circleCheck">
        Overall, the result of implementing RBAC is a reduction in operational
        overhead. Administrators can control (add, modify, and revoke)
        privileged access for teams or individuals from one place, while users
        can get access authorization without needing to manage SSH keys or VPN
        credentials.
      </ListCardItem>
    </>
  ),
};
