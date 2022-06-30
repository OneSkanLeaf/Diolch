const toggleButton = document.getElementsByClassName("toggle__Button")[0];
const navbarLinks = document.getElementsByClassName("navbar__Links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
