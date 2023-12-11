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
