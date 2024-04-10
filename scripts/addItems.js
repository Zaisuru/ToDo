// Display-Hide modal
import { hideModal } from "./modal.js";
// Create Item
const btnAdd = document.querySelector(".modal__btn-Add");
const itemsTitle= document.querySelector(".items__Title");

btnAdd.addEventListener("click", addItems);

function addItems(){
    console.log(itemsTitle.value);

    hideModal();
}
