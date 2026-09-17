// year
document.getElementById('yr').textContent = new Date().getFullYear();

// theme toggle: system default, explicit choice persisted
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  if (stored === 'dark' || stored === 'light') root.setAttribute('data-theme', stored);

  btn.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    if (!current) {
      current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    var next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// nav scrollspy: highlight the section whose top has most recently passed the header
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var targets = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);
  if (!targets.length) return;

  var ticking = false;
  function update() {
    ticking = false;
    var line = window.scrollY + 120;
    var current = null;
    targets.forEach(function (t) {
      if (t.offsetTop <= line) current = t.id;
    });
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 8) {
      current = targets[targets.length - 1].id;
    }
    links.forEach(function (a) {
      a.classList.toggle('active', current !== null && a.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
