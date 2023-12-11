const projectImg = document.getElementById("project-img");
const header = document.getElementById("header");
const menuBar = document.getElementById("menu-bar-icon");
const menuClose = document.getElementById("menu-close-icon");
const nav = document.getElementById("nav");
const myForm = document.getElementById("contact-me-form");

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

function sendMessage(event) {
  event.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const data = {
    fullName: fullName,
    email: email,
    subject: subject,
    message: message,
  };

  fetch("http://localhost:3000/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status == "200") {
        window.location.href =
          "https://natanim-i.github.io/Portfolio/success-page.html";
      } else {
        window.location.href =
          "https://natanim-i.github.io/Portfolio/error-page.html";
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
}
