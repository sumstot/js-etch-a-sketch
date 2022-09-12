"use strict";
const RGBMAX = 256;
const BOARDWIDTH = 500;
const BOARDHEIGHT = 500;
const grid = document.getElementById("board-container");
const slider = document.getElementById("myRange");
const reset = document.getElementById("reset");

const createGrid = (rows, cols) => {
  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let div = document.createElement("div");
    div.classList.add("board");
    div.classList.add("board:hover");
    // div.textContent = i;
    div.addEventListener("mouseleave", rainbow);
    div.style.height = `${BOARDHEIGHT / rows}px`;
    div.style.width = `${BOARDWIDTH / cols}px`;
    grid.appendChild(div);
  }
};

const clearGrid = () => {
  let grid = document.querySelector("#board-container");
  let child = grid.lastElementChild;
  while (child) {
    grid.removeChild(child);
    child = grid.lastElementChild;
  }
};

slider.oninput = function () {
  let newValue = Math.round(
    ((this.value - this.min) / (this.max - this.min)) * 100
  );
  if (newValue === 0) {
    newValue + 1;
  }
  slider.setAttribute("value", newValue);
  console.log(slider.value);
  clearGrid();
  createGrid(slider.value, slider.value);
};

// TODO create a function for rainbow
const rainbow = function (e) {
  const rgb = [];
  for (let i = 0; i < 3; i++) {
    let color = Math.floor(Math.random() * RGBMAX) + 1;
    rgb.push(color);
  }
  e.target.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

createGrid(slider.value, slider.value);
reset.addEventListener("click", () => {
  clearGrid();
  createGrid(slider.value, slider.value);
});
