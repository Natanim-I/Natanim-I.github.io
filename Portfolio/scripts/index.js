const projectImg = document.getElementById("project-img");
const header = document.getElementById("header");
const menuBar = document.getElementById("menu-bar-icon");
const menuClose = document.getElementById("menu-close-icon");
const nav = document.getElementById("nav");
const myForm = document.getElementById("contact-me-form");
const items = document.querySelectorAll(".sub-container button");
const titles = document.querySelectorAll("#each-project h2");
const description = document.querySelectorAll("#each-project p");
const year = document.querySelectorAll("#each-project h3");
const images = document.querySelectorAll("#each-project img");
const status = document.querySelectorAll("#each-project h4");
const frontEnd = document.querySelectorAll("#each-project ");
const backEnd = document.querySelectorAll("#each-project ");
const dataBase = document.querySelectorAll("#each-project ");
const EthiopiaImg = document.querySelectorAll(".eth");
const hobbyImg = document.querySelectorAll(".hobby");
const proImg = document.querySelectorAll(".pro");

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
  projectImg.style.backgroundImage = 'url("./assets/images/oasis-1.avif")';
}

function showp2() {
  projectImg.style.backgroundImage = 'url("./assets/images/adoption-1.png")';
}

function showp3() {
  projectImg.style.backgroundImage = 'url("./assets/images/dab-1.png")';
}

function showp4() {
  projectImg.style.backgroundImage = 'url("./assets/images/prison-1.png")';
}

function showp5() {
  projectImg.style.backgroundImage = 'url("./assets/images/efda.png")';
}

function hide() {
  projectImg.style.backgroundImage = "";
}

function showEthiopia() {
  EthiopiaImg.forEach((img) => {
    img.style.display = "block";
  });
  proImg.forEach((img) => {
    img.style.display = "none";
  });
  hobbyImg.forEach((img) => {
    img.style.display = "none";
  });
}

function showHobbies() {
  hobbyImg.forEach((img) => {
    img.style.display = "block";
  });
  proImg.forEach((img) => {
    img.style.display = "none";
  });
  EthiopiaImg.forEach((img) => {
    img.style.display = "none";
  });
}

function showProjects() {
  proImg.forEach((img) => {
    img.style.display = "block";
  });
  EthiopiaImg.forEach((img) => {
    img.style.display = "none";
  });
  hobbyImg.forEach((img) => {
    img.style.display = "none";
  });
}

function showAll() {
  proImg.forEach((img) => {
    img.style.display = "block";
  });
  EthiopiaImg.forEach((img) => {
    img.style.display = "block";
  });
  hobbyImg.forEach((img) => {
    img.style.display = "block";
  });
}

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

function getProjects() {
  fetch("https://natanim-21690c8ea239.herokuapp.com/projects")
    .then((response) => {
      if (!response.ok) {
        window.location.href =
          "https://natanim-i.github.io/Portfolio/error-page.html";
      }
      return response.json();
    })
    .then((data) => {
      const titles = document.querySelectorAll(".p-top");
      const years = document.querySelectorAll(".p-year");
      const descs = document.querySelectorAll(".p-desc");
      const pStatus = document.querySelectorAll(".status");
      const fronts = document.querySelectorAll(".front");
      const backs = document.querySelectorAll(".back");
      const datas = document.querySelectorAll(".data");
      const pr1Images = document.querySelectorAll(".pr1-img");
      const pr2Images = document.querySelectorAll(".pr2-img");
      const pr3Images = document.querySelectorAll(".pr3-img");
      const pr4Images = document.querySelectorAll(".pr4-img");
      const pr5Images = document.querySelectorAll(".pr5-img");

      let i = 0;
      titles.forEach((title) => {
        title.textContent = data[i].name;
        i++;
      });

      let j = 0;
      years.forEach((year) => {
        year.textContent = data[j].year;
        j++;
      });

      let k = 0;
      descs.forEach((desc) => {
        desc.textContent = data[k].description;
        k++;
      });

      let l = 0;
      pStatus.forEach((stat) => {
        stat.textContent = data[l].status;
        l++;
      });

      let m = 0;
      fronts.forEach((front) => {
        front.textContent = data[m].frontEnd;
        m++;
      });

      let n = 0;
      backs.forEach((back) => {
        back.textContent = data[n].backEnd;
        n++;
      });

      let o = 0;
      datas.forEach((pdata) => {
        pdata.textContent = data[o].dataBase;
        o++;
      });

      let p = 0;
      pr1Images.forEach((pimg) => {
        pimg.src = data[0].images[p];
        p++;
      });

      let q = 0;
      pr2Images.forEach((pimg) => {
        pimg.src = data[1].images[q];
        q++;
      });

      let r = 0;
      pr3Images.forEach((pimg) => {
        pimg.src = data[2].images[r];
        r++;
      });

      let s = 0;
      pr4Images.forEach((pimg) => {
        pimg.src = data[3].images[s];
        s++;
      });

      let t = 0;
      pr5Images.forEach((pimg) => {
        pimg.src = data[4].images[t];
        t++;
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
