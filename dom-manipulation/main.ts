const $classHotButton = document.querySelector('.hot-button');
const $classClickCount = document.querySelector('.click-count');
let count: number = 0;
if (!$classHotButton) throw new Error('$classHotButton was not found');

$classHotButton.addEventListener('click', () => {
  if (!$classHotButton || !$classClickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  /* const str: any = $classClickCount?.textContent;
  const parts: any[] = str.split(' ');
  let updatedStr: any = '';
  let count = parseInt(parts[1]);
  updatedStr = parts[0] + ' ' + count; */
  count++;
  let temp: string = '';
  // $classClickCount.textContent = updatedStr;
  if (count < 4) {
    // $classHotButton.className = 'hot-button cold';
    temp = 'cold';
  } else if (count < 7) {
    temp = 'cool';
  } else if (count < 10) {
    temp = 'tepid';
  } else if (count < 13) {
    temp = 'warm';
  } else if (count < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }

  $classHotButton.className = `hot-button ${temp}`;
  $classClickCount.textContent = `Clicks: ${count}`;
});
