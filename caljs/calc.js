const calculator = ({
    displayValue: '0',
    firstOperand: null,
    operator: null,
    wiatingForSecondOperand: false,
});

function updateDisplay() {
    //select the element with the class of displayScreen in other to update the value
    const display = document.querySelector('.displayScreen');
    //
    display.value = calculator.displayValue;
}

updateDisplay();


const keys = document.querySelector('.calcKeys');

keys.addEventListener('click', (event) => {
    
})