// activate the website hamburger icon and navigation
const hamburger = document.querySelector("#icon");
const nav = document.querySelector(".nav-mobile");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("bx-x");
  nav.classList.toggle("active");
});

// hide mobile navigation after clicking a link or clicking outside
document.onclick = function (n) {
  if (n.target.id !== "icon" && n.target.id !== "nav-mobile") {
    hamburger.classList.remove("bx-x");
    nav.classList.remove("active");
  }
};

// adding sticky animation to the navigation
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", scrollY > 0);
});
