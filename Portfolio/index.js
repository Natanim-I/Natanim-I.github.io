const projectImg = document.getElementById("project-img");
const header = document.getElementById("header");
const menuBar = document.getElementById("menu-bar-icon");
const menuClose = document.getElementById("menu-close-icon");
const nav = document.getElementById("nav");
const myForm = document.getElementById("contact-me-form");
const fullname = document.getElementById("fullName");
const _email = document.getElementById("email");
const _subject = document.getElementById("subject");
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");

fullname.addEventListener("input", () => {
  fullNameError.style.display = "none";
});

_email.addEventListener("input", () => {
  emailError.style.display = "none";
});

_subject.addEventListener("input", () => {
  subjectError.style.display = "none";
});

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

  const nameRegex = /^[a-zA-Z\s]{1,}$/;
  const emailRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  if (!nameRegex.test(fullName)) {
    document.querySelector("#fullNameError").style.display = "block";
    document.querySelector("#fullNameError").textContent =
      "Full Name must contain only characters!";
    return false;
  } else if (fullName.length < 3) {
    document.querySelector("#fullNameError").style.display = "block";
    document.querySelector("#fullNameError").textContent =
      "Full Name must have atleast 3 characters!";
    return false;
  } else if (!emailRegex.test(email)) {
    document.querySelector("#emailError").style.display = "block";
    document.querySelector("#emailError").textContent =
      "Incorrect Email format!!!";
    return false;
  } else if (subject.length < 3) {
    document.querySelector("#subjectError").style.display = "block";
    document.querySelector("#subjectError").textContent =
      "Subject must have atleast 3 characters!";
    return false;
  } else {
    const data = {
      fullName: fullName,
      email: email,
      subject: subject,
      message: message,
    };

    fetch("https://natanim-21690c8ea239.herokuapp.com/messages", {
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
    return true;
  }
}
