function typingTutor(): void {
  const $tagSpans = document.querySelectorAll('span');
  console.log('beginning', $tagSpans);
  let currentIndex = 0;
  let $tagSpan = $tagSpans[currentIndex];
  $tagSpan.classList.add('active');
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    console.log('tagSpan:', $tagSpan);
    if ($tagSpan.textContent === e.key && currentIndex < $tagSpans.length) {
      $tagSpan.classList.add('green-font');
      if ($tagSpan.classList.contains('red-font')) {
        $tagSpan.classList.toggle('red-font');
      }
      if ($tagSpan.classList.contains('active')) {
        $tagSpan.classList.toggle('active');
      }
      currentIndex++;
      if (currentIndex < $tagSpans.length) {
        $tagSpan = $tagSpans[currentIndex];
        $tagSpan.className = 'active';
      }
    } else {
      if (currentIndex < $tagSpans.length) {
        $tagSpan.classList.add('red-font');
      }
    }
  });
}

typingTutor();
