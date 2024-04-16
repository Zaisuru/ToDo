//import { hideModal } from "./modal.js";

const modalContainer = document.getElementById("modalUpdate");
const btnClose = modalContainer.querySelector(".modal__btn-Close");

export function showModalUpdate (){
    const modalTriggers = document.querySelectorAll(".btnModalUpdate");
    const labelItems = document.getElementById("labelUpdate");

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", modalUpdate);
    });

    btnClose.addEventListener("click", hideModal); // Ajoutez un écouteur pour le bouton de fermeture
}

function modalUpdate(){
    modalContainer.classList.toggle("active");
}

function hideModal(){
    modalContainer.classList.remove("active");
    console.log("salut");
}