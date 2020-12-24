const obj={
    name:"Utkarsh"
}


function run() {
    console.log(this.name + " is running");
}

console.dir(run);

console.log(run.toString());

//run.call(obj);
