
const inputbox = document.getElementById("inputbox");
const listitem = document.getElementById("list-item");

function addTask(){
    if(inputbox.value === ''){
        alert('You mush write something');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        listitem.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    saveData();
}


// listitem.addEventListener('click', function(e){
//     if(e.target.tagName === 'LI'){
//         e.target.classList.toggle("checked");
//         saveData()
//     }else if ( e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         saveData()
//     }
// }, false)

listitem.onclick = function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData()
    }else if ( e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}

function saveData(){
    localStorage.setItem('data', listitem.innerHTML);
}

function showData(){
 listitem.innerHTML = localStorage.getItem('data')   
}
showData()