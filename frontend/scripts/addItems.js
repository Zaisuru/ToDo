// Display-Hide modal
import { hideModal } from "./modal.js";
// Create Item
const btnAdd = document.querySelector(".modal__btn-Add");
const itemsTitle= document.querySelector(".items__Title");

btnAdd.addEventListener("click", addItems);

function addItems(){
    const itemsTitleValue = itemsTitle.value; 
    console.log("salut")
    hideModal();
}
