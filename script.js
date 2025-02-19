function setStyles(navbar) {
  if (navbar.style.backgroundColor !== "rgba(8, 8, 8, 0.8)") {
    let tabIndicator = document.querySelector(".indicator");

    tabIndicator.style.marginLeft = "2rem";
    navbar.style.backgroundColor = "rgba(8, 8, 8, 0.8)";
    navbar.style.backdropFilter = "blur(5px)";
    navbar.style.padding = "1rem 2rem";
    navbar.style.borderRadius = "2.5rem";
    navbar.style.border = "2px solid rgb(50, 50, 50)";
  }
}

function resetStyles(navbar) {
  if (navbar.style.backgroundColor !== "transparent") {
    let tabIndicator = document.querySelector(".indicator");

    tabIndicator.style.marginLeft = 0;
    navbar.style.backgroundColor = "transparent";
    navbar.style.backdropFilter = "blur(0)";
    navbar.style.padding = 0;
    navbar.style.borderRadius = 0;
    navbar.style.border = "none";
  }
}

function moveIndicator() {}

window.onscroll = () => {
  const navbar = document.querySelector(".nav-bar");
  const greetingCard = document.querySelector(".greeting-card");
  const aboutMeSection = document.getElementById("about-me-section");
  const homeSection = document.getElementById("home-section");
  const projectsSection = document.getElementById("projects");
  const contactSection = document.getElementById("contact-me-section");

  let navbarClientRect = navbar.getBoundingClientRect();
  let greetingCardClientRect = greetingCard.getBoundingClientRect();

  let headerTag = document.querySelector(".introduction h1");
  let paragraphTag = document.querySelector(".introduction p");
  let headerTagClientRect = headerTag.getBoundingClientRect();
  let paragraphTagClientRect = paragraphTag.getBoundingClientRect();

  let headerTagTwo = document.querySelector(".smth h1");
  let projectsList = document.querySelector(".projects-list");

  let headerTagTwoClientRect = headerTagTwo.getBoundingClientRect();
  let projectsListClientRect = projectsList.getBoundingClientRect();

  if (
    navbarClientRect.bottom > greetingCardClientRect.top &&
    greetingCardClientRect.bottom > navbarClientRect.top
  ) {
    setStyles(navbar);
  } else if (
    navbarClientRect.bottom > headerTagClientRect.top &&
    paragraphTagClientRect.bottom > navbarClientRect.top
  ) {
    setStyles(navbar);
  } else if (
    navbarClientRect.bottom > headerTagTwoClientRect.top &&
    projectsListClientRect.bottom > navbarClientRect.top
  ) {
    setStyles(navbar);
  } else {
    resetStyles(navbar);
  }

  let aboutMeSectionClientRect = aboutMeSection.getBoundingClientRect();
  let homeSectionClientRect = homeSection.getBoundingClientRect();
  let projectsSectionClientRect = projectsSection.getBoundingClientRect();
  let contactSectionClientRect = contactSection.getBoundingClientRect();

  if (
    aboutMeSectionClientRect.top <= 0 &&
    aboutMeSectionClientRect.bottom > 0
  ) {
    let tabIndicator = document.querySelector(".indicator");

    tabIndicator.style.left = 148 + "px";
    tabIndicator.style.width = 110 + "px";
  } else if (homeSectionClientRect.top >= 0) {
    let tabIndicator = document.querySelector(".indicator");

    tabIndicator.style.left = 0;
    tabIndicator.style.width = 100 + "px";
  } else if (
    projectsSectionClientRect.top <= 0 &&
    projectsSectionClientRect.bottom >= 5
  ) {
    let tabIndicator = document.querySelector(".indicator");

    tabIndicator.style.left = 306 + "px";
    tabIndicator.style.width = 120 + "px";
  } else if (contactSectionClientRect.top <= 100) {
    let tabIndicator = document.querySelector(".indicator");

    tabIndicator.style.left = 474 + "px";
    tabIndicator.style.width = 110 + "px";
  }
};

document.querySelector(".home-link").onclick = () => {
  document.getElementById("nav-bar-container").scrollIntoView({ behavior: "smooth" });
  // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

document.querySelector(".about-link").onclick = () => {
  document.getElementById("about-me-section").scrollIntoView({ behavior: "smooth"});
  // window.scrollTo({ top: window.innerHeight + 0.2, left: 0, behavior: "smooth" });
};

document.querySelector(".projects-link").onclick = () => {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  // window.scrollTo({ top: window.innerHeight * 2, left: 0, behavior: "smooth" });
};

document.querySelector(".contact-link").onclick = () => {
  document.getElementById("contact-me-section").scrollIntoView({ behavior: "smooth" });
  // window.scrollTo({
  //   top: window.innerHeight * 3.5,
  //   left: 0,
  //   behavior: "smooth",
  // });
};
