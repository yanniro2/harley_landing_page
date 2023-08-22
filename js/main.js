document.addEventListener('DOMContentLoaded', function() {
  const burgerButtons = document.querySelectorAll(".navbar-burger");
  const menuElements = document.querySelectorAll(".navbar-menu");
  const closeButtons = document.querySelectorAll(".navbar-close");
  const backdrops = document.querySelectorAll(".navbar-backdrop");
  const navLinks = document.querySelectorAll(".nav-link");

  function toggleMenu() {
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.toggle("hidden");
    }
  }

  if (burgerButtons.length) {
    for (var i = 0; i < burgerButtons.length; i++) {
      burgerButtons[i].addEventListener("click", toggleMenu);
    }
  }

  if (closeButtons.length) {
    for (var i = 0; i < closeButtons.length; i++) {
      closeButtons[i].addEventListener("click", toggleMenu);
    }
  }

  if (backdrops.length) {
    for (var i = 0; i < backdrops.length; i++) {
      backdrops[i].addEventListener("click", toggleMenu);
    }
  }

  if (navLinks.length) {
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", toggleMenu);
    }
  }
});
