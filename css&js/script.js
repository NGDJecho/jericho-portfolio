// Tailwind Dark Mode Toggle
function toggleTheme() {
  document.documentElement.classList.toggle('dark');
}

// Security Features

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});

// Disable Ctrl+C, Ctrl+X, Ctrl+S, Ctrl+P, Ctrl+U and PrintScreen
document.addEventListener('keydown', function(e) {
  if (
    (e.ctrlKey && ['c', 'x', 's', 'p', 'u'].includes(e.key.toLowerCase())) ||
    (e.key === 'PrintScreen')
  ) {
    e.preventDefault();
    alert('Copying or taking screenshots is disabled for security.');
  }
});

// Disable drag events
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
});
