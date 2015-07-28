#!/usr/bin/env node

var getMonth = require(process.cwd() + '/lib/month');
var getYear = require(process.cwd() + '/lib/year')
var zellers = require(process.cwd() + '/lib/zellers');
var formatDate = require(process.cwd() + '/lib/format');
var alignCal = require(process.cwd() + '/lib/align');

if(process.argv.length === 2) {
  var y = process.argv[2];

  console.log(calOutput(1, m, y, getMonth[m].days, getMonth[m].name));
} else if (process.argv.length > 3) {
  var m = process.argv[2];
  var y = process.argv[3];
  console.log(calOutput(1, m, y, getMonth[m].days, getMonth[m].name));
} else {
  var date = new Date();
  var d = date.getDate() + '';
  var m = date.getMonth() + 1 + '';
  var y = date.getFullYear() + '';
  console.log(calOutput(1, m, y, getMonth[m].days, getMonth[m].name));
}

function calOutput(d, m, y, days, name){
  var inputDate = {
    day: d,
    month: m,
    year: y
  }
  var formatted = formatDate(inputDate);
  var weekday = zellers(formatted);
  return alignCal(weekday, days, name, y);
}
