import { useMemo } from "react";

let counter = 0;

export const getUID = () => `UID_${counter++}`;

export const useUID = () => {
  const UID = useMemo(() => getUID(), []);

  return UID;
};
