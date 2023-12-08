const projectImg = document.getElementById("project-img");
const header = document.getElementById("header");
const menuBar = document.getElementById("menu-bar-icon");
const menuClose = document.getElementById("menu-close-icon");
const nav = document.getElementById("nav");

function showMobileMenu() {
  header.classList.add("mobile-header");
  nav.classList.add("mobile-nav");
  menuBar.style.display = "none";
  menuClose.style.display = "block";
}

function closeMobileMenu() {
  menuClose.style.display = "none";
  menuBar.style.display = "block";
  header.classList.remove("mobile-header");
  nav.classList.remove("mobile-nav");
}

function showResume() {
  const btnResume = document.getElementById("btn-resume");
  window.open("./assets/files/NatanimResume.pdf", "_blank");
}

function showp1() {
  projectImg.style.backgroundImage = 'url("./assets/images/comingsoon.avif")';
}

function showp2() {
  projectImg.style.backgroundImage = 'url("./assets/images/adoption.png")';
}

function showp3() {
  projectImg.style.backgroundImage = 'url("./assets/images/dabinventory.png")';
}

function showp4() {
  projectImg.style.backgroundImage = 'url("./assets/images/prison.png")';
}

function showp5() {
  projectImg.style.backgroundImage = 'url("./assets/images/efda.png")';
}

function hide() {
  projectImg.style.backgroundImage = "";
}

const items = document.querySelectorAll(".sub-container button");

function toggleResponse() {
  const item = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (item == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleResponse));
