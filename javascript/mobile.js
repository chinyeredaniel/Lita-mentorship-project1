
const menuIcon = document.querySelector('.menu-icon');
  const mobileMenu = document.getElementById('mobileMenu');
  const dropdownToggles = document.querySelectorAll('.dropdown');
  
  menuIcon.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
  });
  
  const menuClose = document.querySelector('.menu-close');
  menuClose.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
  });
  
  dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
          toggle.classList.toggle('open');
      });
  });