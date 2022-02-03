export type DataEntry = "default" | "aws" | "database";
type LogoArray = string[][];
type Logos = Record<"logos", LogoArray>;
type LogoEntry = Record<DataEntry, Logos>;

export const DATA: LogoEntry = {
  default: {
    logos: [
      ["aws", "Amazon"],
      ["gcloud", "Google Cloud"],
      ["azure", "Azure"],
      ["linux", "Linux"],
      ["windows2021", "Windows"],
      ["chef", "Chef"],
      ["okta", "Okta"],
      ["windows", "Active Directory"],
      ["puppet", "Puppet"],
      ["oneLogin", "One Login"],
      ["k8s", "Kubernetes"],
      ["ansible", "Ansible"],
    ],
  },
  aws: {
    logos: [
      ["aws", "Amazon"],
      ["cloudtrail", "AWS CloudTrail"],
      ["marketplace", "AWS Marketplace"],
      ["aurora", "AWS Aurora"],
      ["cli", "AWS CLI"],
      ["hsm", "AWS CloudHSM"],
      ["ec2", "AWS EC2"],
      ["eks", "AWS EKS"],
      ["management", "AWS Management Console"],
      ["rdc", "AWS RDC"],
      ["windows", "Active Directory"],
      ["k8s", "Kubernetes"],
    ],
  },
  database: {
    logos: [
      ["", "MySQL"],
      ["", "Postgres"],
      ["", "CockroachDB"],
      ["", "GCP Cloud SQL MySQL"],
      ["", "AWS RDS"],
      ["aurora", "AWS Aurora"],
      ["", "AWS Redshift"],
      ["", "MongoDB"],
      ["", "MongoDB Atlas"],
      ["", "Oracle DB"],
      ["", "MS SQL"],
      ["", "Redis"],
    ],
  },
};
