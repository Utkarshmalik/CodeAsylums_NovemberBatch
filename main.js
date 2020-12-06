// fun();
// console.log(names);
// var names="Hello";


// function fun(params) {
//     console.log("We are learning JS today");
// }

/*

This is called as hoisting : It is 

JS's default behavior of moving declarations at the top of their scope

var is partially hoisted
functions are fully hoisted 

*/

/*
   execution context 
*/

/*
  var is always function scoped
  it is always hoisted at the top of its scope
  */


// var favLanguage="JS";

// function myFavLanguages() {

//     console.log("My fav languageis ",favLanguage);

//     var favLanguage="Java";


//     console.log("My fav languageis ",favLanguage);

// }

// myFavLanguages();


// var  favLanguage=undefined;
// //myFavmyFavLanguages=

// function myFavLanguages()
// {
//     var  favLanguage=undefined;

//      console.log("My fav languageis ",favLanguage);

//      favLanguage="Java";

//      console.log("My fav languageis ",favLanguage);
// }


// var y=undefined;
// y=100;

// function fun() {

//     var y=undefined;

//     if(y>150)
//     {
//         y=50;
//     }
//     console.log(y);
// }

// fun();

// //undefined


// function fun(params) {

//     var x=undefined;

//     if(false)
//     {
//         var x=50;
//     }

//     console.log(x);
//     console.log(y);

//     var y=100;
//     console.log(y);
// }

// fun();

// var fun=undefined;

// fun();
// console.log(c);

//  fun=function () {

//     console.log("hello");
// }

// var c=5;


//Hello 
//undefined




// function foo() {
  
//   function bar() { return 3; }

//   return bar();

//   function bar()
//   { 
//     //return 8;
//   }
// }
  
//   alert(foo());






// function parent() 
// {
//   //hoisted=undefined;

//   var hoisted = "I'm a variable";

//   function hoisted() 
//   {
//     return "I am a function";
//   }

//   return hoisted(); 
//   }

//   console.log(parent());



// x();

// var x=function name(params) {
//   console.log("cddcd");
// // }


//   alert(foo());

//   function foo() {

//     bar=function()
//     { 
//       return 3;
//     };

    
//   var bar = function()
//   { 
//     return 3;
//   };

//   return 3;

// }

// foo();




// var myVar = 'foo';

// (function() 

// { 
//   console.log('Original value was: ' + myVar);

//   var myVar = 'bar'; 

//   console.log('New value is: ' + myVar);
// })();




// function foo(a) {

//   a();
//   function a() { console.log("yay");
// }

// }


//   foo(); // ??
//   foo( undefined ); // ??
//   foo( function(){ console.log("bam"); } ); // ??
  


 
//  var fn22 = 1;

// function gn22() {
//   var fn22=undefined;

//   if (true) {
//     var fn22 = 2; 
// }
// console.log(fn22); 
// }
// gn22();


// What is the output of this program?



// var a23=1;
  

// function b24() {

//   // a23:10
  
//   a23 = 10; 
//   return;

// // function a23() {
// // return 11; 
// // }

// }

// b24();

//  console.log(a23);



// // //1,2,1


// var a44=1;
// // var a44 = 2; 

// console.log(a44); 

// if (true) {
//   var a44 = 2;
//   console.log(a44); 
// }
//   console.log(a44);



//82,91,91

// function f25() 
// { 
//   x55=91;

//   var x55 = 91; 
//   if (x55) 
//   {
//   (function () {
//     // x55=undefined;
//   var x55 = 82; console.log(x55);
//   }());

//   console.log(x55);
//  }
//   console.log(x55); 
// }
//   f25();


// function f28() 
// { var x56 = 94;
//    if (false) {
//   (function () 
//   {
//   var x56 = 83; 
//   console.log(x56);
//   }());

//   console.log(x56); }

//   console.log(x56); }
//   f28();


// function test() 
// {
//   if (false) {
//     let x = 50;
//   }
//   console.log(x); 
// }
//   test();



function test() {

  
foo();
 bar();

function foo()
{
console.log('foo'); 
}

var bar = function() {
console.log('bar'); }
} test();