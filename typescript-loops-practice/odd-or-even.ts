/* exported oddOrEven */
function oddOrEven(arr: number[]): string[] {
  let isEven: string = '';
  const result: string[] = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      isEven = 'even';
    } else {
      isEven = 'odd';
    }
    result.push(isEven);
  }
  return result;
}
