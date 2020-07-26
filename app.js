
var list=document.getElementById("myUL");



function addTodo(){

    var todo_item=document.getElementById("todo-item");
    
    var a=todo_item.value;
    if (a===''){
        alert("You must write something!");
    }
    else{
    //li tag
    var li=document.createElement('li');   //create html tag
    var liText= document.createTextNode(todo_item.value);
    
    li.appendChild(liText);
    

    //delet button
    var delbtn=document.createElement("button");
    var delText=document.createTextNode("DELETE");
    delbtn.setAttribute("class","btnn");
    delbtn.setAttribute("onclick","delItem(this)");
    delbtn.appendChild(delText);


    //create edit button
   var editbtn=document.createElement("button");
    var editText=document.createTextNode("EDIT");
    editbtn.setAttribute("class","btnnn");
    editbtn.appendChild(editText);
    editbtn.setAttribute("onclick","editItem(this)");



    li.appendChild(delbtn);
    li.appendChild(editbtn);




    list.appendChild(li);
    todo_item.value="";
    // after adding item it will empaty 

}
}

function delItem(e){
    e.parentNode.remove();
}


function deleteAll(){
    list.innerHTML="";
}

function editItem(e){
    
    var edit=e.parentNode.firstChild.nodeValue;
    var editvalue=prompt("Enter Edit Value",edit);
    e.parentNode.firstChild.nodeValue=editvalue;
}
