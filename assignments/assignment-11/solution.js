/* Problem 1
Create a function that checks if all objects have a specific property

Input: [{ name: 'Alice' }, { name: 'Bob' }], property = 'name'

Output: true*/

function checkObjects(objects, property) {
    return objects.every((object) => object.hasOwnProperty(property));
}

const example1 = [{ name: "Alice" }, { name: "Bob" }];
console.log(checkObjects(example1, "name"));

/* Problem 2
Create a function that checks if all elements in a matrix are positive

Input: [[1, 2], [3, 4]]

Output: true*/

function checkMatrix(matrix) {
    return matrix.every((row) => row.every((element) => element > 0));
}

const example2 = [
    [1, 2],
    [3, 4]
];

console.log(checkMatrix(example2));

/* Problem 3
Create a function that checks if all sub-arrays have a specific length

// Input: [[1, 2], [3, 4]], length = 2

// Output: true*/

function checkSubarray(arr, length) {
    return arr.every((subarray) => subarray.length === length);
}

const inputArray = [
    [1, 2],
    [3, 4]
];
const subarrayLength = 2;

const result = checkSubarray(inputArray, subarrayLength);
console.log(result); // This will print 'true' for the provided example.

/* */
/* */
