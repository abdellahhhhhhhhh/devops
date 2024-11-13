const {
  getSimpleMinutesRow,
  getFiveMinutesRow,
  getSimpleHoursRow,
  getFiveHoursRow,
} = require('../src/berlinClock');


//etape 1
test('Ligne des simples minutes pour 3 minutes', () => {
  expect(getSimpleMinutesRow(3)).toBe("YYYO");
});

test('Ligne des simples minutes pour 4 minutes', () => {
  expect(getSimpleMinutesRow(4)).toBe("YYYY");
});

//etape 2
test('Ligne des blocs de 5 minutes pour 15 minutes', () => {
  expect(getFiveMinutesRow(15)).toBe("YYROOOOOOOO");
});

test('Ligne des blocs de 5 minutes pour 30 minutes', () => {
  expect(getFiveMinutesRow(30)).toBe("YYRYYROOOOO");
});

//etape 3
test('Ligne des heures simples pour 3 heures', () => {
  expect(getSimpleHoursRow(3)).toBe("RRRO");
});

test('Ligne des heures simples pour 4 heures', () => {
  expect(getSimpleHoursRow(4)).toBe("RRRR");
});

/* Etape 4 */
test('Ligne des blocs de 5 heures pour 10 heures', () => {
  expect(getFiveHoursRow(10)).toBe("RROO");
});

test('Ligne des blocs de 5 heures pour 23 heures', () => {
  expect(getFiveHoursRow(23)).toBe("RRRR");
});

test('Ligne des blocs de 5 heures pour 4 heures', () => {
  expect(getFiveHoursRow(4)).toBe("OOOO");
});
