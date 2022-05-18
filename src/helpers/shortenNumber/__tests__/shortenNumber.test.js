import shortenNumber from '../shortenNumber';

describe('shortenNumber', () => {

  it('returns values less than 1,000 as-is', () => {
    // Setup
    const value = 999;
    const expected = 999;

    // Exercise
    const actual = shortenNumber(value, 1);

    // Verify
    expect(actual).toEqual(expected);
  });

  it('returns values greater than or equal to 1,000 and less than 1,000,000 with k', () => {
    // Setup
    const value = 993450;
    const expected = '993.5k';

    // Exercise
    const actual = shortenNumber(value, 1);

    // Verify
    expect(actual).toEqual(expected);
  });
});