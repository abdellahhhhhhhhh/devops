function getSimpleMinutesRow(minutes) {
    return "Y".repeat(minutes % 5).padEnd(4, "O");
  }
  
  function getFiveMinutesRow(minutes) {
    return Array.from({ length: 11 }, (_, i) =>
      (i + 1) % 3 === 0 && i < Math.floor(minutes / 5) ? "R" : i < Math.floor(minutes / 5) ? "Y" : "O"
    ).join("");
  }
  
  function getSimpleHoursRow(hours) {
    return "R".repeat(hours % 5).padEnd(4, "O");
  }

  function getFiveHoursRow(hours) {
    return "R".repeat(Math.floor(hours / 5)).padEnd(4, "O");
  }

  function getSecondsLamp(seconds) {
    return seconds % 2 === 0 ? "Y" : "O";
  }
  
  function getBerlinClockTime(hours, minutes, seconds) {
    return [
      getSecondsLamp(seconds),
      getFiveHoursRow(hours),
      getSimpleHoursRow(hours),
      getFiveMinutesRow(minutes),
      getSimpleMinutesRow(minutes)
    ].join("\n");
  }
  
  module.exports = { getSimpleMinutesRow, getFiveMinutesRow, getSimpleHoursRow, getFiveHoursRow, getSecondsLamp, getBerlinClockTime };
  
    
  