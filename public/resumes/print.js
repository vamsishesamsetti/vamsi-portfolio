// Attaches the print handler without inline JS, so the strict
// Content-Security-Policy (script-src 'self') does not block it.
document.querySelectorAll('.print-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    window.print()
  })
})
