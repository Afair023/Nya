function toggleMenu() {
  const menu = document.querySelector('.nav-menu');
  menu.classList.toggle('active');

  // Prevent horizontal scroll when the menu is active
  if (menu.classList.contains('active')) {
    document.body.style.overflowX = 'hidden';
  } else {
    document.body.style.overflowX = 'auto';
  }
}
