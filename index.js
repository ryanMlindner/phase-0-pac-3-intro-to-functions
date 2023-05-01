// Follow along with the examples here
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
function sayHelloToSamip() {
    console.log("Hello, Samip!");
}

// function pattern
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

// basic abstraction with variables
function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe"); // "Hello, Guadalupe!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"
  
  // ^ Note that in the above, JavaScript coerces the number 1 to the string "1"

/*
function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
*/

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }

console.log(say("Julio", "hello"));

function add(x, y) {
    return x + y;
  }

console.log(add(1,2));

function funCode(number, constraint){
    let check = 42;
    let passed = false;
    let returnVal = "wrong password number!"
    if (constraint === check){
        passed = true;
        if (number === 42){
            returnVal = "You like that number a lot, huh"
        }
        else returnVal = `correct password number! and your favorite number is ${number}!`
    }
    return returnVal
}
//lets skip the i/o for this, shall we
console.log(funCode(41, 42));
console.log(funCode(41, 47));
console.log(funCode(42, 42));