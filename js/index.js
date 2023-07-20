


var bookMarkNameInput =document.getElementById("bookMarkName");
var  bookMarkSiteInput = document.getElementById("bookMarkSite");



var bookMarkContainer = [];
 
if( localStorage.getItem("bookmark") !=null){
    bookMarkContainer = JSON.parse(localStorage.getItem("bookmark"));
    displayData()
}

function submitData(){
    
    var bookMarkSite = {
        name : bookMarkNameInput.value ,
        site : bookMarkSiteInput.value
    }
    
    bookMarkContainer.push(bookMarkSite);
    localStorage.setItem("bookmark",JSON.stringify(bookMarkContainer));

    
    displayData();
    clearData();
}


function displayData(){

    var box ="";

    for( var i=0; i<bookMarkContainer.length ;i++){

        box += `
        
        <tr>
        <td>${i+1}</td>
        <td> ${bookMarkContainer[i].name} </td>
        <td><a class="btn btn-success fs-4 px-3" href="https://${bookMarkContainer[i].site}"  target="_blank"><i class="fa-solid fa-eye px-2"></i>Visit</a></td>
        <td><button class="btn btn-danger fs-4 px-3 " onclick="deleteBookmark(${i})"> <i class="fa-solid fa-trash-can px-2"></i>Delete</button></td>
    </tr>
        
        `
    } 
    
    document.getElementById("tableData").innerHTML = box;
}

function deleteBookmark(elementDeletedIndex){
   

    bookMarkContainer.splice(elementDeletedIndex,1)
    localStorage.setItem("bookmark",JSON.stringify(bookMarkContainer))
     
    displayData()
 
}

function clearData(){

    bookMarkNameInput.value ="";
    bookMarkSiteInput.value ="";
}
