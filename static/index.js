let type = new Typed(".typed", {
    typeSpeed: 80,
    strings: ["Developer", "Student", "Gamer"],
    loop: true
  })
  
  document.getElementById("theme-switcher").checked = localStorage.getItem("theme") !== "theme-dark";
  
  function toggle_theme() {
    let enabled = document.getElementById("theme-switcher").checked;
    let theme = enabled ? "theme-light" : "theme-dark"
  
    localStorage.setItem("theme", theme);
  
    control_theme();
  }
  
  function control_theme() {
    let theme = localStorage.getItem("theme") || "theme-dark";
    document.documentElement.className = theme;
    document.getElementById("theme-switcher").checked = theme !== "theme-dark";
  }
  
  control_theme();
  
  let observer = new IntersectionObserver((e) => {
    let intersect = e[0].isIntersecting;
  
    intersect ? e[0].target.classList.add("i-fade-up-1") : e[0].target.classList.remove("i-fade-up-1");
  }, {
    rootMargin: "80px"
  })
  
  let elements = document.querySelectorAll(".i-observe-anim-fade");
  
  elements.forEach((e) => {
    observer.observe(e);
  })