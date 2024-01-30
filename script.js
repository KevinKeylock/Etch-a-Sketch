const container = document.querySelector('.container')
const row = 10;
const column = row;



function createGrid (num1, num2){
  for (let i = 0; i < num1; i++){
    const div = document.createElement("div");
    div.classList.add('div');
    container.appendChild(div);    

  for (let i = 0; i < num2; i++){
    const area = document.createElement("div");
    area.classList.add('area');
    div.appendChild(area);
    const height = 600 / num1 - 2;
    area.style.height = height + "px";
    area.style.width = height + "px";
    area.style.border = "solid 1px black";
    area.addEventListener("mouseover", function() {
      area.style.backgroundColor = "red";
    })
  }}
}

createGrid(row, column)
