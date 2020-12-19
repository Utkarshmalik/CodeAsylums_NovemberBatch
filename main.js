

// //innerHTML

// const div=document.getElementById("head");

// // console.log(div.hasAttribute('class'))

// const arr=["HTML","CSS","JS","React","NodeJS"];

// /*
// createElement()
// */


// /*
// getAttribute,set,has,remove 
// */

// const list=document.createElement('ul');


// arr.forEach((data)=>
// {
//     const li=document.createElement('li');
//     li.innerHTML=data;
//     li.setAttribute("class","listItem");

//     setTimeout(() => {
//         li.removeAttribute('class');
//     }, 3000);

//     /*
//     appendChild
//     */
//     list.appendChild(li);
// });

// div.appendChild(list);

// const para=document.createElement('p');

// para.innerHTML='hello how are you';

// div.appendChild(para);

const arr=[1,2,3,4,5,6,7,8];


function reducer(prevValue,num) {
    return prevValue+num;

}

const initValue=0;

const ans=arr.reduce(reducer,initValue);

// prevValue,num
// 0,1
// 1,2
// 3,3
// 6,4
// 10,5
// 15,6
// 21,7
// 28,8
// 36


console.log(ans);