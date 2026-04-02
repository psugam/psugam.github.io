
  // Animated progress counter
  const bar = document.getElementById('bar');
  const pct = document.getElementById('pct');
  const target = 68;
  let start = null;
  const duration = 2200;
  const delay = 1500;

  setTimeout(() => {
    function step(ts) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = Math.round(eased * target);
      pct.textContent = val + '%';
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }, delay);

  // Notify button
  function handleNotify() {
    const input = document.getElementById('emailInput');
    const msg = document.getElementById('confirmMsg');
    const email = input.value.trim();
    if (!email || !email.includes('@')) {
      input.style.color = '#c0392b';
      input.value = '';
      input.placeholder = 'Please enter a valid email';
      setTimeout(() => {
        input.style.color = '';
        input.placeholder = 'Enter your email address';
      }, 2500);
      return;
    }
    input.value = '';
    input.placeholder = 'Thank you!';
    msg.classList.add('show');
    setTimeout(() => {
      input.placeholder = 'Enter your email address';
    }, 3000);
  }

  document.getElementById('emailInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleNotify();
  });

