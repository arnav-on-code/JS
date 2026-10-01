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

c = 300; // error, cannot reassign a const variable 


var d = 400;
d = 500; // no error, can reassign a var variable

k=10;// always global scope, no declaration, not recommended