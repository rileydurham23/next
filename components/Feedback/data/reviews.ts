import { CompanyId } from "components/Company";
import { meta } from "./reviews.mdx";
import { Review } from "../types";

type ReviewMap = Record<CompanyId, Review | undefined>;

let reviews = {} as ReviewMap;

if (isReviews(meta)) {
  reviews = meta;
}

function isReviews(maybeReviews: unknown): maybeReviews is ReviewMap {
  if (typeof maybeReviews !== "object") {
    throw new Error("review an object");
  }

  // we should add an accurate validation here if applicable

  return true;
}

export default reviews;
