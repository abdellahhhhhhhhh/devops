const {
  getSimpleMinutesRow,
  getFiveMinutesRow,
  getSimpleHoursRow,
  getFiveHoursRow,
  getSecondsLamp,
  getBerlinClockTime
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

/* Etape 6*/

test('Lampe des secondes pour une seconde paire', () => {
  expect(getSecondsLamp(2)).toBe("Y");
});

test('Lampe des secondes pour une seconde impaire', () => {
  expect(getSecondsLamp(1)).toBe("O");
});

// Etape 7


test('Horloge de Berlin pour 00:00:00', () => {
  expect(getBerlinClockTime(0, 0, 0)).toBe(
    "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO"
  );
});

test('Horloge de Berlin pour 13:17:01', () => {
  expect(getBerlinClockTime(13, 17, 1)).toBe(
    "O\nRROO\nRRRO\nYYROOOOOOOO\nYYOO"
  );
});

test('Horloge de Berlin pour 23:59:59', () => {
  expect(getBerlinClockTime(23, 59, 59)).toBe(
    "O\nRRRR\nRRRO\nYYRYYRYYRYY\nYYYY"
  );
});

test('Horloge de Berlin pour 24:00:00', () => {
  expect(getBerlinClockTime(24, 0, 0)).toBe(
    "Y\nRRRR\nRRRR\nOOOOOOOOOOO\nOOOO"
  );
});