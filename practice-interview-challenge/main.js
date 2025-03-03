'use strict';
function getAverage(start, end) {
  let average = 0;
  for (let i = start; i <= end; i++) {
    average += i;
  }
  average = average / (end - start);
  return parseInt(average.toFixed(1));
}
function getEvens(start, end) {
  const evens = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens;
}
function getOdds(start, end) {
  const odds = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds;
}
function getRange(start, end) {
  const range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}
function getTotal(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
}
function getRangeReport(start, end) {
  const data = {
    average: 0,
    evens: [],
    odds: [],
    range: [],
    total: 0,
  };
  const average = getAverage(start, end);
  const evens = getEvens(start, end);
  const odds = getOdds(start, end);
  const range = getRange(start, end);
  const total = getTotal(start, end);
  data.average = average;
  data.evens = evens;
  data.odds = odds;
  data.range = range;
  data.total = total;
  return data;
}
const report = getRangeReport(1, 20);
console.log(report);
