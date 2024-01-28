const container = document.querySelector('.container')


function createGrid (num){
  for (let i = 0; i < num; i++){
  const i = document.createElement("div");
  i.classList.add('div');
  container.appendChild(i);
}
}


createGrid(16)
