// Select the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Function to toggle the theme
function toggleTheme() {
  // Toggle the "lightmode" class on the root element
  document.documentElement.classList.toggle('lightmode');

  // Update the icon rotation (optional for visual effect)
  const themeIcon = document.getElementById('theme-icon');
  themeIcon.style.transform = document.documentElement.classList.contains('lightmode')
    ? 'rotate(180deg)'
    : 'rotate(0deg)';

  // Save the current theme in localStorage
  localStorage.setItem(
    'theme',
    document.documentElement.classList.contains('lightmode') ? 'lightmode' : 'darkmode'
  );
}

// Add click event listener to the button
themeToggle.addEventListener('click', toggleTheme);

// Load the saved theme from localStorage when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'lightmode') {
    document.documentElement.classList.add('lightmode');
  }
});

