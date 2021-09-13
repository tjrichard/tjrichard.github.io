const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');
var firstValue = '0';
var secondValue = '';
var currentOperator = '';
var previousKeyType = '';

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        if (!action) {
            // 현재 표시가 0이거나 이전에 operator를 누른 다음 입력하는 number일 경우
            if (displayedNum === '0' || previousKeyType === 'operator') {
                Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                const clearButton = calculator.querySelector('[data-action=clear]')
                clearButton.textContent = 'CE'
                display.textContent = keyContent;
                previousKeyType = 'number';
            } // = 누른 다음 입력되는 number일 경우
            else if (previousKeyType === 'calculate') {
                firstValue = display.textContent;
                display.textContent = keyContent;
                previousKeyType = 'number';
                currentOperator = '';
            } // 이외 모든 경우 
            else {
                Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                display.textContent = displayedNum + keyContent;
                previousKeyType = 'number';
            }
        } else {
            if (action === 'decimal') {
                if (displayedNum.includes('.')) {} else {
                    display.textContent = displayedNum + '.'
                    if (previousKeyType !== 'number') {
                        display.textContent = '0.'
                        previousKeyType = 'decimal'
                    }
                }
            } else if (action === 'turnover') {
                if (parseFloat(displayedNum) < 0) {
                    display.textContent = displayedNum.split('-')[1];
                    firstValue = display.textContent;
                } else {
                    display.textContent = '-' + displayedNum;
                    firstValue = display.textContent;
                }
            } else if (action === 'percent') {
                display.textContent = parseFloat(displayedNum) / 100;
            } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
                // (로직 추가 필요) num -> operator -> num -> calculate -> operator 시 계산되지 않아야 함 https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/#:~:text=Fifth%2C%20if%20Tim%20hits%20an%20operator%20key%20right%20after%20the%20equals%20key%2C%20the%20calculator%20should%20not%20calculate.
                if (firstValue && currentOperator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                    key.classList.add('is-pressed');
                    secondValue = displayedNum;
                    display.textContent = calculate(firstValue, currentOperator, secondValue);
                    firstValue = display.textContent;
                    currentOperator = action;
                    previousKeyType = 'operator';
                } else {
                    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                    key.classList.add('is-pressed');
                    firstValue = displayedNum;
                    currentOperator = action;
                    previousKeyType = 'operator';
                }
            } else if (action === 'calculate') {
                if (!currentOperator) {} else {
                    if (previousKeyType === 'number') {
                        secondValue = displayedNum;
                        previousKeyType = 'calculate';
                        display.textContent = calculate(firstValue, currentOperator, secondValue);
                    } else {
                        if (!secondValue) {
                            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                            firstValue = display.textContent;
                            secondValue = display.textContent;
                            display.textContent = calculate(firstValue, currentOperator, secondValue);
                        } else {
                            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                            firstValue = display.textContent;
                            display.textContent = calculate(firstValue, currentOperator, secondValue);
                        }
                    }
                }
            } else if (action === 'clear') {
                Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                firstValue = '0';
                secondValue = '';
                currentOperator = '';
                display.textContent = '0';
            }
        }
    }
});

function calculate(n1, operator, n2) {
    let result = '';
    if (operator === 'add') {
        result = (parseFloat(n1) + parseFloat(n2)).toFixed(5);
    } else if (operator === 'subtract') {
        result = (parseFloat(n1) - parseFloat(n2)).toFixed(5);
    } else if (operator === 'multiply') {
        result = (parseFloat(n1) * parseFloat(n2)).toFixed(5);
    } else if (operator === 'divide') {
        result = (parseFloat(n1) / parseFloat(n2)).toFixed(5);
    } else {
        result = 'Try again';
    }
    return Number(result);
}