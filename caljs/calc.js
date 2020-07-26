const calculator = ({
    displayValue: 0,
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
    const {target} = event;

    //check if element clicked is a button
    //if not, exit  from function

    if(!target.matches('button')) {
        return;
    }

    if(target.classList.contains('operator')) {
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('equalToo')) {
        console.log('equalToo', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
    }

    if (target.classList.contains('allClear')) {
        console.log('allClear', target.value);
        return;
    }
    if (target.classList.contains('backSpace')) {
        console.log('backSpace', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();

})


function inputDigit(digit) {
    const {displayValue} = calculator;
    //check if displayValue equals zero then replace it with input
    calculator.displayValue = displayValue === 0 ? digit : displayValue + digit;
}

