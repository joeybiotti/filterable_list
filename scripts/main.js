//Get input element
let filterInput = document.getElementById('filterInput');

//Add Event Listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    //Get val of input
    let filteredVal = document.getElementById('filterInput').value.toUpperCase();
    console.log(filteredVal);

    //Get names from ul
    let ul = document.getElementById('names');

    //get lis from ul
    let li = ul.querySelectorAll('li.collection-item');

    //loop through collection items lis
    for(let i = 0; i < li.length; i++){
        let a = li[i].getElementsByTagName('a')[0];
        //if match
        if(a.innerHTML.toUpperCase().indexOf(filteredVal) > -1){
            li[i].style.display= "";
        }else{
            li[i].style.display= "none";
        }
    }
};

