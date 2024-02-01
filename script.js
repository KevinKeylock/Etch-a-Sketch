const container = document.querySelector('.container');
const choose = document.querySelector('#choose');
const color = document.querySelector('#color');
const div = document.querySelector(".div");
const area = document.querySelector(".area");

const row = prompt("Enter number of pixels per row");
const column = row;

if (row > 100){
  alert("Please enter a number below 100")
}
else {
  createGrid(row, column);
}

function createGrid (num1, num2){
  for (let i = 0; i < num1; i++){
    const div = document.createElement("div");
    //div.classList.add('div');
    container.appendChild(div);    
  for (let i = 0; i < num2; i++){
    const area = document.createElement("div");
    //area.classList.add('area');
    div.appendChild(area);
    const height = 600 / num1 - 2;
    area.style.height = height + "px";
    area.style.width = height + "px";
    area.style.border = "solid 1px black";
    area.addEventListener("mouseover", function() {
      area.style.backgroundColor = "red";
    })
  clear.addEventListener("click", function() {
    area.style.backgroundColor = "white";
  })
  yellow.addEventListener("click", function() {
    area.addEventListener("mouseover", function() {
      area.style.backgroundColor = "yellow";
  })})
  white.addEventListener("click", function() {
    area.addEventListener("mouseover", function() {
      area.style.backgroundColor = "white";
  })})
  red.addEventListener("click", function() {
    area.addEventListener("mouseover", function() {
      area.style.backgroundColor = "red";
  })})
  blue.addEventListener("click", function() {
    area.addEventListener("mouseover", function() {
      area.style.backgroundColor = "blue";
  })})
  green.addEventListener("click", function() {
    area.addEventListener("mouseover", function() {
      area.style.backgroundColor = "green";
  })})
  black.addEventListener("click", function() {
    area.addEventListener("mouseover", function() {
      area.style.backgroundColor = "black";
  })})
  random.addEventListener("click", function() {
    area.addEventListener("mouseover", function() {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      area.style.backgroundColor = "#" + randomColor;
  })})
  pencil.addEventListener("click", function() {
      let mouseOverCount = 0;
    area.addEventListener("mouseover", function() {
      mouseOverCount ++;
      const darknessPercentage = (mouseOverCount / 10) * 100;
      area.style.backgroundColor = `hsl(0, 0%, ${100 - darknessPercentage}%)`;
  })})


}}}


choose.addEventListener("click", function() {
  location.reload();
})


