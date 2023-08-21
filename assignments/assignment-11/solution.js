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

/* Problem 4
Create a function that checks if all dates in an array of objects are before a specific date

Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-03'

Output: true*/

function filterDate(dates, specificDate) {
    return dates.every((obj) => obj.date < specificDate);
}

console.log(
    filterDate([{ date: "2023-01-01" }, { date: "2023-01-02" }], "2023-01-03")
);

/* Problem 5
Create a function that checks if all products have a price greater than a specific value

Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], price = 10

Output: true */

function pricesGreater(products, minValue) {
    return products.every((product) => product.price > minValue);
}

const products = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 }
];
const minValue = 10;

console.log(pricesGreater(products, minValue));
