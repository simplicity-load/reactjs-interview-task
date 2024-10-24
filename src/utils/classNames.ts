type Opt = Record<string, boolean>;

export const classNames = (required: string[], optionals: Opt) => {
  const optionalClassnames = Object // { '1': false, '2': true, '3': false }
    .entries(optionals) // [['1', false], ['2', true], ['3', false]]
    .filter(([classname, predicate]) => predicate) // [['2', true]]
    .map(([classname]) => classname); //  ['2']
  return required
    .concat(optionalClassnames)
    .reduce((acc, classname, index, {length}) => 
        acc
        .concat(classname)
        .concat(index !== (length - 1) ? " " : ""),
    "");
};
