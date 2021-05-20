import { ReactNode } from "react";
import Box, { BoxProps } from "components/Box";
import { Group, filtersList, Filter, ALL, FilterField } from "./types";

function countJobs(groups: Group[]): number {
  return groups.reduce((sum, group) => sum + group.jobs.length, 0);
}

const label: Record<FilterField, { plural: string; single: string }> = {
  team: { plural: "teams", single: "team" },
  location: { plural: "locations", single: "location" },
  commitment: { plural: "work types", single: "work type" },
};

function getLabel(field: FilterField, count: number) {
  return count > 1 ? label[field].plural : label[field].single;
}

function getFilterText(fullFilter: Filter, field: FilterField): string {
  const filter = fullFilter[field];
  if (filter.current[ALL]) {
    return `all ${label[field].plural}`;
  }
  const count = Object.keys(filter.current).reduce(
    (sum, key) => (filter.current[key] ? sum + 1 : sum),
    0
  );

  return `${count} ${getLabel(field, count)}`;
}

function getFiltersRow(filter: Filter): ReactNode {
  const tmp: ReactNode[] = [];

  for (let i = 0; i < filtersList.length; i++) {
    const filterKind = filtersList[i];
    if (!filter[filterKind].show) {
      continue;
    }
    tmp.push(
      <Box as="strong" key={i}>
        {getFilterText(filter, filterKind)}
      </Box>
    );
  }

  const result = [];

  for (let i = 0; i < tmp.length; i++) {
    if (i > 0) {
      result.push(
        <Box as="span" key={`${i}-separator`}>
          {i === tmp.length - 1 ? ", and " : ", "}
        </Box>
      );
    }
    result.push(tmp[i]);
  }

  return <>{result}</>;
}

type SummaryProps = {
  groups: Group[];
  filter: Filter;
} & BoxProps;

export default function Summary({ groups, filter, ...props }: SummaryProps) {
  return (
    <Box as="p" textAlign="center" {...props}>
      <Box as="span">{`Currently displaying ${countJobs(
        groups
      )} positions across `}</Box>
      {getFiltersRow(filter)}
    </Box>
  );
}
