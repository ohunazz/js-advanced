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
