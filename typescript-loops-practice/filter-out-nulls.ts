/* exported filterOutNulls */
function filterOutNulls(values: any[]): any[] {
  const nonNulls = [];
  for (const value of values) {
    if (value != null) {
      nonNulls.push(value);
    }
  }
  return nonNulls;
}
