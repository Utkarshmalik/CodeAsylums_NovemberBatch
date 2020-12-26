
//1->Producing Code-> Singer
//2->Consuming Code-> Thats wants the result of producing code , once it is ready -> Fans 
//3-> Promise -> Subsription List



// let promise= new Promise(function(resolve,reject) {

//     //producing code 
//     //fetching data from on an API

//     setTimeout(() => {
//         resolve(5);
//     }, 1000);
// });


// promise.then((data)=>{console.log(data * 5)},(err)=>{console.log(err)});



// executor runs automatically : is the singer 
// //producing Code 

//resolve(value) 
//reject(eror) 


// function loadScript(src,callback) {

//     let script=document.createElement('script');
//     script.src=src;

//     script.onload=()=> callback(null,script);
//     script.onerror=()=>callback(new Error('Script load error'));

//     document.head.append(script);
// }

// function loadScript(src) {

//     return new Promise(function(resolve,reject) {

//         let script=document.createElement('script');
//         script.src=src;
        
//         script.onload=()=>resolve(script);
//         script.onerror=()=>reject(new Error('Script unable to load'));

//         document.head.append(script);        
//     })
// }

// let promise=loadScript('');

// promise.then((srcipt)=>{
//     alert(`Script loaded`);
// },(err)=>
// {
//     console.log(err.message);
// })


// function fetch(url)
// {
//     return new Promise((resolve,reject)=>
//     {
//         const data=//network call

//         if(data)
//         resolve(data);
//         else
//         reject(err)
//     })
  
// }


// fetch("https://dummyapi.io/data/api/user",{
//     headers:{"app-id":"5fca5a3236a334a6a8f40cc7r"}
// }).then((res)=>console.log(res),(err)=>console.log(err));

//promise chaining

const div=document.getElementById('head');


fetch("https://dummyapi.io/data/api/user",{
    headers:{"app-id":"5fca5a3236a334a6a8f40cc7"}
}).then(res=>res.json())
.then(data=>
    {
        console.log(data);
        data.data.forEach(person => {

            console.log(person);

            const newElement=document.createElement('div');

            const img=document.createElement('img');
            img.setAttribute('src',person.picture);

            const h1=document.createElement('h1');
            h1.innerHTML=`${person.firstName} ${person.lastName}`;

            newElement.style.border="3px solid red";
            newElement.appendChild(h1);
            newElement.appendChild(img);

            div.appendChild(newElement);
        });

    })
.catch(err=>console.log(err.message));


