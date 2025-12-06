let numbers = [];
let operators = [];
let shouldResetScreen = false;


const display = document.querySelector('output');
const keys = document.querySelectorAll('.key');
const operatorKeys = document.querySelectorAll('.key-operator');
const operatorFunction = document.querySelectorAll('.key-function');
let displayValue = '0'

inputNumber();
calculate();
functionOperators();

function inputNumber() {
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const keyContent = key.innerText;
            if (!key.classList.contains('key-operator') && !key.classList.contains('key-function')) {
                if (shouldResetScreen) {
                    displayValue = '0';
                    shouldResetScreen = false;
                }
                if (keyContent === '.' && displayValue.includes('.')) {
                    return;
                }

                if (displayValue === '0') {
                    if (keyContent === '.') {
                        displayValue = '0.';
                    } else {
                        displayValue = keyContent;
                    }
                } else {
                    displayValue = displayValue + keyContent;
                }

                display.innerText = displayValue;
            }
        })
    })
}

function calculate() {
    operatorKeys.forEach(key => {
        key.addEventListener('click', () => {
            numbers.push(displayValue);
            const keyText = key.innerText;
            if (keyText === '=') {
                calculationen();
                return;
            } else if (keyText === '÷') {
                operators.push('/')
            } else if (keyText === '×') {
                operators.push('*');
            } else {
                operators.push(keyText);
            }
            displayValue = '0'
        })
    })
}

function calculationen() {
    let result = numbers[0];
    operators.forEach((currentOperator, index) => {
        const nextNumber = numbers[index + 1];
        result = operate(currentOperator, result, nextNumber)
    })
    console.log(result)
    display.innerText = result;
    displayValue = result.toString();
    numbers = [];
    operators = [];
    shouldResetScreen = true;

}

// Functionen de kalder på udregnings metoden
function operate(Operatoren, a, b) {
    a = Number(a)
    b = Number(b)
    switch (Operatoren) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            if (b === 0) return "NaN";
            return divide(a, b);
    }
}

function functionOperators() {
    operatorFunction.forEach(key => {
        key.addEventListener('click', () => {
            const keyText = key.innerText;
            if (keyText === 'AC') {
                deleteAll();
                return;
            } else if (keyText === '+/-') {
            } else if (keyText === '%') {
            } else {
                console.log("lol")
            }
        })
    })
}

function deleteAll() {
    numbers = [];
    operators = [];
    displayValue = '0'
    display.innerText = '0'
    shouldResetScreen = false;
}


// Add
function add(a, b) {
    return a + b
};

// Subtract
function subtract(a, b) {
    return a - b
};

// Multiply
function multiply(a, b) {
    return a * b
};

// Divide
function divide(a, b) {
    return a / b
};