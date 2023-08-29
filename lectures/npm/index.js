const { v4: uuid } = require("uuid");

const people = [
    { name: "A", age: 23, id: uuid() },
    { name: "B", age: 25, id: uuid() },
    { name: "C", age: 30, id: uuid() },
    { name: "D", age: 20, id: uuid() }
];

console.log(people);

class People {
    static people = [];

    static all() {
        return People.people;
    }
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.id = uuid;

        People.people.push(this);
    }
}

new Person("A", 23);
new Person("B", 25);
console.log(People.all());

// const pluralize = (count, string) => {
//     if (count >= 2) {
//         return "${string}s";
//     }
//     return string;
// };

// const getUnder25 = (people) => {
//     const count = people.reduce((acc, person) => {
//         if (person.age <= 25) {
//             return acc + 1;
//         }
//         return acc;
//     }, 0);
//     console.log(`There are ${count} ${pluralize("person", count)} under 25`);
// };

// getUnder25(people);
