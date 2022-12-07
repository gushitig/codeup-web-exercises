//DEFAULT FUNCTION VALUES
// function sayHello(name) {
//     if(name === undefined){
//         console.log(`Hello unknown person`);
//         return;
//     }
//     console.log(`Hello ${name}`);
// }

//can be simplified to
function sayHello(name  = "unknown person") {
    console.log(`Hello ${name}`);
}

sayHello("bob");
sayHello();



//OBJECT PROPERTY VARIABLE ASSIGNMENT SHORTHAND
let firstName = "bob";
let lastName = "smith";
let age = 42;
let person = {
    firstName: firstName,
    lastName: lastName,
    age: age
}
console.log(person);

//can be simplified to
/*
let person = {
    firstName,
    lastName,
    age: age
}
*/



//Object destructuring
// old way
var person = { name: 'codeup', age: 4 };
var name = person.name;
var age = person.age;
console.log(name); // 'codeup'
console.log(age); // 4

// new way
const person = { name: 'codeup', age: 4 };
const { name, age } = person;
console.log(name); // 'codeup'
console.log(age); // 4


//can also use for arrays
const myArray = [1, 2, 3, 4, 5];
const [x, y] = myArray;
console.log(x); // 1
console.log(y); // 2
