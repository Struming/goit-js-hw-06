const valueEl = document.querySelector('#value');
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');


const counterValue = {
    value: 0,
    decrement() {
        this.value -=1;
    },
    increment () {
        this.value +=1;
    },
};

decBtn.addEventListener('click', () => {
    counterValue.decrement();

    valueEl.textContent = counterValue.value;
});

incBtn.addEventListener('click', () => {
    counterValue.increment();

    valueEl.textContent = counterValue.value;
});
