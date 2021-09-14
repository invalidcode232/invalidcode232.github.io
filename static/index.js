const typed = new Typed(".typed", {
  typeSpeed: 80,
  strings: ["Developer", "Student", "Gamer"],
  loop: true
})

document.getElementById("theme-switcher").checked = localStorage.getItem("theme") !== "theme-dark";

function toggle_theme() {
  let theme = localStorage.getItem("theme") || "theme-dark";

  theme = theme === "theme-dark" ? "theme-light" : "theme-dark";

  localStorage.setItem("theme", theme);

  control_theme();
}

function control_theme() {
  document.documentElement.className = localStorage.getItem("theme") || "theme-dark";
}

control_theme();