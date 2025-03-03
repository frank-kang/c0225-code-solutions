let count = 4;
const intervalId = setInterval(() => {
  const $classH1 = document.querySelector('.countdown-display');
  if (!$classH1) throw new Error('h1 does not exist');
  count--;
  $classH1.textContent = count.toString();
  if (count <= 0) {
    $classH1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}, 1000);
