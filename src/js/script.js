// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const toTop = document.querySelector("#to-top");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.replace("hidden", "flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.replace("flex", "hidden");
  }
};

// Dark mode
const darkMode = document.querySelector("#dark-mode");
const html = document.querySelector("html");

darkMode.addEventListener("click", function () {
  if (darkMode.checked) {
    html.classList.add("dark");
    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";
  }
});

// Move the toggle position according to the mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkMode.checked = true;
} else {
  darkMode.checked = false;
}