const calculator = ({
    displayValue: 0,
    firstOperand: null,
    operator: null,
    wiatingForSecondOperand: false,
});

;


const keys = document.querySelector('.calcKeys');

keys.addEventListener('click', (event) => {
    const {target} = event;

    //check if element clicked is a button
    //if not, exit  from function

    if(!target.matches('button')) {
        return;
    }

    if(target.classList.contains('operator')) {
        handleOPerator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('equalToo')) {
        console.log('equalToo', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('allClear')) {
        resetCalculator();
        updateDisplay();
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
    const { displayValue, waitingForSecondOperand } = calculator;
    
    if (waitingForSecondOperand == "true") {
        calculator.displayValue = digit;
        calculator.wiatingForSecondOperand = false;
    }
    else {
         calculator.displayValue = displayValue === 0 ? digit : displayValue + digit;
    }
    console.log(calculator);
    
}

function inputDecimal(dot) {


    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue +=  dot;
    }
}

function resetCalculator() {
    calculator.displayValue = 0;
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}

function handleOPerator(nextOperator) {
    const { firstOperand, displayValue, operator } =  calculator;

    const inputValue = parseFloat(displayValue);

    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
        
    }

    calculator.wiatingForSecondOperand = true;


    calculator.operator = nextOperator;
    console.log(calculator);
}

function updateDisplay() {
    //select the element with the class of displayScreen in other to update the value
    const display = document.querySelector('.displayScreen');
    //
    display.value = calculator.displayValue;
}

updateDisplay()