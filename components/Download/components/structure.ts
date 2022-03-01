// import Application from "../assets/application.svg?react";
// import Building from "../assets/building.svg?react";
// import Calendar from "../assets/calendar.svg?react";
// import Code from "../assets/code.svg?react";
// import Database from "../assets/database.svg?react";
// import desktop from "../assets/desktop.svg?react";
// import earth from "../assets/earth.svg?react";
// import features from "../assets/features.svg?react";
// import flag from "../assets/flag.svg?react";
// import gamepad from "../assets/gamepad.svg?react";
// import kubernetes from "../assets/kubernetes.svg?react";
// import note from "../assets/note.svg?react";
// import presentation from "../assets/presentation.svg?react";
// import question from "../assets/question.svg?react";
import Server from "../assets/server.svg?react";
// import stack from "../assets/stack.svg?react";
// import window from "../assets/window.svg?react";

const menu = [
  {
    title: "Products",
    description: "Teleport Products",
    href: "/teleport/",
    items: [
      {
        image: Server,
        title: "Server Access",
        description:
          "SSH securely into Linux servers and smart devices with a complete audit trail",
        href: "/ssh-server-access/",
      },
      {
        image: "kubernetes",
        title: "Kubernetes Access",
        description:
          "Access Kubernetes clusters securely with complete visibility to access and behavior",
        href: "/kubernetes-access/",
      },
      {
        image: "application",
        title: "Application Access",
        description:
          "Access web applications running behind NAT and firewalls with security and compliance",
        href: "/application-access/",
      },
      {
        image: "database",
        title: "Database Access",
        description: "For SQL and NoSQL databases across multi-environments",
        href: "/database-access/",
      },
      {
        image: "desktop",
        title: "Desktop Access",
        description:
          "Securely access Windows servers and desktops in multiple environments.",
        href: "/desktop-access/",
      },
      {
        image: "features",
        title: "Teleport Features",
        description:
          "An overview of Teleport Access Plane features, capabilities and more...",
        href: "/features/",
      },
    ],
  },
  {
    title: "Use Cases",
    description: "Teleport Use Cases",
    href: "/",
    items: [
      {
        icon: "building",
        title: "Financial Services",
        description: "Learn how Financial Services companies use Teleport",
        href: "/use-cases/finance/",
      },
      {
        icon: "window",
        title: "Software-as-a-service (SaaS) Providers",
        description: "Learn how SaaS providers use Teleport",
        href: "/use-cases/saas/",
      },
      {
        icon: "gamepad",
        title: "E-commerce & Entertainment",
        description:
          "Learn how E-commerce & Entertainment companies use Teleport",
        href: "/use-cases/ecommerce-entertainment/",
      },
      {
        icon: "server",
        title: "Infrastructure Access for AWS",
        description:
          "Easily control who can provision and access your critical AWS resources",
        href: "/use-cases/aws/",
      },
    ],
  },
  {
    title: "Documentation",
    description: "Teleport documentation",
    href: "/docs/",
    items: [
      {
        icon: "stack",
        title: "Documentation",
        description: "Developer documentation for using Teleport",
        href: "/docs/",
      },
      {
        icon: "gamepad",
        title: "How it Works",
        description: "Learn the fundamentals of how Teleport works",
        href: "/teleport/how-it-works/",
      },
      {
        icon: "question",
        title: "Community Forum",
        description:
          "Ask us a setup question, post your tutorial, feedback or idea on our forum",
        href: "https://github.com/gravitational/teleport/discussions",
      },
      {
        icon: "window",
        title: "Teleport Slack Channel",
        description: "Need help with set-up? Ping us in Slack channel",
        href: "/slack",
      },
      {
        icon: "code",
        title: "Github",
        description: "View the open source repository on Github",
        href: "https://github.com/gravitational/teleport",
      },
    ],
  },
  {
    title: "Learn",
    description: "Learn more about teleport",
    href: "/resources/",
    items: [
      {
        icon: "note",
        title: "The blog",
        description: "Technical articles, news, and product announcements",
        href: "/blog/",
      },
      {
        icon: "building",
        title: "Our customers",
        description:
          "Learn how companies use Teleport to secure their environments",
        href: "/case-study/",
      },
      {
        icon: "presentation",
        title: "Resources",
        description:
          "A collection of whitepapers, webinars, demos, and more...",
        href: "/resources/",
      },
      {
        icon: "calendar",
        title: "Events",
        description: "View our upcoming events",
        href: "/about/events/",
      },
    ],
  },
  {
    title: "Pricing",
    description: "Pricing",
    href: "/pricing/",
  },
  {
    title: "Company",
    description: "Company",
    href: "/about/",
    items: [
      {
        icon: "building",
        title: "About us",
        description: "Our missions and vision for the future",
        href: "/about/",
      },
      {
        icon: "flag",
        title: "Careers",
        description: "View our available career opportunities",
        href: "/careers",
      },
      {
        icon: "earth",
        title: "News",
        description: "Featured publication from around the web",
        href: "/about/press/",
      },
    ],
  },
];

export default menu;
