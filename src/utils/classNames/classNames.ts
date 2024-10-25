type Opt = Record<string, boolean>;

const isOpt = (x: Opt): x is Opt =>
    !Object
        .entries(x)
        .map(([k,v]) => {
            return  typeof k === 'string' &&
                    typeof v === 'boolean'
        })
        .some((p) => !p)

const optToClasses = (x: Opt) =>
    Object
        .entries(x)
        .filter(([, predicate]) => predicate)
        .map(([classname]) => classname);

const isLastIndex = (i: number, length: number) => (i + 1) === length

export const classNames = (...args: (string| Opt)[] ) => {
    const classnames = args.reduce<string[]>((acc, arg) => {
        if (typeof arg === 'string') return acc.concat(arg)
        if (isOpt(arg)) return acc.concat(optToClasses(arg))
        throw new Error("Arguments must be either string or boolean map!")
    }, [])
    return classnames
                .reduce((acc, classname, i, {length}) => 
                    acc
                        .concat(classname)
                        .concat(
                            isLastIndex(i, length)
                            ? ""
                            : " "
                        )
                , "")
};
