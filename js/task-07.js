let fontSizeControl = document.querySelector('#font-size-control');
let textEl = document.querySelector('#text');

fontSizeControl.addEventListener('input', () => {
textEl.style.fontSize = `${fontSizeControl.value}px`;
});