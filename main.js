
const addButton=document.getElementById("addButton");

addButton.addEventListener("click",()=>
{
    var li=document.createElement("li");

    var inputFieldValue=document.getElementById("inputField").value;


    if(inputFieldValue!=="")
    {
    var textNode=document.createTextNode(inputFieldValue);
    li.appendChild(textNode);
    li.style.margin="5px";
    var span=document.createElement('SPAN');
    span.setAttribute("class","deleteButton");
    var txtNode=document.createTextNode('X');
    span.appendChild(txtNode);
    span.style.float="right";
    li.appendChild(span);
    document.getElementById('taskList').appendChild(li);   
    } 
    document.getElementById("inputField").value="";

    li.onclick=(event)=>
    {
        li.setAttribute("class","checked");
    }

    span.onclick=(event)=>
    {
        event.stopPropagation();
        li.style.display="none";
    }

})

document.getElementById("clearButton").addEventListener("click",()=>
{
    document.getElementById("taskList").innerHTML="";
})