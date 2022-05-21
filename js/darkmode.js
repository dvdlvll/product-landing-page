function darkMode() {
  firstViewDarkMode();
  thankYouDarkMode();
}

function firstViewDarkMode() {
  let element = document.querySelector(".first-view");
  if (element) {
    element.classList.toggle("first-view-dark");
  }
}

function thankYouDarkMode() {
  let element = document.querySelector(".thank-you-page");
  if (element) {
    element.classList.toggle("thank-you-page-dark");
  }
}