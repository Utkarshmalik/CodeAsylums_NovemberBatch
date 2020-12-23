



// function Book(title,author,year) {

//     this.title=title;
//     this.author=author;
//     this.year=year;

// }

// const book1 = new Book("JS","Rahul",2018);
// const book2=new Book("React","utkarsh",2012);

// console.log(book1 instanceof Book);

// const Book={
//     summary:function () {
//         console.log(`${this.title} is written by ${this.author}`);
//     }
// }


// const book1=Object.create(Book);
// book1.title="JS";
// book1.author="Utkarsh";

// // console.log(book1);


let Book=function(name) {
    this.name=name
}

let newBook=function(name) {
    Book.call(this,name);
}

                     
                      

 newBook.prototype.summary=()=>
{
    console.log("vfvf");
}


const book1=new newBook("dc");
const book2=new newBook("JS");

console.log(book1);
console.log(book2);




