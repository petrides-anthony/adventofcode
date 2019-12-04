const {fuelRequired, totalFuel} = require('./fuel-calculator');

test('fuel required for a mass of 12 is 2', () => {
  expect(fuelRequired(12)).toBe(2);
});

test('fuel required for a mass of 14 is 2', () => {
    expect(fuelRequired(14)).toBe(2);
});

  test('fuel required for a mass of 1969 is 654', () => {
    expect(fuelRequired(1969)).toBe(654);
  });

  test('fuel required for a mass of 100756 is 33583', () => {
    expect(fuelRequired(100756)).toBe(33583);
  });

  test('calculate total fuel required for all the spacecraft', () => {
    expect(totalFuel()).toBe(3256794);
  });