interface Data {
  average: number;
  evens: number[];
  odds: number[];
  range: number[];
  total: number;
}

function getAverage(start: number, end: number): number {
  let average = 0;
  for (let i = start; i <= end; i++) {
    average += i;
  }
  average = average / (end - start);
  return parseInt(average.toFixed(1));
}

function getEvens(start: number, end: number): number[] {
  const evens: number[] = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens;
}

function getOdds(start: number, end: number): number[] {
  const odds: number[] = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      odds.push(i);
    }
  }
  return odds;
}

function getRange(start: number, end: number): number[] {
  const range: number[] = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
  }
  return range;
}

function getTotal(start: number, end: number): number {
  let total: number = 0;
  for (let i = start; i <= end; i++) {
    total += i;
  }
  return total;
}

function getRangeReport(start: number, end: number): Data {
  const data: Data = {
    average: 0,
    evens: [],
    odds: [],
    range: [],
    total: 0,
  };
  const average: number = getAverage(start, end);
  const evens: number[] = getEvens(start, end);
  const odds: number[] = getOdds(start, end);
  const range: number[] = getRange(start, end);
  const total: number = getTotal(start, end);

  data.average = average;
  data.evens = evens;
  data.odds = odds;
  data.range = range;
  data.total = total;

  return data;
}

const report = getRangeReport(1, 20);
console.log(report);
