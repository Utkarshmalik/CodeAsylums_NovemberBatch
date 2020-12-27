

// const div1=document.getElementById("div1");
// const div2=document.getElementById("div2");
// const div3=document.getElementById("div3");


// div1.addEventListener("click",(e)=>
// {
//     console.log("div 1 clicked");
//     console.log(e);

// });

// div2.addEventListener("click",(e)=>
// {
//     console.log("div 2 clicked");
//     console.log(e);

// });

// div3.addEventListener("click",(e)=>
// {
//     console.log("div 3 clicked");
//     console.log(e);

// });


const menu=document.getElementById("menu");

menu.addEventListener("click",(event)=>
{
    let target=event.target;

    switch (target.id) {
        case 'home':
            console.log("You are on the homepage");
            break;
        case 'about':
            console.log("You are on the about page");
            break;
        case 'reports':
            console.log("You are on the Report Page");
            break;
        default:
            break;
    }

})
