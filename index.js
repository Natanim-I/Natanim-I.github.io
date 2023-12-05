const start = document.getElementById("start");
const img = document.getElementById("boston");
const info = document.getElementById("information");
const main = document.getElementById("main");

start.addEventListener("click", () => {
  img.src = "./assets/images/natanim.svg";
  img.style.width = "35%";
  info.style.display = "block";
  handleMouseClick();
});

function handleMouseClick() {
  fetch("https://natanim-i.github.io/degrees.json")
    .then((response) => {
      if (!response.ok) {
        if (response.status == 404) {
          img.src = "./assets/images/404.svg";
          start.style.display = "none";
          info.style.display = "none";
          let pageNotFound = document.createElement("h1");
          pageNotFound.textContent = "Page Not Found!!!";
          main.appendChild(pageNotFound);
        }
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const tableData = document.getElementById("data");
      let tr1 = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.textContent = data.degrees[0].school;
      let td2 = document.createElement("td");
      td2.textContent = data.degrees[0].programMajor;
      let td3 = document.createElement("td");
      td3.textContent = data.degrees[0].type;
      let td4 = document.createElement("td");
      td4.textContent = data.degrees[0].yearConferred;
      let tr2 = document.createElement("tr");
      let td5 = document.createElement("td");
      td5.textContent = data.degrees[1].school;
      let td6 = document.createElement("td");
      td6.textContent = data.degrees[1].programMajor;
      let td7 = document.createElement("td");
      td7.textContent = data.degrees[1].type;
      let td8 = document.createElement("td");
      td8.textContent = data.degrees[1].yearConferred;
      tr1.appendChild(td1);
      tr1.appendChild(td2);
      tr1.appendChild(td3);
      tr1.appendChild(td4);
      tr2.appendChild(td5);
      tr2.appendChild(td6);
      tr2.appendChild(td7);
      tr2.appendChild(td8);
      tableData.appendChild(tr1);
      tableData.appendChild(tr2);
      start.disabled = true;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
