import getRandomNumber from '../getRandomNumber';

describe('getRandomNumber', () => {

  it('returns only values greater than or equal to min argument', () => {
    // Setup
    const min = 3;
    const max = 20;

    // Exercise
    const actualNumbers = Array.from({ length: 100 }, () => getRandomNumber(min, max));
    const expectedNumbers = actualNumbers.every(n => n >= min);

    // Verify
    expect(expectedNumbers).toBeTruthy();
  });

  it('returns only values less than or equal to max argument', () => {
    // Setup
    const min = 3;
    const max = 20;

    // Exercise 
    const actualNumbers = Array.from({ length: 100 }, () => getRandomNumber(min, max));
    const expectedNumbers = actualNumbers.every(n => n <= max);

    // Verify
    expect(expectedNumbers).toBeTruthy();
  });
});