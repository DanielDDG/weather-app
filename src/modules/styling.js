const searchInput = document.getElementById("location");
const glassContainer = document.getElementById("glassContainer");

function setBorders(color) {
  glassContainer.style.borderRight = `2px solid ${color}`;
  glassContainer.style.borderTop = `2px solid ${color}`;
  glassContainer.style.borderBottom = `2px solid ${color}`;
}

searchInput.addEventListener("focus", () => {
  setBorders("white");
});

searchInput.addEventListener("blur", () => {
  setBorders("rgb(37, 37, 37)");
});
