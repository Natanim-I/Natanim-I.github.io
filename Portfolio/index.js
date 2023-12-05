const btnResume = document.getElementById("btn-resume");

btnResume.addEventListener("click", function () {
  window.open("./assets/files/NatanimResume.pdf", "_blank");
});

const projectImg = document.getElementById("project-img");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const p5 = document.getElementById("p5");

p1.addEventListener("mouseenter", function () {
  projectImg.style.backgroundImage = 'url("./assets/images/comingsoon.avif")';
});
p1.addEventListener("mouseleave", function () {
  projectImg.style.backgroundImage = "";
});

p2.addEventListener("mouseenter", function () {
  projectImg.style.backgroundImage = 'url("./assets/images/adoption.png")';
});
p2.addEventListener("mouseleave", function () {
  projectImg.style.backgroundImage = "";
});

p3.addEventListener("mouseenter", function () {
  projectImg.style.backgroundImage = 'url("./assets/images/dabinventory.png")';
});
p3.addEventListener("mouseleave", function () {
  projectImg.style.backgroundImage = "";
});

p4.addEventListener("mouseenter", function () {
  projectImg.style.backgroundImage = 'url("./assets/images/prison.png")';
});
p4.addEventListener("mouseleave", function () {
  projectImg.style.backgroundImage = "";
});

p5.addEventListener("mouseenter", function () {
  projectImg.style.backgroundImage = 'url("./assets/images/efda.png")';
});
p5.addEventListener("mouseleave", function () {
  projectImg.style.backgroundImage = "";
});
