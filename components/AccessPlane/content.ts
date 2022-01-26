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
    title: "Teleport Access Plane Overall",
    description:
      "Teleport is the easiest, most secure way to access all your infrastructure. The open-source Teleport Access Plane consolidates connectivity, authentication, authorization, and audit into a single platform. By consolidating all aspects of infrastructure access, Teleport reduces attack surface area, cuts operational overhead, easily enforces compliance, and improves engineering productivity",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    details: [
      {
        title: "Title 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "Title 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "Title 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "Title 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ],
  },
  authorize: {
    title: "Teleport Authorize",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    details: [
      {
        title: "Title 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "Title 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "Title 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "Title 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ],
  },
  audit: {
    title: "Teleport Audit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    details: [
      {
        title: "Title 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "Title 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "Title 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
      {
        title: "Title 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      },
    ],
  },
};
