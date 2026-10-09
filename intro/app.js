// var, let, const, no declaration

// var a = 10;

// a = 20;

// function add() {
//     var insideFunc = "here";


//     function sub(){
//         console.log(insideFunc)
//     }
//     sub();
// }
// add();

function add(){
    var insideFunc = "here";
    console.log(insideFunc);

    function sub(){
        console.log(insideFunc)
    }
    sub();
}
add();


var a = 10; // global scope

{
    let a = 20; // block scope like in for() if()  etc
    console.log(a);
}
console.log(a);

let b = 50;

b = 100;// no error, can reassign a let variable

const c = 200;

// c = 300; // error, cannot reassign a const variable 


var d = 400;
d = 500; // no error, can reassign a var variable

k=10;// always global scope, no declaration, not recommended


let arr1= [1,2,3,4,5]; // can work with const   
let arr2 = arr1; // reference copy, not value copy

arr2.push(6); // changing arr2 will also change arr1 because they reference the same array in memory

arr2[0] = 100; // changing arr2 will also change arr1 because they reference the same array in memory
console.log(arr1); // [1,2,3,4,5,6]

// Data types in JS

const num = 10; // number
const str = "Hello"; // string
const bool = true; // boolean
const arr = [1, 2, 3];

const obj = {
    name: "John",
    age: 30,
    isStudent: false
};
const n1 = null; // 
const n2 = undefined; // undefined //let a;
const n3 = NaN; // NaN
console.log(typeof num); // number
console.log(typeof str);    // string
console.log(typeof bool);   // boolean
console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof n1); // object
console.log(typeof n2); // undefined
console.log(typeof n3); // number
const n = 1000;
const m = 999.9;

console.log(typeof n); // number
console.log(typeof m); // number


{
    let t = (r = 100);
    console.log(t,r);
}

console.log(r); // 100, r is global scope because it was not declared with let or const


let p;

p = 0/0;

console.log(isNaN(p)); // true, p is NaN

console.log(typeof p); // number, NaN is of type number

console.log(p === NaN); // false, NaN is not equal to itself

console.log(isNaN(09)); // false, 09 is a valid number (9)


// important asked in interviews too


function addd(){
    // var a; imagine this line is here, because of hoisting, var a is hoisted to the top of the function and initialized with undefined
    console.log(a)
    var a = 10; // let,const gives different error, because they are not hoisted like var
}
addd(); // undefined, because of hoisting, var a is hoisted to the top of the function and initialized with undefined