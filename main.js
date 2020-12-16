



// for(let i=0;i<arr.length;i++)
// {
//   console.log(arr[i].name+" is"+arr[i].age+" years old");
// }

// //forEach
// arr.forEach((item,index)=>{
//   arr[index].name=item.name+" jain";
// });

// console.log(arr);


//filter

// const modifiedArray=arr.filter((item)=>
// {
//   return item.age > 25; 
// });


// console.log(arr);
// console.log(modifiedArray);


//map

// arr.map((item)=>
// {
//   return item.age+30
// });

//shallow copy : only the memory addresses are copied

// var arr1=[1,2,3,4,5,6,7,8];
// var arr2=arr1;

// arr2.push(9);

// console.log(arr1);
// console.log(arr2);



// const arr2=arr1.map((element)=>
// {
//   return element+5;
// });

// console.log(arr2);



// var arr={name:"utkarsh",age:26,height:185};

// //spread operator 
// var arr1={...arr};

// arr1.age=30;

// console.log(arr);
// console.log(arr1);

// var arr1=[1,2,3,4,5,6];
// var arr2=[...arr1];

// arr2.push(7);
// console.log(arr1);
// console.log(arr2);



// var arr={ details:{name:"utkarsh",age:26,height:185},contacts:["rahul","rakhi"]};

// // //spread operator 
// var arr1={...arr};

// arr1.details={...arr.details};
// arr1.contacts=[...arr.contacts];

// arr1.details.name="aakarsh";

// console.log(arr);
// console.log(arr1);


// var arr=[{name:"Utkarsh",age:26},{name:"Rahul",age:22},{name:"Shreya",age:30}];

// var arr1=[...arr];

// for(let i=0;i<arr.length;i++)
// {
// //   arr1[i]={...arr[i]}
// // }

// const arr=[];
// console.log(arr);


//ES6

//destructuring 

// var arr=[{name:"Utkarsh",age:26},{name:"Rahul",age:22},{name:"Shreya",age:30}];

// // const first=arr[0];
// // const second=arr[1];
// // const third=arr[2];

// const [first,second,third]=arr;

// const arr=[1,[[2],3]];

// var [foo,[[bar],baz]]=arr;

// console.log(foo);
// console.log(bar);
// console.log(baz);

// var arr=[1,2,3,4,6];

// var [first,...remaining]=arr;

// console.log(first);
// console.log(remaining);


// var perA={name:"Utkarsh"};
// var perB={name:"Rahul"};

// var {name}=perA;
// console.log(name);

var obj={name:"Utkar",age:"23",height:"300"};

// const name=obj.name;
// const age=obj.age;
// const height=obj.height

const {name,age,height}=obj;

console.log(name);
console.log(age);
console.log(height);