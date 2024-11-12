function getSimpleMinutesRow(minutes) {
    return "Y".repeat(minutes % 5).padEnd(4, "O");
  }
  
  module.exports = { getSimpleMinutesRow };
  