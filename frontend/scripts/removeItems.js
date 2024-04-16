// Display-Hide modal

// Create Item
const modalContainer= document.getElementById("modalDelete");
const btnClose = modalContainer.querySelector(".modal__btn-Close");

export function showModalRemove (){

    const modalTriggers = document.querySelectorAll(".btnModalDelete");

    modalTriggers.forEach(trigger => {
        trigger.addEventListener("click", modalUpdate);
    });

    btnClose.addEventListener("click", hideModal);
}

function modalUpdate(){
    console.log("Salut");
    modalContainer.classList.toggle("active");
}

function hideModal(){
    modalContainer.classList.remove("active");
}