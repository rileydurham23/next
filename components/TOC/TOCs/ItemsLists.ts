//Add Table of Contents Items Lists here

export interface TOCItemList {
  item: string;
  url: string;
}

export const HowItWorksItems: Array<TOCItemList> = [
  { item: "Basic Concepts", url: "/how-it-works/" },
  {
    item: "Certificate-Based Authentication",
    url: "/how-it-works/certificate-based-authentication-ssh-kubernetes/",
  },
  {
    item: "Database Access",
    url: "/how-it-works/database-access/",
  },
  {
    item: "Kubernetes Access",
    url: "/how-it-works/secure-kubernetes-access/",
  },
  {
    item: "Edge Access",
    url: "/how-it-works/ssh-kubernetes-access-on-the-edge/",
  },
  {
    item: "Audit Logging",
    url: "/how-it-works/audit-logging-for-ssh-and-kubernetes/",
  },
  {
    item: "SOC2 Compliance",
    url: "/how-it-works/soc2-ssh-kubernetes/",
  },
  {
    item: "FedRAMP Compliance",
    url: "/how-it-works/fedramp-ssh-kubernetes/",
  },
  {
    item: "HIPAA Compliance",
    url: "/how-it-works/hipaa-compliance/",
  },
];

// in page TOC on /ssh/ page
export const SSHItems: Array<TOCItemList> = [
  {
    item: "What is SSH (Secure Shell Protocol)?",
    url: "/ssh/#what-is-ssh",
  },
  {
    item: "What can you SSH into?",
    url: "/ssh/#what-can-you-ssh-into",
  },
  {
    item: "What is OpenSSH?",
    url: "/ssh/#what-is-openssh",
  },
  {
    item: "SSH public/private keys",
    url: "/ssh/#ssh-public-private-keys",
  },
  {
    item: "SSH client configuration",
    url: "/ssh/#ssh-client-configuration",
  },
  {
    item: "SSH Server",
    url: "/ssh/#ssh-server",
  },
  {
    item: "SSH certificates",
    url: "/ssh/#ssh-certificates",
  },
  {
    item: "SSH agent",
    url: "/ssh/#ssh-agent",
  },
  {
    item: "Secure Copy Protocol (SCP). Secure File Transfer",
    url: "/ssh/#secure-copy-protocol-scp-secure-file-transfer",
  },
  {
    item: "SSH tunnels",
    url: "/ssh/#ssh-tunnels",
  },
  {
    item: "SSH production best practices",
    url: "/ssh/#ssh-production-best-practices",
  },
];
