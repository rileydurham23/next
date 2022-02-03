export type DataEntry = "default" | "aws" | "database";
type LogoArray = string[][];
type LogoEntry = Record<DataEntry, LogoArray>;

export const DATA: LogoEntry = {
  default: [
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
  aws: [
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
  database: [
    ["mysql", "MySQL"],
    ["postgres", "Postgres"],
    ["cockroachdb", "CockroachDB"],
    ["cloudsql", "GCP Cloud SQL"],
    ["rds", "AWS RDS"],
    ["aurora", "AWS Aurora"],
    ["redshift", "AWS Redshift"],
    ["mongodb", "MongoDB"],
    ["mongodb", "MongoDB Atlas"],
    ["oracledb", "Oracle DB"],
    ["msSQL", "MS SQL"],
    ["redis", "Redis"],
  ],
};
