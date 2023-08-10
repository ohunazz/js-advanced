/*1. Counter Function
Task: Write a function createCounter() that returns a function. The returned function should increment a count and return it every time it's called.


Explanation: This example demonstrates closures by utilizing a variable within the parent function that the child function has access to. Every time you call the returned function, it continues to have access to the count variable. */

function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

/*2. Temperature Converter
Task: Write a function temperatureConverter(unit) that takes a unit ('C' or 'F') and returns a function to convert temperatures to that unit.

Explanation: Here, the closure is preserving the unit variable that allows the inner function to know whether to convert to Celsius or Fahrenheit. */

function temperatureConverter(unit) {
    if (unit === "C") {
        return function (fahrenheitTemp) {
            const celsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;
            return celsiusTemp;
        };
    } else if (unit === "F") {
        return function (celsiusTemp) {
            const fahrenheitTemp = (celsiusTemp * 9) / 5 + 32;
            return fahrenheitTemp;
        };
    }
}

const toCelsius = temperatureConverter("C");
const toFahrenheit = temperatureConverter("F");

console.log(toCelsius(32));
console.log(toFahrenheit(0));

/*3. Greeting Generator
Task: Write a function greet(name) that returns a function to generate customized greetings for the provided name.
Explanation: The inner function maintains access to the name variable and uses it to generate custom greetings. */

function greet(name) {
    return function (timeOfDay) {
        return "Good " + timeOfDay + ", " + name + "!";
    };
}

const greetJohn = greet("John");
console.log(greetJohn("Morning"));

/*4. Interest Calculato
Task: Write a function interestCalculator(rate) that takes an interest rate and returns a function to calculate the interest for a given amount.

Explanation: This example illustrates how a closure can maintain state information like the interest rate across multiple calls. */

function interestCalculator(rate) {
    return function (amount) {
        const interest = (rate / 100) * amount;
        return interest;
    };
}

const calculateInterest = interestCalculator(5);
console.log(calculateInterest(1000));

/*5. Multiplier Function
Task: Write a function multiplier(factor) that takes a factor and returns a function to multiply any number by that factor.

Explanation: Here, the closure is retaining the factor information, allowing the inner function to utilize it for multiplication. */

function multiplier(factor) {
    return function (number) {
        const result = factor * number;
        return result;
    };
}

const double = multiplier(2);
console.log(double(5));
