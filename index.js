let leadItem = document.getElementById("save-btn");
let inputEl = document.getElementById("input-el");
let leads = [];
let ulEl = document.getElementById("ul-el");
let delBtnEl = document.getElementById("delete-btn");
//using the local database
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    leads = leadsFromLocalStorage;
    renderLeads();
}

leadItem.addEventListener("click", function saveLeads(){
    // console.log("saved the lead");
    leads.push(inputEl.value);
    // console.log(leads);
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(leads));
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
delBtnEl.addEventListener("dblclick", function(){
    localStorage.clear();
    leads =[];
    ulEl.innerHTML = "";
})
