// Theme toggle — attaches to #themeToggle and persists choice via localStorage.
// The initial class is applied by a tiny inline script in <head> to avoid flash.
(function () {
  var toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    var isDark = document.body.classList.toggle('dark');
    try { localStorage.setItem('mcabe-theme', isDark ? 'dark' : 'light'); } catch (e) {}
  });

  // Update year in footer if present
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
