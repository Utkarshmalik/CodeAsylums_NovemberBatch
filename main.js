// function a(params) {
  
//   var b=10;

//   function c(params) {
//     console.log(b);
//   }

//   return c;
// }

// let anotherFun=a();
// anotherFun();

function  grandparent(params) {

  var x=5;
  
  function parent(params) {

    var y=6;

    function child(params) {

      var z=7;
      console.log(x+y+z);
    }
    
    return child;
  }

  return parent;
}

 
var parent=grandparent();
var childd=parent();
childd();


//CLOSURES