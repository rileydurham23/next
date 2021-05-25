import styled from "styled-components";
import css from "@styled-system/css";
import { Dispatch, SetStateAction, useState } from "react";
import Flex, { FlexProps } from "components/Flex";
import Icon from "components/Icon";
import Multiselect from "components/Multiselect";
import { Job, FilterField, Filter, ALL, filtersList } from "./types";

type FiltersProps = { filter: Filter } & FlexProps;
type ValMap = Record<string, boolean>;

const DefaultState: ValMap = { [ALL]: true };
const FieldDefaults: Record<FilterField, string> = {
  location: "Remote",
  team: "Uncategorized",
  commitment: "Full-Time",
};
const labels: Record<FilterField, string> = {
  location: "Location",
  team: "Team",
  commitment: "Work Type",
};

export default function Filters({ filter, ...props }: FiltersProps) {
  return (
    <Flex
      as="ul"
      justifyContent="center"
      flexWrap="wrap"
      listStyle="none"
      m="0"
      p="0"
      {...props}
    >
      {filtersList.map((filterKind) => {
        if (!filter[filterKind].show) {
          return null;
        }
        return (
          <StyledItem key={filterKind}>
            <Multiselect
              variant="dark"
              label={labels[filterKind]}
              value={filter[filterKind].current}
              onChange={filter[filterKind].set}
              options={filter[filterKind].all}
              // borderRadius="default"
              // boxShadow="0 2px 4px rgba(0, 0, 0, 0.32);"
              icon={<Icon name="arrow" size="sm" />}
            />
          </StyledItem>
        );
      })}
    </Flex>
  );
}

const StyledItem = styled("li")(
  css({
    width: ["100%", "32%"],
    bg: "white",
    ml: [0, 3],
    "& + &": { mt: [3, 0] },
    "&:nth-child(3n+1)": { ml: [0, 0] },
    "&:nth-child(n+4)": { mt: [0, 3] },
  })
);

const getNewState = (key: string, state: boolean) => (rec: ValMap): ValMap => {
  if (key === ALL) {
    return DefaultState;
  }
  return {
    ...rec,
    [ALL]: false,
    [key]: state,
  };
};

const createSetter = (setState: Dispatch<SetStateAction<ValMap>>) => (
  key: string,
  state: boolean
) => setState(getNewState(key, state));

function getUniq(list: Job[], field: FilterField): string[] {
  const used = {};
  const result: string[] = [ALL];
  for (const item of list) {
    const val = item[field] ?? FieldDefaults[field];
    if (!used[val]) {
      result.push(val);
      used[val] = true;
    }
  }
  return result;
}

export function useFilters(jobs: Job[]): Filter {
  const [cLocations, setLocations] = useState<ValMap>(DefaultState);
  const [cTeams, setTeams] = useState<ValMap>(DefaultState);
  const [cCommits, setCommit] = useState<ValMap>(DefaultState);
  const locations = getUniq(jobs, "location");
  const teams = getUniq(jobs, "team");
  const commits = getUniq(jobs, "commitment");

  return {
    location: {
      all: locations,
      current: cLocations,
      set: createSetter(setLocations),
      // 2 - it's "All" option + the only option. So filter is useless
      show: locations.length > 2,
    },
    team: {
      all: teams,
      current: cTeams,
      set: createSetter(setTeams),
      show: teams.length > 2,
    },
    commitment: {
      all: commits,
      current: cCommits,
      set: createSetter(setCommit),
      show: commits.length > 2,
    },
  };
}
