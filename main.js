// // function a(params) {
  
// //   var b=10;

// //   function c(params) {
// //     console.log(b);
// //   }

// //   return c;
// // }

// // let anotherFun=a();
// // anotherFun();

// function  grandparent(params) {

//   var x=5;

//   function parent(params) {

//     var y=6;

//     function child(params) {

//       var z=7;
//       console.log(x+y+z);
//     }
    
//     return child;
//   }

//   return parent;
// }

 
// var parent=grandparent();
// var childd=parent();
// childd();


// //CLOSURES



// function fun(params) {
//   console.log(this);
// }

// fun();

// function fun(params) {
//   console.log(this);
// }

// const obj={
//    print:fun
// }

// obj.print();




//this points to the object to which the function that is running belongs to 


// function  grandparent(params) {

//   function parent(params) {
//     console.log(this);
//   }

//   return parent;
// }

// const parent=grandparent();
// parent();


// const obj1={
  
//   foo:function foo(params) {

//     console.log(this);

//     function bar(params) {
//       console.log(this);
//     }
//     return bar;
//   }
// }

// obj1.foo()();


// const bar=obj1.foo();

// bar();


//arrow functions


//this inside of arrow functions will be whatever it was set by the wrapping executiion context 


// const fun1=function (params) {
//   console.log(this);
// }

// const fun=()=>
// {
//   console.log(this);
// }

// const obj={name:fun};


// obj.name();


// function fun(params) {
//   console.log(this);
// }

// const someObj=new fun();

// console.log(someObj);

//call 

const obj1={
  name:"Utkarsh"
}

const obj2={
  name:"Rahul",
  attack:function attack(weapon,time) {
    console.log(this.name + " is attacking with "+weapon+" at "+time);
  }
}

//obj2.attack("gun","night");

// obj2.attack.apply(obj1,["rifle","mid night"]);

//bind

const fun=obj2.attack.bind(obj1,"rifle","midnight");

fun();