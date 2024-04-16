// Display-Hide modal
import { hideModal } from "./modal.js";
// Create Item
const modalContainerUpdate= document.getElementById("modalDelete");

export function showModalRemove (){

    const modalTriggers = document.querySelectorAll(".btnModalDelete");
    const btnClose = document.querySelector(".modal__btn-Close");

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", modalUpdate);
    });

    btnClose.addEventListener("click", hideModal);
}

function modalUpdate(){
    console.log("Salut");
    modalContainerUpdate.classList.toggle("active");
}