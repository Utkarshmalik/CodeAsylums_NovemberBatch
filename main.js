// console.log(1);

// //200 ms to execute 
//  const data=5//fetch data from database//fetch a data from a database

//  const finalData=data+5*7-9+5;
    
// // using that data to do some thing


//callbacks : A function that will execute at some later point of time


// const fetchDataFromDB=(callBack)=>
// {
//     console.log("I am a expensive function");

//     setTimeout(()=>
//     {
//         console.log("expensive task done");
//         callBack();
                    
//     }, 2000);
// }

// const dataRecievedFromDB=()=>
// {
//     console.log("Callback functiion called");
// }

// fetchDataFromDB(dataRecievedFromDB);



setTimeout(() => {
    console.log(1);
}, 0);

console.log(2);


console.log(3);

