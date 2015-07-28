#!/usr/bin/env node
var app = require(process.cwd() + '/app.js');
var month = require(process.cwd() + '/lib/month');

var monthYearHeader = function (name, y) {
  var monthYear = name + ' ' + y;
  var spaceTaken = (20-monthYear.length)/2-1;
  var spaceAvailable = " ";
  for (var i = 0; i <= spaceTaken; i++) {
    monthYear = spaceAvailable.concat(monthYear);
  }
  return monthYear + '\n';
}

var alignCal = function (weekday, days, name, y) {
  var header = monthYearHeader(name, y);
  var dayOfWeekHeader = 'Su Mo Tu We Th Fr Sa\n';
  header += dayOfWeekHeader;
  var row = ''; //empty row for next inputs up to 20
  var days = days;
  var dayOfWeek = weekday === '0' ? 7 : weekday;
  //this accounts for the spacing on the left side of 1st row.
  // i.e. if the day starts on sunday, you don't want spaces to the left
  // if it starts on Tuesday (3rd day of 1-7 week) subtract 1 and multiply
  // by 3 for 6 spaces.
  for (var i = 0; i < (dayOfWeek - 1) * 3; i++) {
    row += ' ';
  };

  // this accounts for the single space to left of a single digit date
  for(var i = 1; i <= days; i++){
    var day = i < 10 ? ' ' + i : '' + i;
    row += day;
    if(row.length === 20){
      row += '\n';
      header += row;
      row = '';
    }else{
      row += ' ';
    }
  }
  if(row.length > 0){
    header += row;
  }
  return header;
}
module.exports = alignCal;
