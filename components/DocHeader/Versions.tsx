import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import {
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
} from "@reach/listbox";
import "@reach/listbox/styles.css";

export interface Version {
  title: string;
  href: string;
  isLatest: boolean;
  isCurrent: boolean;
}

interface DocHeaderVersionsProps {
  versions: Version[];
}

const DocHeaderVersions = ({ versions }: DocHeaderVersionsProps) => {
  const router = useRouter();
  const { title } = versions.find(({ isCurrent }) => isCurrent);
  const [current, setCurrent] = useState<string>(title);

  const navigateToVersion = useCallback((value: string) => {
    const { href } = versions.find(({ title }) => value === title);

    setCurrent(value);
    router.push(href);
  }, []);

  return (
    <ListboxInput value={current} onChange={navigateToVersion}>
      <ListboxButton arrow="▼" />
      <ListboxPopover>
        <ListboxList>
          {versions.map(({ title }) => (
            <ListboxOption key={title} value={title}>
              Version {title}
            </ListboxOption>
          ))}
        </ListboxList>
      </ListboxPopover>
    </ListboxInput>
  );
};

export default DocHeaderVersions;
