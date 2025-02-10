/* exported initial */
function initial(arr: any[]): any[] {
  const initialElements: any[] = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (i !== arr.length - 1) {
      initialElements.push(arr[i]);
    }
  }
  return initialElements;
}
