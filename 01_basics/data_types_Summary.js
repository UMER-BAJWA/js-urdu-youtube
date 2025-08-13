//  #primitive DT

// 7 types : String,Number, Boolean, Null, undefined, Symbol

const score =100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);


// Refrence (Non Primitive)
// Array, Objects, Functions, 


const heros =["shaktiman", "naagra", "doga"]
let myObj =
{
    name:"hyy",
    age: 33,
}
const myFunctoin = function() {
    console.log("Hello World")
}
console.log(typeof anotherId);

// ++++++++++++++++++++++++
//  Stack (Primitive), Heap(Non_Primitive)

let myYoutubename = "hichandotcom"

let anothername = "chaiaurcode"
console.log(anothername);
console.log(myYoutubename);


let userOne = {
    email: "user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne 
userTwo.email = "yuio@google.com"
console.log(userOne.email);
console.log(userTwo.email);





