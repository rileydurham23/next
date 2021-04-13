import { idify } from "utils/id";
import { createSection } from "./utils";

export const COPYRIGHT_LINKS = [
  {
    title: "Terms of service",
    url: "/tos/",
  },
  {
    title: "Privacy policy",
    url: "/privacy/",
  },
  {
    title: "Site map",
    url: "/html-sitemap/",
  },
].map(idify);

export const LAUNCHPAD_DATA = [
  createSection("Products", [
    { title: "Teleport Overview", url: "/" },
    {
      title: "Teleport Server Access",
      url: "/teleport/server/",
    },
    {
      title: "Teleport Kubernetes Access",
      url: "/teleport/kubernetes/",
    },
    {
      title: "Teleport Application Access",
      url: "/teleport/application/",
    },
    {
      title: "Teleport Features",
      url: "/features/",
    },
    {
      title: "Teleport Pricing",
      url: "/pricing/",
    },
  ]),
  createSection("Documentation", [
    {
      title: "Documentation home",
      url: "/teleport/docs/",
    },
    {
      title: "How Teleport works",
      url: "/teleport/how-it-works/",
    },
    {
      title: "GitHub repository",
      url: "https://github.com/gravitational/teleport",
    },
  ]),
  createSection("Learn", [
    {
      title: "Blog",
      url: "/blog/",
    },
    {
      title: "Customers",
      url: "/case-study/",
    },
    {
      title: "Resources",
      url: "/resources/",
    },
    {
      title: "Events",
      url: "/about/events/",
    },
  ]),
  createSection("Company", [
    {
      title: "About us",
      url: "/about/",
    },
    {
      title: "Careers",
      url: "https://jobs.lever.co/teleport",
    },
    {
      title: "News",
      url: "/about/press/",
    },
  ]),
  createSection("Get in touch", [
    {
      title: "(855) 818 9008",
      url: "tel:855-818-9008",
    },
    {
      title: "Contact us",
      url: "/contact-us/",
    },
    {
      title: "Customer support",
      url: "https://gravitational.zendesk.com/hc/en-us",
    },
    createSection("Connect", [
      {
        title: "Community forum",
        url: "https://github.com/gravitational/teleport/discussions",
      },
      {
        title: "Slack",
        url: "/slack",
      },
      {
        title: "Github",
        url: "https://github.com/gravitational",
      },
      {
        title: "Twitter",
        url: "https://twitter.com/goteleport",
      },
    ]),
  ]),
];
