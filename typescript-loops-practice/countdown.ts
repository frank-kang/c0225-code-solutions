/* exported countdown */
function countdown(num: number): number[] {
  const backwards: number[] = [];
  for (let i = num; i >= 0; i--) {
    backwards.push(i);
  }
  return backwards;
}
