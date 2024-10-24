import { classNames } from './classNames';

describe('classNames', () => {
  it('should handle various cases correctly', () => {
    const testCases: {
        required: string[];
        optional: Record<string, boolean>;
        expected: string;
    }[] = [
      {
        required: ['1', '2'],
        optional: { '3': false, '4': true, '5': false },
        expected: '1 2 4',
      },
      {
        required: ['button'],
        optional: { '3': true, '4': false },
        expected: 'button 3',
      },
      {
        required: [],
        optional: { '1': true, '2': true },
        expected: '1 2',
      },
      {
        required: ['header'],
        optional: { '3': false, '4': true },
        expected: 'header 4',
      },
      {
        required: ['main'],
        optional: {},
        expected: 'main',
      },
      {
        required: ['item'],
        optional: { '1': false, '2': true, '3': false }, // [['1', false], ['2', true], ['3', false]]
        expected: 'item 2',
      },
      {
        required: ['1'],
        optional: { '2': true, '3': true, '4': false },
        expected: '1 2 3',
      },
      {
        required: [],
        optional: {},
        expected: '',
      },
      {
        required: ['card'],
        optional: { 'shadow': true, 'rounded': false },
        expected: 'card shadow',
      },
    ];

    testCases.forEach(({ required, optional, expected }) => {
      const result = classNames(required, optional);
      expect(result).toBe(expected);
    });
  });
});
