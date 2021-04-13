let counter = 0;

export const getSerialId = () => `id_${counter++}`;

interface WithId {
  id: string;
}

export const idify = <T>(element: T): T & WithId => {
  if ("id" in element) {
    return element as T & WithId;
  }

  return { id: getSerialId(), ...element };
};
