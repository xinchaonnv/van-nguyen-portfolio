/* ============================================================
   script.js — Van Nguyen portfolio
   Vanilla JS only. No libraries, no build tools.
   ============================================================ */

/* ─── Rotating Hero Text ──────────────────────────────────── */
(function initRotatingText() {
  const words = ['xin chào', 'product designer', 'analyst', 'climber'];
  let currentIndex = 0;
  let isAnimating = false;

  const el = document.getElementById('rotating-text');
  if (!el) return;

  function cycleWord() {
    if (isAnimating) return;
    isAnimating = true;

    /* Step 1: animate current word out (slide up + fade) */
    el.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    el.style.opacity = '0';
    el.style.transform = 'translateY(-28px)';

    setTimeout(function () {
      /* Step 2: swap text and snap to below-position, no transition */
      currentIndex = (currentIndex + 1) % words.length;
      el.textContent = words[currentIndex];

      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';

      /* Step 3: force reflow so the browser registers the snap */
      void el.offsetHeight;

      /* Step 4: animate new word in (slide up + fade) */
      el.style.transition = 'opacity 0.38s ease, transform 0.38s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';

      isAnimating = false;
    }, 380);
  }

  /* Delay the first cycle so the visitor sees "xin chào" first */
  setTimeout(function () {
    setInterval(cycleWord, 2800);
  }, 1600);
}());

/* ─── Live Clock ──────────────────────────────────────────── */
(function initClock() {
  var clockEls = document.querySelectorAll('#live-clock');
  if (!clockEls.length) return;

  function tick() {
    var now  = new Date();
    var h    = String(now.getHours()).padStart(2, '0');
    var m    = String(now.getMinutes()).padStart(2, '0');
    var s    = String(now.getSeconds()).padStart(2, '0');
    var time = h + ':' + m + ':' + s;

    clockEls.forEach(function (el) {
      el.textContent = time;
    });
  }

  tick();
  setInterval(tick, 1000);
}());
