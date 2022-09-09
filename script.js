"use strict";
const RGBMAX = 256;
const BOARDWIDTH = 500;
const BOARDHEIGHT = 500;
const grid = document.getElementById("board-container");
const black = function (e) {
  e.target.style.backgroundColor = "black";
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

createGrid(16, 16);
