export const filterPredicatedValues = <T>(
  x:
    | [T, boolean][]
    // @ts-expect-error
    | Record<T, boolean>
): T[] => {
  if (isPredicateMap(x))
    return filterPredicatedValues(predicateMapToArr(x) as [T, boolean][]);
  return x.filter(([, predicate]) => predicate).map(([value]) => value);
};

type MapValues = string | number | symbol;
export const isPredicateMap = <T extends MapValues>(
  x: any
): x is Record<T, boolean> => {
  if (!x || typeof x !== "object") return false;
  return Object.entries(x).every(
    ([k, v]) =>
      ["string", "number", "symbol"].includes(typeof k) &&
      typeof v === "boolean"
  );
};

const predicateMapToArr = <T extends MapValues>(x: Record<T, boolean>) =>
  Object.entries(x) as [T, boolean][];
