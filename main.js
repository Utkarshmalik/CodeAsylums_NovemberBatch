// // const obj={
// //     name:"Utkarsh"
// // }


// // function run() {
// //     console.log(this.name + " is running");
// // }

// // console.dir(run);

// // console.log(run.toString());

// // //run.call(obj);


// /*

// */

// //child's __proto__ always points to the prottype property of its parent

// let f = function () {
//     this.a = 1;
//     this.b = 2;
//  }

//  f.prototype.c=4;
//  f.prototype.d=5;

//  let o = new f(); 
//  let m=new f();
//  let n=new f();



//  console.log(o.__proto__===f.prototype);


//  console.log(o);
//  console.log(m); 
//  console.log(n);



// var o = {
//     a: 2,
//     m: function() {
//       return this.a + 1;
//     }
//   };
  
//   console.log(o.m()); 
  
//   var p = Object.create(o);
//  console.log(p); 
//   p.a = 4; 
//   console.log(p.m())

//   function doSomething(){
//   }

// console.log( doSomething.prototype );

// // var doSomething = function(){};
// console.log( doSomething.prototype );


function doSomething(){}

doSomething.prototype.foo = "bar"; 

var doSomeInstancing = new doSomething();

doSomeInstancing.prop = "some value"; 

console.log( doSomeInstancing );