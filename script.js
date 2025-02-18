

// Toggle the mobile navigation menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('is-active'); // Optional: Change hamburger icon
  }
  
  // Toggle dropdown menus for desktop and mobile
  document.querySelectorAll('.dropdown > a').forEach((dropdownToggle) => {
    dropdownToggle.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
      const dropdownMenu = this.nextElementSibling;
  
      // Close other open dropdowns (on mobile)
      if (window.innerWidth <= 768) {
        document.querySelectorAll('.dropdown-menu').forEach((menu) => {
          if (menu !== dropdownMenu) {
            menu.classList.remove('show');
          }
        });
      }
  
      // Toggle the current dropdown menu
      dropdownMenu.classList.toggle('show');
    });
  });
  
  // Close dropdowns when clicking outside (for mobile)
  window.addEventListener('click', function (e) {
    if (!e.target.matches('.dropdown > a') && window.innerWidth <= 768) {
      document.querySelectorAll('.dropdown-menu').forEach((menu) => {
        menu.classList.remove('show');
      });
    }
  });
  
  // Adjust the layout on resize
  window.addEventListener('resize', function () {
    const navLinks = document.querySelector('.nav-links');
    const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  
    // Ensure dropdown menus are hidden and navigation is visible on desktop
    if (window.innerWidth > 768) {
      navLinks.classList.remove('active'); // Close mobile menu
      dropdownMenus.forEach((menu) => menu.classList.remove('show')); // Close dropdowns
    }
  });
  
  