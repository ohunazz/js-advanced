// Initial functions

function addTwoNumbers(num1, num2) {
    const result = num1 + num2;
    return `The result of adding is ${result}.`;
}

function subtractTwoNumbers(num1, num2) {
    const result = num2 - num1;
    return `The result of subtracting is ${result}.`;
}

function multiplyTwoNumbers(num1, num2) {
    const result = num1 * num2;
    return `The result of multiplying is ${result}.`;
}

function divideTwoNumbers(num1, num2) {
    const result = num1 / num2;
    return `The result of dividing is ${result}.`;
}

// Refactored functions using callbacks

function calculate(num1, num2, cb) {
    const result = cb(num1, num2);
    return `The result is ${result}.`;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

console.log(calculate(5, 3, add)); // 8.
console.log(calculate(6, 4, subtract)); // 2.
console.log(calculate(6, 2, multiply)); // 12.
console.log(calculate(10, 2, divide)); // 5.
