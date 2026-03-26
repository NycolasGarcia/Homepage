// Function to toggle theme
function toggleTheme() {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Update theme
    html.setAttribute('data-bs-theme', newTheme);

    // Update button class
    themeToggle.classList.toggle('btn-light', newTheme === 'dark');
    themeToggle.classList.toggle('btn-dark', newTheme === 'light');

    // Save preference to localStorage
    localStorage.setItem('theme', newTheme);
}

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');

    // Set initial theme
    html.setAttribute('data-bs-theme', savedTheme);

    // Set initial button class
    themeToggle.classList.toggle('btn-light', savedTheme === 'dark');
    themeToggle.classList.toggle('btn-dark', savedTheme === 'light');

    // Add click event listener to toggle button
    themeToggle.addEventListener('click', toggleTheme);
});