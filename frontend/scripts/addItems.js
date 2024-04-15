// Display-Hide modal
import { hideModal } from "./modal.js";

// node modules

// json file 

// Create Item
const btnAdd = document.querySelector(".modal__btn-Add");
const itemsTitle= document.querySelector(".items__Title");

btnAdd.addEventListener("click", addItems);

function addItems(){
    const itemsTitleValue = itemsTitle.value; 
    items.push(itemsTitleValue);
    fs.writeFile("items.json"), JSON.stringify(items), err =>{
        if (err) throw err;
        hideModal();
    }
}
