//var vs let vs const 

//ES6

//only var keyword existed 

//let and const 


//scope 


// var variables are globally/function scoped

// var var1="hello";

// function fun(params) {

//   var var2="hello again";
// }

// console.log(var2);

//var variables can be re declared and updated

// //Re Declaration
// var myName="Utkarsh";
// var myName="Rahul";

// //Updation
// var someName="Utkarsh";
// someName="Rahul";

// //Hoisting



// var person="Utkarsh";

// var age=26;

// if(age > 20)
// {
//   var person="Responsible Utkarsh";
// }

// console.log(person);


//let  -> it is obviously preffered for variable declarations 


//scope -> block scoped

// {
//   //BLOCK 
// }
// {
//   //ANOTHER BLOCKS
// }


// var person="Utkarsh";

// let age=26;

// if(age > 20)
// {
//   let person="Responsible Utkarsh";
// }

// console.log(person);

//let and const are not hoisted

//let can be updated but they cannot be re-declared 



//const 


// var x;
// x=4;


// let y;
// y=4;


// const




for(let  i=0;i<5;i++)
{
  setTimeout(() => {
    console.log(i);
  }, 5000);

  console.log("Hello 1");
}

console.log("Hello 2");

// {
//   0
// }

// {
//   1
// }

// {
//   2
// }
// {
//   3
// }
// {
//   4
// }









//0,1,2,3,4
