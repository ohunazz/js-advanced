/* Problem 1:
Create a function that filters objects with a specific property value

Input: [{ type: 'fruit', name: 'apple' }, { type: 'vegetable', name: 'carrot' }], type = 'fruit'

Output: [{ type: 'fruit', name: 'apple' }]*/

const filterObjects = (obj, property, value) => {
    return obj.filter((object) => object[property] === value);
};

const items = [
    { type: "fruit", name: "apple" },
    { type: "vegetable", name: "carrot" }
];

console.log(filterObjects(items, "type", "vegetable"));

/* Problem 2
Create a function that filters all sub-arrays with a specific length

Input: [[1, 2], [3, 4, 5]], length = 2

Output: [[1, 2]]*/

function filterSubArrays(arrays, number) {
    return arrays.filter((array) => array.length === number);
}

const boxes = [
    [1, 2],
    [3, 4, 5]
];
console.log(filterSubArrays(boxes, 2));

/* 
Problem 3
Create a function that filters products with a price within a specific range

Input: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }], min = 15, max = 20

Output: [{ name: 'Book', price: 20 }, { name: 'Pen', price: 15 }*/

function filterProducts(products, min, max) {
    return products.filter(
        (product) => product.price >= min && product.price <= max
    );
}

const storeProducts = [
    { name: "Book", price: 20 },
    { name: "Pen", price: 15 }
];

console.log(filterProducts(storeProducts, 15, 20));

/* Problem 4
Create a function that filters words that start with a specific letter from an array of objects

Input: [{ word: 'cat' }, { word: 'dog' }], letter = 'c'

Output: [{ word: 'cat' }]*/

function filterWords(words, letter) {
    return words.filter(function (word) {
        return word.word[0] === letter;
    });
}

const book = [{ word: "cat" }, { word: "dog" }];
console.log(filterWords(book, "c"));

/* 
Problem 5
Create a function that filters dates before a specific date from an array of objects

Input: [{ date: '2023-01-01' }, { date: '2023-01-02' }], date = '2023-01-02'

Output: [{ date: '2023-01-01' }]*/

function filterDates(arr, specificDate) {
    return arr.filter((obj) => obj.date < specificDate);
}

const specialDate = [{ date: "2023-01-01" }, { date: "2023-01-02" }];
console.log(filterDates(specialDate, "2023-01-02"));
