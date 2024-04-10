// Display-Hide modal
const modalContainer= document.querySelector(".modal-container");
const modalTrigger = document.querySelectorAll(".modal-trigger");
const btnClose = document.querySelector(".modal__btn-Close");

modalTrigger.forEach( trigger => trigger.addEventListener("click", displayModal));

btnClose.addEventListener("click", hideModal);
function displayModal(){
    modalContainer.classList.toggle("active");
}
function hideModal(){
    modalContainer.classList.remove("active");
}
// Create Item
const btnAdd = document.querySelector(".modal__btn-Add");
const itemsTitle= document.querySelector(".items__Title");

btnAdd.addEventListener("click", addItems);

function addItems(){
    console.log(itemsTitle.value);

    hideModal();
}
