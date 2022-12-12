const toggleMobileMenu = () => {
  const menu = document.querySelector(".nav-links");
  const icon = document.querySelector(".icon-menu");
  const background = document.querySelector(".background-dark");
  if (menu.classList.contains("mobile-menu-open")) {
    background.style.display = "none";
    menu.classList.remove("mobile-menu-open");
    icon.src="../assets/icon-menu.svg";
  } else {
    menu.classList.add("mobile-menu-open");
    icon.src="../assets/icon-menu-close.svg";
    background.style.display = "block";
  }
}
