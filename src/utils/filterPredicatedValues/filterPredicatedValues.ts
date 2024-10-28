export const filterPredicatedValues = <T>(x: [T, boolean][]) =>
  x.filter(([, predicate]) => predicate).map(([value]) => value);

type MapValues = string | number | symbol;
export const isPredicateMap = <T extends MapValues>(
  x: Record<T, boolean>
): x is Record<T, boolean> =>
  !Object.entries(x).some(([k, v]) => {
    return (
      !["string", "number", "symbol"].includes(typeof k) ||
      typeof v !== "boolean"
    );
  });

export const predicateMapToArr = <T extends MapValues>(x: Record<T, boolean>) =>
  Object.entries(x) as [T, boolean][];
