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

export async function fetchJobs(): Promise<Job[]> {
  let rawJobs: RawJob[] = [];

  try {
    const response = await fetch("https://api.lever.co/v0/postings/teleport");
    rawJobs = await response.json();
  } catch (e) {
    // TODO: do post to bug tracking system
  }

  return rawJobs.map(transformJob).sort((a, b) => b.createdAt - a.createdAt);
}
