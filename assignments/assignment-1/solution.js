/*String.prototype
1. reverse(): This method returns a reversed version of the string.
Example: "Hello".reverse() should return "olleH".
Example: "world".reverse() should return "dlrow". */

String.prototype.reverse = function () {
    return this.split("").reverse().join("");
};
console.log("hello".reverse());
console.log("zebra".reverse());

/* 2. removeVowels(): This method removes all vowels from the string.
Example: "Hello".removeVowels() should return "Hll".
Example: "world".removeVowels() should return "wrld". */

String.prototype.removeVowels = function () {
    let vowels = "AaEeIiOoUu";
    let result = "";

    for (let i = 0; i < this.length; i++) {
        if (!vowels.includes(this[i])) {
            result += this[i];
        }
    }
    return result;
};

console.log("Hello".removeVowels());
console.log("world".removeVowels());

/*3. countWords(): This method counts the number of words in a string.
Example: "Hello World".countWords() should return 2.
Example: "One word".countWords() should return 1.
 */

String.prototype.countWords = function () {
    return this.split(" ").length;
};

console.log("Hello World".countWords());
console.log("One".countWords());

/*4. wrapInTags(tag): This method wraps the string in the given HTML tag.
Example: "Hello".wrapInTags("b") should return "<b>Hello</b>".
Example: "world".wrapInTags("i") should return "<i>world</i>". */

String.prototype.wrapInTags = function (tag) {
    return `<${tag}>${this}</${tag}>`;
};

console.log("Hello".wrapInTags("b"));
console.log("world".wrapInTags("i"));

/*5. isPalindrome(): This method checks if the string is a palindrome (same forwards as backwards, ignoring case).
Example: "racecar".isPalindrome() should return true.
Example: "Hello".isPalindrome() should return false. */

String.prototype.isPalindrome = function () {
    const lowercaseString = this.toLowerCase();
    const reversedString = lowercaseString.split("").reverse().join("");
    return lowercaseString === reversedString;
};

console.log("racecar".isPalindrome());
console.log("Hello".isPalindrome());

/*  Number.prototype
1. isPrime(): This method checks if the number is a prime number.
Example: (7).isPrime() should return true.
Example: (4).isPrime() should return false. */

Number.prototype.isPrime = function () {
    if (this <= 1) return false;

    for (let i = 2; i < this; i++) {
        if (this % i === 0) {
            return false;
        }
    }

    return true;
};

console.log((5).isPrime());
console.log((10).isPrime());

/* 2. toFactorial(): This method returns the factorial of the number.
Example: (5).toFactorial() should return 120.
Example: (3).toFactorial() should return 6. */

Number.prototype.toFactorial = function () {
    let factorial = 1;
    for (let i = 2; i <= this; i++) {
        factorial *= i;
    }

    return factorial;
};

console.log((5).toFactorial());
console.log((3).toFactorial());

/* 3. findFactors(): This method returns an array of all factors of the number.
Example: (10).findFactors() should return [1, 2, 5, 10].
Example: (16).findFactors() should return [1, 2, 4, 8, 16].
 */

Number.prototype.findFactors = function () {
    const factors = [];
    for (let i = 1; i <= this; i++) {
        if (this % i === 0) {
            factors.push(i);
        }
    }
    return factors;
};

console.log((10).findFactors()); // Should return [1, 2, 5, 10]
console.log((16).findFactors()); // Should return [1, 2, 4, 8, 16]

/* 4. isPerfectSquare(): This method checks if the number is a perfect square.
Example: (9).isPerfectSquare() should return true.
Example: (8).isPerfectSquare() should return false. */

Number.prototype.isPerfectSquare = function () {
    const sqrtValue = Math.sqrt(this);
    return Number.isInteger(sqrtValue);
};

console.log((9).isPerfectSquare());
console.log((8).isPerfectSquare());

/* 5. isOdd(): This method checks if a number is odd.
Example: (5).isOdd() should return true.
Example: (6).isOdd() should return false. */

Number.prototype.isOdd = function () {
    return this % 2 !== 0;
};

console.log((5).isOdd());
console.log((6).isOdd());
