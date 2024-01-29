const container = document.querySelector('.container')
const row = prompt("Please enter amount of rows!");
const column = prompt("Please enter number of columns!");

function createGrid (num1, num2){
  for (let i = 0; i < num1; i++){
    const div = document.createElement("div");
    div.classList.add('div');
    container.appendChild(div);
  for (let i = 0; i < num2; i++){
    const area = document.createElement("div");
    area.classList.add('area');
    div.appendChild(area);
    area.addEventListener("mouseover", function() {
      area.style.backgroundColor = "red";
    })
  }}
}

createGrid(row, column)




