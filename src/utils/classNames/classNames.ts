import { filterPredicatedValues, isPredicateMap, predicateMapToArr } from "@/utils";

type Opt = Record<string, boolean>;

const isLastIndex = (i: number, length: number) => i + 1 === length;

export const classNames = (...args: (string | Opt)[]) => {
  const classnames = args.reduce<string[]>((acc, arg) => {
    if (typeof arg === "string") return acc.concat(arg);
    if (isPredicateMap(arg)) return acc.concat(filterPredicatedValues(predicateMapToArr(arg)));
    throw new Error("Arguments must be either string or boolean map!");
  }, []);
  return classnames.reduce(
    (acc, classname, i, { length }) =>
      acc.concat(classname).concat(isLastIndex(i, length) ? "" : " "),
    ""
  );
};
