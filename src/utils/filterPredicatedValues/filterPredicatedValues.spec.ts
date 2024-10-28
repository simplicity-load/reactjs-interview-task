import {
  filterPredicatedValues,
  isPredicateMap,
} from "./filterPredicatedValues";

describe("filterPredicatedValues", () => {
  it("should filter and return values based on predicates", () => {
    const testCases: {
      input: [any, boolean][];
      expected: any[];
    }[] = [
      {
        input: [
          ["apple", true],
          ["banana", false],
          ["cherry", true],
        ],
        expected: ["apple", "cherry"],
      },
      {
        input: [
          ["dog", true],
          ["cat", true],
          ["mouse", false],
        ],
        expected: ["dog", "cat"],
      },
      {
        input: [
          ["item1", false],
          ["item2", false],
        ],
        expected: [],
      },
      {
        input: [["singleItem", true]],
        expected: ["singleItem"],
      },
      {
        input: [],
        expected: [],
      },
      {
        input: [
          ["foo", true],
          ["bar", true],
          ["baz", false],
          ["qux", true],
        ],
        expected: ["foo", "bar", "qux"],
      },
    ];

    testCases.forEach(({ input, expected }) => {
      const result = filterPredicatedValues(input);
      expect(result).toEqual(expected);
    });
  });

  it("should correctly identify valid and invalid predicate maps", () => {
    const testCases: {
      input: Record<any, any>;
      expected: boolean;
    }[] = [
      {
        input: { key1: true, key2: false },
        expected: true,
      },
      {
        input: { 1: true, 2: false },
        expected: true,
      },
      {
        input: { [Symbol("sym")]: true, [Symbol("sym2")]: false },
        expected: true,
      },
      {
        input: { key1: true, key2: null },
        expected: false,
      },
      {
        input: { key1: true, key2: 1 },
        expected: false,
      },
      {
        input: { key1: true, key2: "value" },
        expected: false,
      },
      {
        input: { 1: true, 2: "string" },
        expected: false,
      },
      {
        input: { [Symbol("sym")]: true, key: "not boolean" },
        expected: false,
      },
      {
        input: {},
        expected: true,
      },
    ];

    testCases.forEach(({ input, expected }) => {
      const result = isPredicateMap(input);
      expect(result).toBe(expected);
    });
  });
});
