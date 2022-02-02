import cn from "classnames";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Dropdown } from "components/Dropdown";
import type { VersionsInfo } from "./types";
import styles from "./Versions.module.css";

const renderVersion = (version: string) => `Version ${version}`;

const Versions = ({
  current,
  latest,
  available,
  disabled,
  className,
}: VersionsInfo) => {
  const router = useRouter();
  const [currentItem, setCurrentItem] = useState<string>(current);

  const versions = useMemo(() => [...available].reverse(), [available]);

  const navigateToVersion = useCallback(
    (version: string) => {
      const isLatest = version === latest;
      const href = `${isLatest ? "/" : `/ver/${version}`}`;

      setCurrentItem(version);
      router.push(href);
    },
    [latest, router]
  );

  useEffect(() => {
    setCurrentItem(current);
  }, [current]);

  return (
    <Dropdown
      className={cn(styles.wrapper, className)}
      value={currentItem}
      options={versions}
      disabled={disabled}
      onChange={navigateToVersion}
      renderOption={renderVersion}
    />
  );
};

export default Versions;
