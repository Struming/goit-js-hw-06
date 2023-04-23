function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const button = document.querySelector('button.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', () => {
  const color = getRandomHexColor();
  colorSpan.textContent = color;
  document.body.style.backgroundColor = color;
});

colorSpan.addEventListener('click', () => {
  button.textContent = colorSpan.textContent;
});
