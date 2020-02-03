'use strict';


var randomArray = [];

document.querySelector("#submit").addEventListener("click",submit);
document.querySelector("#cancel").addEventListener("click",cancel);


function submit(p){
    p.preventDefault();
    var gdData = null;

    var genderData = document.querySelector('input[name = "gender"]:checked');
    if(genderData != null){  
    gdData = genderData.value;
    }

    var checkbox = null,
        checkbox = document.querySelector("#checkbox:checked");
    

    var data = {
        name : document.querySelector("#name").value,
        sirname : document.querySelector("#sirname").value,
        gender : gdData,
        address : document.querySelector("#address").value,
    }

    if(data.name == "" || data.sirname == "" || data.gender == null || data.address == "" || checkbox == null){
        alert("PLEASE FILL THE ENTIRE FORM")
    }
    else{
        alert("FORM SUCCESSFULLY SUBMITED");
        randomArray.push(data);
        console.log(randomArray);

        document.querySelector("form").reset();

        show();
    }   

}


function cancel(p){
    p.preventDefault();
    document.querySelector("form").reset();
}



function show() {
    var ulNode = document.createElement("ul");
    
    for (var specs in randomArray[randomArray.length-1]){
        var liNode = document.createElement("li");

        liNode.textContent = (randomArray[randomArray.length-1][specs]);
        ulNode.appendChild(liNode);

    }

         
    // for adding edit button
    var liNodeEdit = document.createElement("li");
    var aNodeEdit = document.createElement("a");

    aNodeEdit.setAttribute("href", "#Fixme");
    aNodeEdit.setAttribute("id", "edit"); 
    aNodeEdit.textContent = "Edit";
    
    liNodeEdit.appendChild(aNodeEdit);
    ulNode.appendChild(liNodeEdit);

    aNodeEdit.addEventListener("click",edit);

    // for adding delete button
    var liNodeDelete = document.createElement("li");
    var aNodeDelete = document.createElement("a");

    aNodeDelete.setAttribute("href", "#Fixme");
    aNodeDelete.setAttribute("id", "delete");
    aNodeDelete.textContent = "Delete";
    
    liNodeDelete.appendChild(aNodeDelete);
    ulNode.appendChild(liNodeDelete);

    aNodeDelete.addEventListener("click",del);


    var someNode = document.querySelector('.display');
    someNode.appendChild(ulNode);
}




function edit(){

var items = document.querySelectorAll(".display ul"),
    tab = [];

    for(var i = 0; i < items.length; i++){
        tab.push(items[i]);
    }


    for(var i = 0; i < items.length; i++){
        items[i].onclick = function(){
            var index = tab.indexOf(this);

            var selectedData = [];
                for (var specs in randomArray[index-1]){        
                    selectedData.push(randomArray[index-1][specs]);
                }
            
            document.querySelector("#name").value=selectedData[0];
            document.querySelector("#sirname").value=selectedData[1];
            document.querySelector("#address").value=selectedData[3];
            if(selectedData[2] == "Male"){
                document.querySelector("#male").checked = true;
            }
            else{
                document.querySelector("#female").checked = true;
            }

            randomArray.splice(index-1 , 1);
            console.log(randomArray);

            var ulRemove = document.querySelector(".display");
            ulRemove.removeChild(ulRemove.childNodes[index+2]);

        }
    }  
}

function del(){

var items = document.querySelectorAll(".display ul"),
    tab = [];

    for(var i = 0; i < items.length; i++){
        tab.push(items[i]);
    }

    for(var i = 0; i < items.length; i++){
        items[i].onclick = function(){
            var index = tab.indexOf(this);

            randomArray.splice(index-1 , 1);
            console.log(randomArray);

            var ulRemove = document.querySelector(".display");
            ulRemove.removeChild(ulRemove.childNodes[index+2]);
        }
    }
}
