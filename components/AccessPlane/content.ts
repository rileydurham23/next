export interface HeaderEntry {
  title: string;
  description: string;
}

interface ContentEntry {
  title: string;
  description: string;
  details: [HeaderEntry, HeaderEntry, HeaderEntry, HeaderEntry];
}

interface Content {
  default: ContentEntry;
  connect: ContentEntry;
  authenticate: ContentEntry;
  audit: ContentEntry;
  authorize: ContentEntry;
}

export type ContentKey = keyof Content;

export const content: Content = {
  default: {
    title: "The Teleport Access Plane",
    description:
      "By consolidating all aspects of infrastructure access into a single platform, Teleport reduces attack surface area, cuts operational overhead, easily enforces compliance, and improves productivity. The Teleport Access Plane replaces VPNs, shared credentials, and legacy privileged access management technologies, improving security and engineering productivity.",
    details: [
      {
        title: "Teleport Connect",
        description:
          "Securely connect your global infrastructure regardless of network boundaries",
      },
      {
        title: "Teleport Authenticate",
        description: "Identity-based access for humans, machines, and services",
      },
      {
        title: "Teleport Authorize",
        description:
          "Implement fine-grained access controls for every employee and service accessing your infrastructure",
      },
      {
        title: "Teleport Audit",
        description:
          "Achieve unprecedented visibility into infrastructure access and behavior so you can meet and exceed compliance objectives.",
      },
    ],
  },
  connect: {
    title: "Teleport Connect",
    description:
      "Teleport Connect provides secure infrastructure access for people and machines with a single identity-aware, multi-protocol access proxy. Our zero-trust access solution unifies access to infrastructure without relying on VPNs. Teleport Connect erases network boundaries and makes you feel like all your Linux and Windows servers, databases, Kubernetes clusters, CICD systems and dashboards are in the same room with you.",
    details: [
      {
        title: "Identity-aware access proxy",
        description:
          "Connect to your infrastructure globally without messing with VPNs.",
      },
      {
        title: "TLS routing",
        description:
          "A single TCP port is all you need to access your infrastructure globally.",
      },
      {
        title: "Reverse tunnels",
        description:
          "Teleport implements reverse tunnels to persistently and securely connect remote resources for easy access across clouds.",
      },
      {
        title: "Multi-data center design",
        description:
          "When you use the Teleport Cloud, your traffic is always routed to the nearest point-of-presence to minimize latency.",
      },
    ],
  },
  authenticate: {
    title: "Teleport Authenticate",
    description:
      "Teleport Authenticate integrates with your corporate identity provider to deliver instant identity-based access to all your infrastructure making onboarding and offboarding simple. Get seamless access to infrastructure using short-lived certificates for all protocols instead of relying on static credentials.",
    details: [
      {
        title: "Enterprise SSO Integration",
        description:
          "Leverage the roles provided by your enterprise SSO for your infrastructure to ease onboarding/offboarding while getting rid of static credentials.",
      },
      {
        title: "Passwordless access",
        description:
          "Static credentials like passwords or keys are insecure and inconvenient. Biometric authentication is more secure and easier to use.",
      },
      {
        title: "Per-Session Multi-Factor Authentication",
        description:
          "Easily implement Multi-Factor Authentication across your organization. Teleport MFA is designed for distributed teams and comes with a self-enrollment MFA portal.",
      },
      {
        title: "Certificates for everything",
        description:
          "Short-lived certificates make it easy to synchronize access across elastic cloud environments and protocols, reduce operational overhead, and make it easy to meet complex compliance requirements.",
      },
    ],
  },
  authorize: {
    title: "Teleport Authorize",
    description:
      "Teleport Authorize gives a unique identity to all your employees and machines. This identity is  synchronized across your entire infrastructure footprint for fine-grained, role-based access controls that are automatically applied to your Linux and Windows servers, Kubernetes clusters, databases, and internal applications like CI/CD, version control, and monitoring dashboards. With Teleport, exceeding the most stringent compliance objectives is a breeze.",
    details: [
      {
        title: "Role-based access controls",
        description:
          "Easily enforce concepts such as “interns should never be able to access production data” across all protocols such as SSH, RDP, Kubernetes, or databases running on elastic infrastructure. Rules are synchronized across your entire infrastructure.",
      },
      {
        title: "Access Requests",
        description:
          "Approve or deny privilege escalation requests. No more bottlenecks with admins acting as gatekeepers approving things manually. Access can be approved or denied via ChatOps, Slack, PagerDuty, or customized via the programmable API.",
      },
      {
        title: "Dual Authorization",
        description:
          "Easily meet advanced compliance requirements by requiring multiple people to authorize highly privileged operations.",
      },
      {
        title: "Protocol-aware authorization",
        description:
          "Simplify policy enforcement by defining privileged operations across all resources in one place. Linux sudo commands, privileged SQL statements or Kubernetes operations, and other protocol-specific operations are tied to roles and identities.",
      },
    ],
  },
  audit: {
    title: "Teleport Audit",
    description:
      "Observe every online resource, every connection, every interactive session, in real time. Teleport Audit records interactive sessions, filesystem changes, data transfers, command executions and other security events across all environments into a structured audit log, making it easy to see what’s happening and who is responsible.",
    details: [
      {
        title: "Unified Resource Catalog",
        description:
          "There is no need to maintain inventories. Enjoy the live view of all servers, Kubernetes clusters, internal applications, databases, and live sessions across all environments.",
      },
      {
        title: "Audit Log",
        description:
          "Teleport streams security events to a centralized destination of choice such as SIEM solutions to help integrate access events into a single source of truth.",
      },
      {
        title: "Live Session View",
        description:
          "Teleport maintains a list of live sessions across all protocols and environments, providing a picture of what’s happening. Each session is recorded and tied to identities of humans and machines involved.",
      },
      {
        title: "Session Recording",
        description:
          "Interactive sessions across your entire infrastructure are recorded and stored in a storage solution of your choice.  Session recording can be useful for forensic or educational purposes.",
      },
    ],
  },
};
