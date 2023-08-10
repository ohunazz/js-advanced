// Part-2
// 1. Palindrome Strings
// Create a function to filter palindromes:

function filterPalindromes(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === strings[i].split("").reverse().join("")) {
            result.push(strings[i]);
        }
    }
    return result;
}
// 2. Lowercase Strings Only
// Create a function to filter strings that are entirely in lowercase:

function filterLowercase(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === strings[i].toLowerCase()) {
            result.push(strings[i]);
        }
    }
    return result;
}
// 3. Consonant Lettered Words
// Create a function to filter strings that consist only of consonant letters:

function isOnlyConsonant(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (vowels.includes(char)) {
            return false;
        }
    }
    return true;
}

function filterConsonantWords(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (isOnlyConsonantWord(strings[i])) {
            result.push(strings[i]);
        }
    }
    return result;
}
// 4. Words with Only One Vowel
// Create a function to filter words with exactly one vowel:

//4
function isOneVowelWord(word) {
    const vowels = "aeiou";
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            counter++;
            if (counter > 1) {
                return false;
            }
        }
    }
    return true;
}

function filterOneVowelWords(strings) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (isOneVowelWord(strings[i])) {
            result.push(strings[i]);
        }
    }
    return result;
}
// Refactoring Opportunities
// After completing these problems, you might notice common patterns and logic, such as looping through an array and applying specific conditions. Refactoring can be done by creating a generic filter function that accepts a callback. Such refactoring can enhance code reusability and readability by encapsulating the common logic while allowing for different conditions to be applied.

// Part-2 | Refactor
// Below are the generic functions, which leverage the specific callback functions to provide a reusable and maintainable solution. We can create a single generic function to filter the strings based on the given condition. The condition is defined within each of the callback functions, and the generic function applies this condition to filter the elements from the given array.

// Generic Function
function filterStrings(strings, callback) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (callback(strings[i])) {
            result.push(strings[i]);
        }
    }
    return result;
}
// 1. Palindrome Strings
function isPalindrome(word) {
    return word === word.split("").reverse().join("");
}

function filterPalindromes(strings) {
    return filterStrings(strings, isPalindrome);
}
// 2. Lowercase Strings Only
function isLowercase(word) {
    return word === word.toLowerCase();
}

function filterLowercase(strings) {
    return filterStrings(strings, isLowercase);
}
// 3. Consonant Lettered Words
function isOnlyConsonantWord(word) {
    const vowels = "aeiou";
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (vowels.includes(char)) {
            return false;
        }
    }
    return true;
}

function filterConsonantWords(strings) {
    return filterStrings(strings, isOnlyConsonantWord);
}
// 4. Words with Only One Vowel
function isOneVowelWord(word) {
    const vowels = "aeiou";
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            counter++;
            if (counter > 1) {
                return false;
            }
        }
    }
    return counter === 1;
}

function filterOneVowelWords(strings) {
    return filterStrings(strings, isOneVowelWord);
}
// These refactored solutions illustrate how a common pattern can be abstracted into a reusable generic function, thereby enhancing code maintainability and readability.
