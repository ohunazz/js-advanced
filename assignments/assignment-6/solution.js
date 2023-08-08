// 1. Write a function named filterOddNumbers that takes an array of numbers and returns a new array that has only odd numbers.

function filterOddNumbers(numbers) {
    let oddNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }

    return oddNumbers;
}
// const inputNumbers = [1, 2, 3, 4, 5];
// const oddResult = filterOddNumbers(inputNumbers);
// console.log(oddResult); // Output: [1, 3, 5]

// 2.Numbers Divisible by Three
// Write a function named filterDivisibleByThree that takes an array of numbers and returns a new array that contains numbers that are divisible by 3.

function filterDivisibleByThree(numbers) {
    let divisibleByThreeNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            divisibleByThreeNumbers.push(numbers[i]);
        }
    }

    return divisibleByThreeNumbers;
}

// 3. Prime Numbers Filter
// Write a function named filterPrimeNumbers that takes an array of numbers and returns a new array that contains only prime numbers.

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function filterPrimeNumbers(numbers) {
    let primeNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            primeNumbers.push(numbers[i]);
        }
    }

    return primeNumbers;
}

// const inputNumbers = [2, 3, 4, 5, 6];
// const primeResult = filterPrimeNumbers(inputNumbers);
// console.log(primeResult); // Output: [2, 3, 5]

// 4.Perfect Squares Filter
// Write a function named filterPerfectSquares that takes an array of numbers and returns a new array that has perfect squares.
function isPerfectSquare(number) {
    const squareRoot = Math.sqrt(number);
    return squareRoot === Math.floor(squareRoot);
}

function filterPerfectSquares(numbers) {
    let perfectSquares = [];

    for (let i = 0; i < numbers.length; i++) {
        if (isPerfectSquare(numbers[i])) {
            perfectSquares.push(numbers[i]);
        }
    }

    return perfectSquares;
}

// const inputNumbers = [1, 4, 5, 9, 16];
// const perfectSquaresResult = filterPerfectSquares(inputNumbers);
// console.log(perfectSquaresResult); // Output: [1, 4, 9, 16]

// Using Callback

function filterNumbers(numbers, cb) {
    let filteredNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (cb(numbers[i])) {
            filteredNumbers.push(numbers[i]);
        }
    }

    return filteredNumbers;
}

function isOdd(number) {
    return number % 2 !== 0;
}

function isDivisibleByThree(number) {
    return number % 3 === 0;
}

function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(filterNumbers([1, 2, 3, 4, 5, 6, 7], isOdd));
console.log(filterNumbers([1, 2, 3, 4, 5, 6, 0], isDivisibleByThree));
console.log(filterNumbers([2, 3, 4, 5, 6], isPrime));
console.log(filterNumbers([1, 4, 5, 9, 16], isPerfectSquare));
