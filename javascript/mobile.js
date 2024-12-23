// Select elements
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeMenu = document.getElementById("close-menu");
const dropdownItems = document.querySelectorAll(".menu-item");

// Toggle sidebar visibility
menuToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Toggle dropdown menus
dropdownItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const submenu = item.nextElementSibling;

    if (submenu.style.display === "block") {
      submenu.style.display = "none";
    } else {
      submenu.style.display = "block";
    }
  });
});
