/* Problem 1
Create a function that checks if any object in an array contains a null value

Input: [{ value: 3 }, { value: null }]

Output: true

*/

function nullValue(arr) {
    return arr.some(function (obj) {
        return obj.value === null;
    });
}

console.log(nullValue([{ value: 3 }, { value: null }]));

/* Problem 2
Create a function that checks if any element in a matrix is a specific value

Input: [[1, 2], [3, 4]], value = 4

Output: true */

function matrixValue(matrix, value) {
    return matrix.some(function (row) {
        return row.includes(value);
    });
}

console.log(
    matrixValue(
        [
            [1, 2],
            [3, 4]
        ],
        (value = 4)
    )
);

/* Problem 3
Create a function that checks if any object in an array has a property with a specific length

Input: [{ word: 'cat' }, { word: 'elephant' }], length = 8

Output: true */

function propertyLength(arr, property, length) {
    return arr.some(function (obj) {
        return obj[property].length === length;
    });
}

console.log(
    propertyLength(
        [{ word: "cat" }, { word: "elephant" }],
        "word",
        (length = 8)
    )
);

/* Problem 4
Create a function that checks if any sub-array contains a specific number

Input: [[1, 2], [3, 4, 5]], number = 5

Output: true*/

function specificNumber(arr, number) {
    return arr.some(function (subArray) {
        return subArray.includes(number);
    });
}

console.log(
    specificNumber(
        [
            [1, 2],
            [3, 4, 5]
        ],
        (number = 5)
    )
);

/* 
Problem 5
Create a function that checks if any date in an array of objects is after a specific date

Input: [{ date: '2023-01-01' }, { date: '2023-01-04' }], date = '2023-01-02'

Output: true */

function specificDates(arr, specificDate) {
    return arr.some(function (obj) {
        return new Date(obj.date) > new Date(specificDate);
    });
}

console.log(
    specificDates(
        [{ date: "2023-01-01" }, { date: "2023-01-04" }],
        (date = "2023-01-02")
    )
);
