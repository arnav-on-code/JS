
//1
// const obj = {
//     name: "Rohit",
//     changeName: function (name) {
//         this.name = name
//     },
// }

// obj.changeName("Mohit")
// console.log(obj.name)


//2
// const x = {name: "Rohit"}
// x.name = "Mohit" // can change the properties of a const object
// console.log(x.name) // Mohit



//3
// const obj = {
//     name: "Rohit",
//     changeName: (name) =>{
//         this.name = name
//     },
// }

// obj.changeName("Mohit")
// console.log(obj.name) // Rohit, because arrow functions do not have their own 'this' context, they inherit it from the parent scope. In this case, 'this' refers to the global object, not the obj itself.

//4
// const obj = {
//     name: "Rohit",
//     arrowFunction: null,
//     normalfunction: function () {
//         this.arrowFunction = () => {
//             console.log(this.name); // 'this' refers to the obj because arrow functions inherit 'this' from their parent scope, which is the normal function in this case.
//         };
//     }
// };


// obj.normalfunction()  // must prior call the normal function to set the arrowFunction property
// obj.arrowFunction()  // Rohit, because the arrow function inherits 'this' from the normal function, which refers to the obj.


//5

// setTimeout(() =>  console.log('hellow from setTimeOut one'), 0) // This will be executed after the main thread is done
// console.log('hello for main one') // This will be executed first
// setTimeout(() =>  console.log('hellow from setTimeOut two'), 0) // This will be executed after the main thread is done
// console.log('hello for main two') // This will be executed first

//6

// let startNamePrinter = (name) => {
//     let x = name.split('').reverse() // we use reverse here because we want to pop the letters from the end of the array, which is more efficient than shifting from the front of the array. and split will create an array of letters from the name string.
//     let handler = setInterval( () => {
//         let y = x.pop() //returns from last element of array so 'o' will return first 
//         console.log(y)
//     }, 1000)

//     setTimeout( () => {
//         clearInterval(handler)
//     },  (name.length + 1) * 1000)
// }

// startNamePrinter('orange') // will print each letter of the name 'orange' every second and stop after printing all letters