import { CompanyData } from "./types";
import { meta } from "./clients.mdx";

let companies: CompanyData[] = [];

if (isCompanies(meta.companies)) {
  companies = meta.companies;
}

export default companies;

function isCompanies(maybeCompanies: unknown): maybeCompanies is CompanyData[] {
  if (!Array.isArray(maybeCompanies)) {
    throw new Error("company:data is not a list");
  }

  // we should add an accurate validation here if applicable

  return true;
}
