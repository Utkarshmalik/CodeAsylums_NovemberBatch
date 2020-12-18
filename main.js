/*

DOM Manipulation 
*/

/*
Selection of elements
// */

// let element=document.getElementById('root');
// let myPara=document.getElementById('message');


// myPara.innerHTML="We are learning DOM manipulation";

// console.log(myPara);
// console.dir(myPara);

// let btn=document.getElementById('ratingSubmitBtn');

// btn.addEventListener("click",()=>
// {
//     let ratings=document.getElementsByName('ratings');
//     console.log(ratings);


//     for(let i=0;i<ratings.length;i++)
//     {
//         let element=ratings[i];

//         if(element.checked)
//         {
//             alert('You rated '+element.value);
//         }
//     }

//     ratings.forEach(
//         (element)=>{
//         if(element.checked)
//         {
//             alert('You rated '+element.value);
//         }
//     }
//     );
// })


// let menu=document.getElementById('menu');
// let courses=document.getElementsByClassName('item');

// console.log(courses);

// menu.style.backgroundColor="yellow";

// for(let i=0;i<courses.length;i++)
//     {
//         let element=courses[i];

//         console.log(element);

//         element.style.backgroundColor="red";
//         element.style.margin="10px";
//     }



// let btn=document.getElementById('checkcount');

// btn.addEventListener('click',()=>
// {
//      let headings=document.getElementsByTagName('h2');
//      alert(headings.length);
// })

let elements=document.querySelectorAll('p');


console.log(elements);