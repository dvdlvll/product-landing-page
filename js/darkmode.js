function darkMode() {
  firstViewDarkMode();
}

function firstViewDarkMode() {
  let element = document.querySelector(".first-view");
  if (element) {
    element.classList.toggle("first-view-dark");
  }
}