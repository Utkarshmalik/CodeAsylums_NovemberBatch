

// const btn=document.getElementById("btn");

// // request should be made only once in 2 sec 

// var timer=undefined;

// btn .addEventListener("click",()=>{

//     if(timer)
//     {
//         return;
//     }


//     fetch("https://dummyapi.io/data/api/user",{
//         headers:{"app-id":"5fca5a3236a334a6a8f40cc7"}
//     }).then(data=>console.log(data));

//     timer=setTimeout(() => {
//         timer=undefined;
//     }, 3000);
    
// })








var inputField=document.getElementById('search');


var timer;

inputField.addEventListener("input",(e)=>
{

    clearTimeout(timer);
    
    timer=setTimeout(() => {
        
        fetch("https://dummyapi.io/data/api/user",{
                    headers:{"app-id":"5fca5a3236a334a6a8f40cc7"}
                }).then(data=>console.log(data));
        
    }, 2000);
    
})