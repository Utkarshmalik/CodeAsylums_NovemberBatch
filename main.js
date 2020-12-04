/*
functions 
*/


/*
Functions are first class citizens in javascript 

// */

// function  someFun(params) {
    
//     console.log("Some Function");
// }


// function parent(someOtherFun) {

//     return function child() {

//         someOtherFun();
//     }
// }

// // const anotherFun=parent(someFun);
// // anotherFun();


// parent(someFun)();



/*

function expressions
*/

// var someFun=function fun() {
//     console.log("I am a function expression");
// }

// someFun();


//arrow functons 

var fun=()=>
{
    console.log("I am a arrow function");
}

fun();
