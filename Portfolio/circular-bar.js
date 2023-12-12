let bar = document.querySelector(".c-bar");
let percent = document.querySelector(".percent");
let initialValue = 0;
let finalValue = 70;
let speed = 10;

const timer = setInterval(() => {
  initialValue += 1;

  updateGradient(initialValue);
  if (initialValue >= finalValue) {
    clearInterval(timer);
  }
}, speed);

function updateGradient(value) {
  let gradientValue = (value / finalValue) * 100;
  let gradient = `conic-gradient(green ${gradientValue}%, #fff ${gradientValue}%)`;
  bar.style.background = gradient;
}
