"use strict";

const grid = document.getElementById("board-container");

const createGrid = (rows, cols) => {
  grid.style.setProperty("--grid-rows", rows);
  grid.style.setProperty("--grid-cols", cols);
  for (let i = 0; i < rows * cols; i++) {
    let div = document.createElement("div");
    div.classList.add("board");
    div.classList.add("board:hover");
    div.textContent = i;
    grid.appendChild(div);
  }
};

createGrid(16, 16);
