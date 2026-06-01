/* =========================================================
   SIAMS RB Engineering & Refrigeration — site scripts
   ========================================================= */
document.addEventListener('DOMContentLoaded', function () {

  /* --- Current year in footer --- */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

  /* --- Bootstrap form validation --- */
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });

  /* --- Close mobile navbar after clicking a link --- */
  var navCollapse = document.querySelector('.navbar-collapse');
  document.querySelectorAll('.navbar-collapse .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navCollapse && navCollapse.classList.contains('show')) {
        var toggler = document.querySelector('.navbar-toggler');
        if (toggler) { toggler.click(); }
      }
    });
  });

  /* --- Animated stat counters (count up on scroll into view) --- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var dur = 1600, start = null;
        function tick(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
          if (p < 1) { requestAnimationFrame(tick); }
          else { el.textContent = target.toLocaleString() + suffix; }
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (c) { obs.observe(c); });
  } else {
    /* Fallback: just show final values */
    counters.forEach(function (c) {
      c.textContent = parseFloat(c.getAttribute('data-count')).toLocaleString() + (c.getAttribute('data-suffix') || '');
    });
  }

  /* --- Project gallery filter --- */
  var filterBtns = document.querySelectorAll('.filter-btns .btn');
  var projectItems = document.querySelectorAll('.project-item');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        projectItems.forEach(function (item) {
          var show = filter === 'all' || item.getAttribute('data-category') === filter;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }
});
