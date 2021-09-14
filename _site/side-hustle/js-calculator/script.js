/* Analytics */
  var referrer;
  var referrerHost
  var userAgent;
  var browser;

/*
받은 referrer url에서 www에서 / 까지를 host로 리턴합니다
www.가 포함된 경우와 아닌 경우를 고려해 splitUrl을 리턴합니다.
User Agent의 값에서 값을 분리해 
*/
window.onload = function () {
referrer = document.referrer;
if (referrer.split("://")[1].substring(0, 3) == "www") {
    referrerHost = referrer.split("www.")[1];
    referrerHost = referrerHost.split("/")[0];
} else {
    referrerHost = referrer.split("://")[1];
    referrerHost = referrerHost.split("/")[0];
}

userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('edge')>-1){
        browser='Microsoft Edge';
    } else if (userAgent.indexOf('whale')>-1){
        browser='Naver Whale';
    } else if (userAgent.indexOf('chrome')>-1){
        browser='Google Chrome';
    } else if (userAgent.indexOf('firefox')>-1){
        browser='Mozilla Firefox';
    } else {
        browser='Internet Explorer';
    }
}


!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="QmVYyLedpWWw5IGRhwvxW0DhG1Py1BCG";analytics.SNIPPET_VERSION="4.13.2";
    analytics.load("QmVYyLedpWWw5IGRhwvxW0DhG1Py1BCG");
    analytics.page({
        'Referrer Host': referrerHost
    });
    analytics.identify({});
}}();

function performCalculate() {
    analytics.track('Calculate', {
        title: 'JS Calculator'
    })
};

function performCopy() {
    analytics.track('Copy', {
        title: 'JS Calculator'
    })
}

/* Calculator */
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
        // number를 누르는 경우
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
                firstValue = display.textContent; // 기존 결과를 firstValue에 저장
                display.textContent = keyContent; // 입력된 key를 display
                previousKeyType = 'number';
                currentOperator = '';
            } // 이외 모든 number 입력할 경우 
            else {
                Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                display.textContent = displayedNum + keyContent;
                previousKeyType = 'number';
            }
        } else {
            // 소수점을 누르는 경우
            if (action === 'decimal') {
                // secondValue 입력해야 할 경우. operator나 calculate 다음 바로 소수점을 누르는 경우 '0.' 으로 변경
                if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                    display.textContent = '0.'
                    previousKeyType = 'decimal';
                }
                // displayedNum 수정하는 경우. 이미 소수점이 있는 경우 작동하지 않음
                else if (displayedNum.includes('.')) {}
                //  displayedNum 수정하는 경우. 이외 경우 displayedNum에 소수점 추가
                else {
                    display.textContent = displayedNum + '.'
                    previousKeyType = 'decimal';
                    const clearButton = calculator.querySelector('[data-action=clear]')
                    clearButton.textContent = 'CE' // 소수점을 누르는 경우에도 AC를 CE로 변경
                }
            }
            // +/- 누르는 경우
            else if (action === 'turnover') {
                // 현재 값이 0이면 작동하지 않음
                if (displayedNum == 0) {}
                // displayedNum을 음수일 경우 양수로 변환, 양수일 경우 음수로 변환
                else if (parseFloat(displayedNum) < 0) {
                    display.textContent = displayedNum.split('-')[1];
                } else {
                    display.textContent = '-' + displayedNum;
                }
            }
            // % 누르는 경우 현재 displayedNum을 100으로 나눠줌
            else if (action === 'percent') {
                display.textContent = parseFloat(displayedNum) / 100;
            }
            // 이외 Operator 누르는 경우
            else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
                // first, operator, second, operator 순으로 누르는 경우 계산 되도록 함
                if (firstValue && currentOperator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                    key.classList.add('is-pressed');
                    secondValue = display.textContent;
                    display.textContent = calculate(firstValue, currentOperator, secondValue);
                    performCalculate();
                    firstValue = display.textContent;
                    currentOperator = action;
                    previousKeyType = 'operator';
                }
                // 계산 준비를 위해 firstValue를 저장함
                else {
                    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                    key.classList.add('is-pressed');
                    firstValue = displayedNum;
                    currentOperator = action;
                    previousKeyType = 'operator';
                }
            }
            // = 누르는 경우
            else if (action === 'calculate') {
                // operator가 없는 경우 작동하지 않음
                if (!currentOperator) {} else {
                    // 직전 key가 number인 경우 secondValue를 displayedNum을 사용하여 계산
                    if (previousKeyType === 'number') {
                        secondValue = display.textContent;
                        display.textContent = calculate(firstValue, currentOperator, secondValue);
                        previousKeyType = 'calculate';
                        performCalculate();
                    }
                    // 직전 키가 operator인 경우
                    else {
                        // first, operator 누른 후 바로 계산하는 경우 secondValue를 displayedNum을 사용하여 계산
                        if (!secondValue) {
                            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                            firstValue = display.textContent;
                            secondValue = display.textContent;
                            display.textContent = calculate(firstValue, currentOperator, secondValue);
                            performCalculate();
                        }
                        // 
                        else {
                            Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                            firstValue = display.textContent;
                            display.textContent = calculate(firstValue, currentOperator, secondValue);
                            performCalculate();
                        }
                    }
                }
            } else if (action === 'clear') {
                // 현재 key textContent가 'CE' 인 경우 현재 displayedNum 만 0으로 치환
                if (keyContent === 'CE') {
                    // Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                    display.textContent = '0';
                    key.textContent = 'AC'
                    // currentOperator = '';
                    previousKeyType = 'clear'
                    if (!secondValue) {
                        firstValue = '0';
                    } else {}
                } // 현재 key textContent가 'AC' 인 경우 displayedNum, first, second, operator 모두 초기화
                else {
                    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-pressed'));
                    firstValue = '0';
                    secondValue = '';
                    currentOperator = '';
                    display.textContent = '0';
                    previousKeyType = 'clear'
                }
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

function copyResult() {
    var range = document.createRange();
    range.selectNodeContents(display); // selectNode는 div의 line-break 까지 포함함
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    console.log(range);
    document.execCommand('copy'); // copy text
    window.getSelection().removeAllRanges(); // to deselect
    snackbarCopyComplete();
};

function snackbarCopyComplete() {
    var snackbar = document.getElementById('snackbar');
    snackbar.className = 'show';
    setTimeout(function(){snackbar.className = snackbar.className.replace('show', '')}, 1800);
    performCopy();
}