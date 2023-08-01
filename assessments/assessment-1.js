/*Problem 1: Magic Cipher

Write a function magicCipher(sentence, cipher) that takes in a string sentence and an object cipher. Return a string where every character is replaced with its corresponding value in the cipher. If the character doesn't exist in the cipher, use the character itself.
 */

function magicCipher(sentence, cipher) {
    let letters = "";
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        if (cipher[char]) {
            letters += cipher[char];
        } else {
            letters += char;
        }
    }
    return letters;
}

console.log(magicCipher("add me on facebook", { a: "c", d: "q" })); // Output: "cqq me on fccebook"
console.log(magicCipher("where are you?", { v: "l", "?": "!" })); // Output: "where are you!"
console.log(magicCipher("twmce", { m: "n", t: "d", w: "a" })); // Output: "dance"

/*Problem 2: Hipsterfy
Write a function hipsterfy(sentence) that takes a string containing several words as input. Remove the last vowel from each word. 'y' is not a vowel.
 */

function removeLastVowel(word) {
    let vowel = "aeiou";
    for (let i = word.length - 1; i >= 0; i--) {
        if (vowel.includes(word[i])) {
            return word.slice(0, i) + word.slice(i + 1);
        }
    }
    return word;
}

function hipsterfy(sentence) {
    let words = sentence.split(" ");
    for (let j = 0; j < words.length; j++) {
        let word = words[j];
        words[j] = removeLastVowel(word);
    }
    return words.join(" ");
}

console.log(hipsterfy("proper")); // output "propr"
console.log(hipsterfy("proper tonic panther")); // output "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // output "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // output "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // output "turtl cheeseburgr fris"

/* Problem 3: Count Adjacent Sums
Write the function countAdjacentSums(arr, n) which takes an array and a number n. It should count the number of times that two adjacent numbers in an array add up to n. */

function countAdjacentSums(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] === n) {
            count++;
        }
    }
    return count;
}

console.log(countAdjacentSums([1, 5, 1], 6)); // output 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); // output 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); // output 3

/* Problem 4: Longest Letter Streak
Write a function longestLetterStreak(str, searchLetters) that takes in two arguments:

str: A string of uppercase characters.
searchLetters: An array of uppercase single-character strings (e.g., ["A", "F", "K"])

The function should return the length of the longest streak of letters (consecutive letters) in the str that are in the searchLetters.*/

function longestLetterStreak(str, searchLetters) {
    let longestStreak = 0;
    let currentStreak = 0;

    for (let i = 0; i < str.length; i++) {
        if (searchLetters.includes(str[i])) {
            currentStreak++;
            if (currentStreak > longestStreak) {
                longestStreak = currentStreak;
            }
        } else {
            currentStreak = 0;
        }
    }

    return longestStreak;
}

console.log(longestLetterStreak("ACCA", ["C"])); // output 2
console.log(longestLetterStreak("YACCADCA", ["C", "A"])); // output 4
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"])); // output 3
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"])); // output 5

/* Problem 5: In Pig Latin
Write a function inPigLatin(sentence) that translates a sentence into its pig Latin equivalent. The rules for the translation are as follows:

For words that begin with consonants, all letters before the initial vowel are placed at the end of the word sequence. Then, "ay" is added to the end.

a: "pig" → "igpay"
b: "banana" → "ananabay"
c: "trash" → "ashtray

For words that begin with vowels, just add "yay" to the end.

 d: "eat" → "eatyay"
 e: "omelet" → "omeletyay"
 f: "are" → "areyay"

Words that were originally caplitalized must remained caplitalized
Assume no punctuation
'y' is not a vowel */

function isVowel(char) {
    return "aeiouAEIOU".includes(char);
}

function inPigLatin(sentence) {
    const words = sentence.split(" ");
    let pigLatinSentence = "";

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const firstLetter = word[0];

        if (isVowel(firstLetter)) {
            pigLatinSentence += word + "yay";
        } else {
            let consonantCluster = "";
            let j = 0;

            while (j < word.length && !isVowel(word[j])) {
                consonantCluster += word[j];
                j++;
            }

            pigLatinSentence += word.slice(j) + consonantCluster + "ay";
        }

        if (i < words.length - 1) {
            pigLatinSentence += " ";
        }
    }

    return pigLatinSentence;
}

console.log(inPigLatin("Shmanthony is the best teacher")); // Output: "Anthonyshmay isyay ethay estbay eachertay"
console.log(inPigLatin("let us Dance")); // Output: "etlay usyay Anceday"
console.log(inPigLatin("this is the time of my life")); // Output: "isthay isyay ethay imetay ofyay myay ifelay"
