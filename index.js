let leadItem = document.getElementById("save-btn");
let inputEl = document.getElementById("input-el");
let leads = [];
let ulEl = document.getElementById("ul-el");

leadItem.addEventListener("click", function saveLeads(){
    // console.log("saved the lead");
    leads.push(inputEl.value);
    // console.log(leads);
    inputEl.value = ""
    renderLeads();
})

function renderLeads(){
    let listItems = "";
    for(let i=0; i<leads.length; i++){
        listItems += `<li> 
        <a target='_blank' href='${leads[i]}'> 
        ${leads[i]}
        </a>
        </li>`
    }
    ulEl.innerHTML = listItems ; 
} 