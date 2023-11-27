//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // it will give false beacause symbol gives unique identity or value for variable 

// const bigNumber = 3456543576654356754n
console.log(typeof anotherId);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // arrays 
let myObj = {
    name: "abc",
    age: 22,
}          // if we use parenthisis it means ->it is object 

const myFunction = function(){
    console.log("Hello world");
}


console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3