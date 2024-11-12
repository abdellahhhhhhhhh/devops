const { getSimpleMinutesRow } = require('../src/berlinClock');

test('Ligne des simples minutes pour 3 minutes', () => {
  expect(getSimpleMinutesRow(3)).toBe("YYYO");
});

test('Ligne des simples minutes pour 4 minutes', () => {
  expect(getSimpleMinutesRow(4)).toBe("YYYY");
});