#!/usr/bin/env node

// ********* look into using an array for months
var month = {};
month[1] = {name: 'January', days: '31'};
month[2] = {name: 'February', days: '28'};
month[3] = {name: 'March', days: '31'};
month[4] = {name: 'April', days: '30'};
month[5] = {name: 'May', days: '31'};
month[6] = {name: 'June', days: '30'};
month[7] = {name: 'July', days: '31'};
month[8] = {name: 'August', days: '31'};
month[9] = {name: 'September', days: '30'};
month[10] = {name: 'October', days: '31'};
month[11] = {name: 'November', days: '30'};
month[12] = {name: 'December', days: '31'};

module.exports = month;


/*var getYear = {
  calendarHeaderFunction: function () {
    var newDate = new Date();
    var getMonthIndex = date.getMonth();
    var getFullYear = date.getFullYear();
    var monthsArray =
      [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
      ];
    var monthYearHeaderToString = monthsArray[getMonthIndex] + " " + getFullYear + "\n" + "Su Mo Tu We Th Fr Sa";
    var monthLength = monthsArray[getMonthIndex].length;
    var emptyArray = [];
    for (var i = 0; i < spaces; i++) {
      emptyArray.push(" ");
      return emptyArray.join('');
    }
  }
}
console.log(month)*/
