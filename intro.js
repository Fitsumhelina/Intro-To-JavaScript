
// ### JavaScript Syntax Guide

// #### 1. Variables and Data Types

// Variable declaration
let variableName = value;

// Data types
let numberVar = 10;           // Number
let stringVar = "Hello";      // String
let booleanVar = true;        // Boolean
let arrayVar = [1, 2, 3];     // Array
let objectVar = {             // Object
  key: "value",
  anotherKey: 123
};

// #### 2. Operators

// Arithmetic operators
let sum = 10 + 5;
let difference = 10 - 5;
let product = 10 * 5;
let quotient = 10 / 5;
let modulus = 10 % 3;

// Comparison operators
let isEqual = (10 === 10);    // true
let isNotEqual = (10 !== 5);  // true
let greaterThan = (10 > 5);   // true
let lessThan = (10 < 5);      // false

// Logical operators
let andOperator = (true && false);  // false
let orOperator = (true || false);   // true
let notOperator = !true;            // false

// #### 3. Control Structures

// if statement
if (condition) {
  // code block
} else if (anotherCondition) {
  // code block
} else {
  // code block
}

// for loop
for (let i = 0; i < 5; i++) {
  // code block
}

// while loop
while (condition) {
  // code block
}

// #### 4. Functions

// Function declaration
function functionName(parameter1, parameter2) {
  // code block
  return result;
}

// Function call
let result = functionName(argument1, argument2);

// #### 5. Arrays and Objects

// Array methods
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);         // Adds element to end
numbers.pop();           // Removes element from end
console.log(numbers.length);          // Length of array

// Object properties
let person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: 10001
  }
};
console.log(person.name);     // Access property
person.age = 31;               // Update property

// #### 6. Error Handling (Basic)

try {
  // code that may throw an error
} catch (error) {
  // handle the error
} finally {
  // optional block executed after try/catch
}

// #### 7. Comments

```
// Single line comment

/*
Multi-line
comment
*/

```
// #### 8. Strings and String Methods

// String declaration
let message = "Hello, World!";

// String length
let length = message.length;  // 13

// Accessing characters
let firstChar = message[0];   // 'H'
let lastChar = message[message.length - 1];  // '!'

// Concatenation
let greeting = "Hello";
let name = "fitsum";
let fullGreeting = greeting + ", " + name + "!";  // "Hello, fitsum!"

// String methods
let uppercaseMessage = message.toUpperCase();   // "HELLO, WORLD!"
let lowercaseMessage = message.toLowerCase();   // "hello, world!"
let slicedMessage = message.slice(7, 12);        // "World"
let replacedMessage = message.replace("Hello", "Hi");  // "Hi, World!"

// #### 9. Arrays and Array Methods

// Array declaration
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements
let firstFruit = fruits[0];     // "Apple"
fruits[1] = "Orange";           // Modifying element

// Array length
let arrayLength = fruits.length;    // 3

// Array methods
fruits.push("Grapes");          // Adds "Grapes" to end
let lastFruit = fruits.pop();   // Removes and returns "Grapes"
let firstFruit = fruits.shift();  // Removes and returns "Apple"
fruits.unshift("Mango");        // Adds "Mango" to beginning
let slicedFruits = fruits.slice(1, 3);  // Returns ["Orange", "Cherry"]

// #### 10. Objects and Object Methods

// Object declaration
let person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: 10001
  },
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

// Accessing object properties
let personName = person.name;        // "John"
let zipCode = person.address.zip;    // 10001

// Adding new property
person.email = "john@example.com";

// Object method call
let greeting = person.greet();       // "Hello, my name is John"


// #### 11. Loops and Iteration

// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// forEach loop (for arrays)
let number = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});

// #### 12. Conditional Statements

let age = 18;

// if-else statement
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Today is Monday.");
    break;
  case "Tuesday":
    console.log("Today is Tuesday.");
    break;
  default:
    console.log("Today is not Monday or Tuesday.");
}


