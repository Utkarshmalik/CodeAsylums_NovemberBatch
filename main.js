// function logThis() 
// { console.log(this);
// }

// const myObj = { name: "sag1v" }

// logThis.apply(myObj)

// class myClass { 
  
//   logThis = () =a {
//   console.log(this); 
// }
// }

//   const myObj = { name: 'sagiv' };

//   const myClassInstance = new myClass()

//    myClassInstance.logThis.call(myObj)


const call = {
  caller: "mom", anotherCaller: function() {
  console.log(`${this.caller} called, too!`) },
  says: function() {
  console.log(`Hey, ${this.caller} just called.`);
  } };

  let newCall = call.anotherCaller; newCall();