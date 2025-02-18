'use strict';
const $classHotButton = document.querySelector('.hot-button');
const $classClickCount = document.querySelector('.click-count');
if (!$classHotButton) throw new Error('$classHotButton was not found');
$classHotButton.addEventListener('click', () => {
  if (!$classHotButton || !$classClickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  const str = $classClickCount?.textContent;
  const parts = str.split(' ');
  let updatedStr = '';
  let count = parseInt(parts[1]);
  count++;
  updatedStr = parts[0] + ' ' + count;
  $classClickCount.textContent = updatedStr;
  if (count < 4) {
    $classHotButton.className = 'hot-button cold';
  } else if (count >= 4 && count < 7) {
    $classHotButton.className = 'hot-button cool';
  } else if (count >= 7 && count < 10) {
    $classHotButton.className = 'hot-button tepid';
  } else if (count >= 10 && count < 13) {
    $classHotButton.className = 'hot-button warm';
  } else if (count >= 13 && count < 16) {
    $classHotButton.className = 'hot-button hot';
  } else {
    $classHotButton.className = 'hot-button nuclear';
  }
});
