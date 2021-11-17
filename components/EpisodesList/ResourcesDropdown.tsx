import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { Dropdown } from "components/Dropdown";
import type { ResourceItem } from "./types";
import { RESOURCES } from "./constants";

const renderOption = (resourceItem: ResourceItem) => resourceItem.title;

export function ResourcesDropdown() {
  const router = useRouter();
  const [currentItem, setCurrentItem] = useState<string>("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      let currentResource = undefined;
      const pathCurrentPage = window.location.pathname
        .split("/")
        .filter(Boolean);
      currentResource = pathCurrentPage[pathCurrentPage.length - 1];
      if (currentResource === "resources") currentResource = "all";
      setCurrentItem(currentResource);
    }
  }, []);

  const navigateToResource = useCallback(
    (resourceName: string) => {
      const currentHref = RESOURCES.find(
        (item) => item.id === resourceName
      ).href;
      setCurrentItem(resourceName);
      router.push(currentHref);
    },
    [router]
  );

  return (
    <Dropdown
      width={["50%", 286]}
      mt="2"
      textTransform="uppercase"
      value={currentItem}
      options={RESOURCES}
      color="dark-purple"
      onChange={navigateToResource}
      renderOption={renderOption}
      pickOption={(opts, _id) => opts.find(({ id }) => id === _id)}
      pickId={(item) => item.id}
    />
  );
}
