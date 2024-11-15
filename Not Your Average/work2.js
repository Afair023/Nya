// Toggle the visibility of the hamburger menu
function toggleMenu() {
  const menu = document.querySelector('.nav-menu');
  menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu

  // Prevent horizontal scroll when the menu is active
  if (menu.classList.contains('active')) {
    document.body.style.overflowX = 'hidden'; // Hide horizontal scroll when menu is open
  } else {
    document.body.style.overflowX = 'auto'; // Show scroll when menu is closed
  }
}


const floatingImages = document.querySelectorAll('.floating-image, .floating-image2, .floating-image3, .floating-image4, .floating-image5, .floating-image6');


floatingImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.classList.add('paused'); 
  });

  image.addEventListener('mouseleave', () => {
    image.classList.remove('paused'); 
  });
});


