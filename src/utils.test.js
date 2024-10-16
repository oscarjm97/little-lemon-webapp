import { initializeTimes } from './utils';

describe('initializeTimes', () => {
  it('should return the correct time values', () => {
    const expectedTimes = [
      { key: '18', value: '18:00h' },
      { key: '19', value: '19:00h' },
      { key: '20', value: '20:00h' },
      { key: '21', value: '21:00h' },
      { key: '22', value: '22:00h' },
    ];

    // Call the function
    const result = initializeTimes();

    // Check if the result matches the expected output
    expect(result).toEqual(expectedTimes);
  });
});
