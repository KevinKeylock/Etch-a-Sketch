const container = document.querySelector('.container');
const choose = document.querySelector('#choose');
const row = prompt("Enter number of blocks per row");
const column = row;

if (row > 100){
  alert("Please enter a number below 100")
}
else {
  createGrid(row, column);
}

choose.addEventListener("click", function() {
  location.reload()
})

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


