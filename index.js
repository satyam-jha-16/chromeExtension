const leadItem = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
let leads = [];
const ulEl = document.getElementById("ul-el");
const delBtnEl = document.getElementById("delete-btn");
const tabBtn = document.getElementById("save-tab");
//using the local database
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage)
if(leadsFromLocalStorage){
    leads = leadsFromLocalStorage;
    render(leads);
}

leadItem.addEventListener("click", function saveLeads(){
    // console.log("saved the lead");
    leads.push(inputEl.value);
    // console.log(leads);
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(leads));
    render(leads);
})

function render(leads){
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
    render(leads);
})

//working with chrome.tabs API

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true , currentWindow : true}, function(tabs){
        leads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(leads));
        render(leads);
    })

})