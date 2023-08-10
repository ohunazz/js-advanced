// Part -1
// 1. Odd Numbers Filter
// Create a function to filter out odd numbers from an array:

function filterOddNumbers(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}
// 2. Numbers Divisible by Three
// Create a function to filter numbers divisible by three:

function filterDivisibleByThree(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}
// 3. Prime Numbers Filter
// Create a function to filter out prime numbers:

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
}

function filterPrimeNumbers(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    return result;
}
// 4. Perfect Squares Filter
// Create a function to filter out perfect square numbers:

function filterPerfectSquares(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (Math.sqrt(numbers[i]) % 1 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}
// Part-1 | Refactor
// By using a callback, we can create a more versatile and generic filter function that can be used to replace all four functions in Part-1. This approach not only makes our code DRY but also enhances reusability.

// Here is the generic filter function:

function filterNumbers(numbers, callback) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (callback(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    return result;
}
// We can then define our specific conditions as separate functions and pass them as callbacks to our filterNumbers function.

// 1. Odd Numbers Filter
function isOdd(number) {
    return number % 2 !== 0;
}

const oddNumbers = filterNumbers([1, 2, 3, 4, 5], isOdd);
// 2. Numbers Divisible by Three
function isDivisibleByThree(number) {
    return number % 3 === 0;
}

const divisibleByThreeNumbers = filterNumbers(
    [3, 6, 7, 9, 12],
    isDivisibleByThree
);
// 3. Prime Numbers Filter
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return number !== 1;
}
const primeNumbers = filterNumbers([2, 3, 4, 5, 6], isPrime);
// 4. Perfect Squares Filter
function isPerfectSquare(number) {
    return Math.sqrt(number) % 1 === 0;
}

const perfectSquares = filterNumbers([1, 4, 5, 9, 16], isPerfectSquare);
