const modalContainer= document.querySelector(".modal-container");
const modalTrigger = document.querySelectorAll(".modal-trigger");
const btnClose = document.querySelector(".modal__btn-Close");

modalTrigger.forEach( trigger => trigger.addEventListener("click", displayModal));

btnClose.addEventListener("click", hideModal);
function displayModal(){
    modalContainer.classList.toggle("active");
}
export function hideModal(){
    modalContainer.classList.remove("active");
}

export {modalTrigger};