export interface Download {
  displaySize: string;
  name: string;
  sha256: string;
  url: string;
}

export interface Version {
  descriptionMarkdown: string;
  downloads: Array<Download>;
  id: string;
  prerelease: boolean;
  publishedAt: string;
  version: string;
}

export interface MajorVersionCollection {
  majorVersion: string;
  versions: Version[];
}
