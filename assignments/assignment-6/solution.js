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

/*Part 2 */

// 2. Palindrome Strings
// Write a function named filterPalindromes that takes an array of strings and returns a new array containing only those strings that are palindromes.

function isPalindrome(word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
}

function filterPalindromes(words) {
    let palindromeWords = [];

    for (let i = 0; i < words.length; i++) {
        if (isPalindrome(words[i])) {
            palindromeWords.push(words[i]);
        }
    }

    return palindromeWords;
}

// const inputWords = ["racecar", "madam", "apple"];
// const palindromeResult = filterPalindromes(inputWords);
// console.log(palindromeResult); // Output: ["racecar", "madam"]

// 2. Lowercase Strings Only
// Write a function named filterLowercase that takes an array of mixed lowercase and uppercase lettered words. Return a new array that contains only strings that are entirely lowercase.

function filterLowercase(words) {
    let lowercaseWords = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i].toLowerCase()) {
            lowercaseWords.push(words[i]);
        }
    }

    return lowercaseWords;
}

// const inputWords = ["apple", "Banana", "grape", "Carrot"];
// const lowercaseResult = filterLowercase(inputWords);
// console.log(lowercaseResult); // Output: ["apple", "grape"]

// 3. Consonant Lettered Words
// Write a function named filterConsonantWords that takes an array of strings and returns a new array of strings that have only consonant letters.

function hasOnlyConsonants(word) {
    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            return false;
        }
    }

    return true;
}

function filterConsonantWords(words) {
    let consonantWords = [];

    for (let i = 0; i < words.length; i++) {
        if (hasOnlyConsonants(words[i])) {
            consonantWords.push(words[i]);
        }
    }

    return consonantWords;
}

// const inputWords = ["rhythm", "sky", "fly", "apple"];
// const consonantResult = filterConsonantWords(inputWords);
// console.log(consonantResult); // Output: ["cat", "dog", "bird"]

// 4. Words with Only One Vowel
// Write a function named filterOneVowelWords that takes an array of strings and returns a new array that contains only words with exactly one vowel.

function countVowels(word) {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            vowelCount++; // Counting the vowels in the word
        }
    }

    return vowelCount;
}

function filterOneVowelWords(words) {
    let oneVowelWords = [];

    for (let i = 0; i < words.length; i++) {
        if (countVowels(words[i]) === 1) {
            oneVowelWords.push(words[i]); // Adding words with exactly one vowel to the new array
        }
    }

    return oneVowelWords;
}

// const inputWords = ["cat", "dog", "apple"];
// const oneVowelResult = filterOneVowelWords(inputWords);
// console.log(oneVowelResult); // Output: ["cat", "dog"]

// Using Callbacks //

function filterWords(words, cb) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (cb(word)) {
            result.push(word);
        }
    }
    return result;
}

function isPalindrome(word) {
    return (
        word.toLowerCase() === word.toLowerCase().split("").reverse().join("")
    );
}

function isLowercase(word) {
    for (let i = 0; i < word.length; i++) {
        if (word.includes(word[i].toUpperCase())) {
            return false;
        }
    }
    return true;
}

function isConsonantWord(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            return false;
        }
    }
    return true;
}

function isOneVowelWord(word) {
    const vowels = "aeiou";
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            vowelCount++;
        }
    }
    return vowelCount === 1;
}

console.log(filterWords(["racecar", "madam", "apple"], isPalindrome));
console.log(filterWords(["apple", "Banana", "cherry"], isLowercase));
console.log(
    filterWords(["rhythm", "sky", "fly", "apple", "HELLO"], isConsonantWord)
);
console.log(filterWords(["cat", "dog", "Apple", "All"], isOneVowelWord));
