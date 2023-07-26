const value = document.getElementById('value');
const mais = document.getElementById('plus');
const menos = document.getElementById('minus');
const reset = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count;
};

let count = 0;
let intervalid = 0;

mais.addEventListener('mousedown', () => {
    intervalid = setInterval(() => {
        count += 1;
        updateValue();
    }, 100);
});

menos.addEventListener('mousedown', () => {
    intervalid = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100);
});

reset.addEventListener('click', () => {
    count = 0;
    updateValue();
});

document.addEventListener('mouseup', () => clearInterval(intervalid));