let bar = document.querySelectorAll(".c-bar");

let initialValue = [0, 0, 0, 0, 0, 0, 0, 0];
let finalValue = [95, 90, 85, 70, 50, 50, 70, 80];
let speed = 10;

const timer1 = setInterval(() => {
  initialValue[0] += 1;
  bar[0].style.background = `conic-gradient(green ${
    (initialValue[0] / 100) * 360
  }deg, #fff 0deg)`;

  if (initialValue[0] >= finalValue[0]) {
    clearInterval(timer1);
  }
}, speed);

const timer2 = setInterval(() => {
  initialValue[1] += 1;
  bar[1].style.background = `conic-gradient(green ${
    (initialValue[1] / 100) * 360
  }deg, #fff 0deg)`;

  if (initialValue[1] >= finalValue[1]) {
    clearInterval(timer2);
  }
}, speed);

const timer3 = setInterval(() => {
  initialValue[2] += 1;
  bar[2].style.background = `conic-gradient(green ${
    (initialValue[2] / 100) * 360
  }deg, #fff 0deg)`;

  if (initialValue[2] >= finalValue[2]) {
    clearInterval(timer3);
  }
}, speed);

const timer4 = setInterval(() => {
  initialValue[3] += 1;
  bar[3].style.background = `conic-gradient(green ${
    (initialValue[3] / 100) * 360
  }deg, #fff 0deg)`;

  if (initialValue[3] >= finalValue[3]) {
    clearInterval(timer4);
  }
}, speed);

const timer5 = setInterval(() => {
  initialValue[4] += 1;
  bar[4].style.background = `conic-gradient(green ${
    (initialValue[4] / 100) * 360
  }deg, #fff 0deg)`;

  if (initialValue[4] >= finalValue[4]) {
    clearInterval(timer5);
  }
}, speed);

const timer6 = setInterval(() => {
  initialValue[5] += 1;
  bar[5].style.background = `conic-gradient(green ${
    (initialValue[5] / 100) * 360
  }deg, #fff 0deg)`;

  if (initialValue[5] >= finalValue[5]) {
    clearInterval(timer6);
  }
}, speed);

const timer7 = setInterval(() => {
  initialValue[6] += 1;
  bar[6].style.background = `conic-gradient(green ${
    (initialValue[6] / 100) * 360
  }deg, #fff 0deg)`;

  if (initialValue[6] >= finalValue[6]) {
    clearInterval(timer7);
  }
}, speed);

const timer8 = setInterval(() => {
  initialValue[7] += 1;
  bar[7].style.background = `conic-gradient(green ${
    (initialValue[7] / 100) * 360
  }deg, #fff 0deg)`;

  if (initialValue[7] >= finalValue[7]) {
    clearInterval(timer8);
  }
}, speed);
