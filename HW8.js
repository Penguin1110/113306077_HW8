function calculate() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operator').value;
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = '輸入數字啦!!';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 === 0) {
                resultElement.innerHTML = 'Result = Cannot divide by zero.<br>數學不好ㄛ';;
                return;
            }
            result = divide(num1, num2);
            break;
        default:
            resultElement.textContent = 'Result = Invalid operator';
            return;
    }

    resultElement.textContent = `Result = ${result.toFixed(2)}`;
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}
