import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import Box, { BoxProps } from "components/Box";
import Icon from "components/Icon";
import { Dropdown } from "components/Dropdown";
import type { VersionsInfo } from "./types";

const root = process.env.NEXT_PUBLIC_ROOT_DIR;

const renderVersion = (version: string) => `Version ${version}`;

const Versions = ({
  current,
  latest,
  available,
  ...props
}: VersionsInfo & BoxProps) => {
  const router = useRouter();
  const [currentItem, setCurrentItem] = useState<string>(current);

  const versions = useMemo(() => [...available].reverse(), [available]);

  const navigateToVersion = useCallback(
    (version: string) => {
      const isLatest = version === latest;
      const href = `${root}/${isLatest ? "" : `ver/${version}`}`;

      setCurrentItem(version);
      router.push(href);
    },
    [latest]
  );

  useEffect(() => {
    setCurrentItem(current);
  }, [current]);

  return (
    <Box {...props}>
      <Dropdown
        width={["auto", 110]}
        value={currentItem}
        options={versions}
        onChange={navigateToVersion}
        renderOption={renderVersion}
        icon={<Icon name="arrow" size="sm" />}
      />
    </Box>
  );
};

export default Versions;
