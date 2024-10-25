import { classNames } from './classNames';

describe('classNames', () => {
  it('should handle various cases correctly', () => {
    const testCases: {
        args: (string | Record<string, boolean>)[];
        expected: string;
    }[] = [
      {
        args: ['1', '2', { '3': false, '4': true }],
        expected: '1 2 4',
      },
      {
        args: ['button', { '3': true, '4': false }],
        expected: 'button 3',
      },
      {
        args: [{ '1': true, '2': true }, 'sus'],
        expected: '1 2 sus',
      },
      {
        args: ['header', { '3': false, '4': true }],
        expected: 'header 4',
      },
      {
        args: ['main'],
        expected: 'main',
      },
      {
        args: ['item', { '1': false, '2': true, '3': false }],
        expected: 'item 2',
      },
      {
        args: ['1', { '2': true, '3': true, '4': false }],
        expected: '1 2 3',
      },
      {
        args: [],
        expected: '',
      },
      {
        args: ['card', { 'shadow': true, 'rounded': false }],
        expected: 'card shadow',
      },
    ];
    testCases.forEach(({ args, expected }) => {
      const result = classNames(...args);
      expect(result).toBe(expected);
    });
  });
});
