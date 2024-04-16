import { hideModal } from "./modal.js";

const modalContainerUpdate= document.getElementById("modalUpdate");

export function showModalUpdate (){

    const modalTriggers = document.querySelectorAll(".btnModalUpdate");
    const btnClose = document.querySelector(".modal__btn-Close");

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", modalUpdate);
    });
}

function modalUpdate(){
    console.log("Salut");
    modalContainerUpdate.classList.toggle("active");
}