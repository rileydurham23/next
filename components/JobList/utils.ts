import { RawJob, Job } from "./types";

function transformJob({
  id,
  text,
  hostedUrl,
  createdAt,
  categories,
}: RawJob): Job {
  return {
    id,
    text,
    hostedUrl,
    createdAt,
    ...categories,
  };
}

export async function fetchJobs(): Promise<
  { props: { jobs: Job[] } } | { notFound: boolean }
> {
  let rawJobs: RawJob[] = [];

  try {
    const response = await fetch("https://api.lever.co/v0/postings/teleport");
    rawJobs = await response.json();

    if (!rawJobs) {
      console.error("Error fetching jobs list");
      return {
        notFound: true,
      };
    }
  } catch (e) {
    // TODO: do post to bug tracking system
    return {
      notFound: true,
    };
  }

  const jobs = rawJobs
    .map(transformJob)
    .sort((a, b) => b.createdAt - a.createdAt);

  return { props: { jobs } };
}
