export type infraType =
  | "Servers"
  | "Databases"
  | "Kubernetes"
  | "Applications"
  | "Desktops"
  | "Activity"
  | "Team";

interface itemsProps {
  name: string;
  infra: string;
  subtitle: string;
  cta?: string;
}

export const items: itemsProps[] = [
  {
    name: "server",
    infra: "Servers",
    subtitle: "1250 total",
    cta: "Add Server",
  },
  {
    name: "database",
    infra: "Databases",
    subtitle: "500 total",
    cta: "Add Database",
  },
  {
    name: "kubernetes",
    infra: "Kubernetes",
    subtitle: "15 total",
  },
  {
    name: "window",
    infra: "Applications",
    subtitle: "110 total",
    cta: "Add Application",
  },
  {
    name: "desktop",
    infra: "Desktops",
    subtitle: "20 total",
    cta: "Add Desktop",
  },
  {
    name: "bell",
    infra: "Activity",
    subtitle: "300 total",
  },
  {
    name: "team",
    infra: "Team",
    subtitle: "5 total",
    cta: "Add User",
  },
];
