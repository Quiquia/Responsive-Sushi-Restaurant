const $navMenu = document.getElementById("nav-menu"),
  $navToggle = document.getElementById("nav-toggle"),
  $navClose = document.getElementById("nav-close"),
  $navLink = document.querySelectorAll(".nav-link");

if ($navToggle) {
  $navToggle.addEventListener("click", () => {
    $navMenu.classList.add("show-menu");
  });
}

if ($navClose) {
  $navClose.addEventListener("click", () => {
    $navMenu.classList.remove("show-menu");
  });
}

/*----------------remove menu mobile-------------------*/
const linkAction = () => {
  $navMenu.classList.remove("show-menu");
};

$navLink.forEach(($el) => {
  $el.addEventListener("click", linkAction);
});

/* -----------------change background header-----------*/

const scrollHeader = () => {
  const $header = document.getElementById("header");

  this.scrollY >= 50
    ? $header.classList.add("bg-header")
    : $header.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*--------------- scroll up ----------------------- */

const scrollUp = () => {
  const $scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? $scrollUp.classList.add("show-scroll")
    : $scrollUp.classList.remove("show-scrol");
};

window.addEventListener("scroll", scrollUp);

/*--------------- scroll sections active link ----------------------- */

const $sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  $sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", scrollActive);

/*--------------- dark light theme----------------------- */

const $themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  $themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  $themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

$themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  $themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*--------------- scroll reveal animation----------------------- */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(
  ".home-img, .newsletter-container, .footer-logo, .footer-description, .footer-content, .footer-info"
);
sr.reveal(".home-data", { origin: "bottom" });
sr.reveal(".about-data, .recently-data", { origin: "left" });
sr.reveal(".about-img, .recently-img", { origin: "right" });
sr.reveal(".popular-card", { interval: 100 });
