const start = document.getElementById("start");
const img = document.getElementById("boston");
const info = document.getElementById("information");

start.addEventListener("click", () => {
  img.style.display = "none";
  info.style.display = "block";
  handleMouseClick();
});

function handleMouseClick() {
  fetch("https://natanim-i.github.io/degrees.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      console.log("Status code:", response.status);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const tableData = document.getElementById("data");
      tableData.innerHTML = "";
      data.foreach((degree) => {
        const row = tableData.insertRow();
        const cellSchool = row.insertCell(0);
        const cellMajor = row.insertCell(1);
        const cellType = row.insertCell(2);
        const cellYear = row.insertCell(3);

        cellSchool.textContent = degree.school;
        cellMajor.textContent = degree.programMajor;
        cellType.textContent = degree.cellType;
        cellYear.textContent = degree.yearConfered;
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
