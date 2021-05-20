export interface RawJob {
  id: string;
  text: string;
  hostedUrl: string;
  createdAt: number;
  descriptionPlain: string;
  categories: {
    commitment: string;
    department: string;
    location: string;
    team: string;
  };
}

export type Job = Pick<RawJob, "id" | "text" | "hostedUrl" | "createdAt"> & {
  commitment: string;
  department: string;
  location: string;
  team: string;
};

export interface Group {
  title: string;
  jobs: Job[];
}

export const ALL = "All";
export const filtersList = ["location", "team", "commitment"] as const;
export type FilterField = typeof filtersList[number];
export type Filter = Record<
  FilterField,
  {
    all: string[];
    current: Record<string, boolean>;
    set: (key: string, value: boolean) => void;
    show: boolean;
  }
>;
