const $classH1 = document.querySelector('.message');

setTimeout(() => {
  if (!$classH1) throw new Error('H1 does not exist');
  $classH1.textContent = 'Hello There';
}, 2000);
