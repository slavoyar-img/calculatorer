const grid = document.getElementById("grid");

for (let i = 1; i <= 200; i++) {
  const button = document.createElement("button");
  button.textContent = i;
  grid.appendChild(button);
}
