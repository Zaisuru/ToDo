const modalContainer= document.getElementById("modalAdd");
const modalTrigger = document.getElementById("btnModalAdd");
const btnClose = modalContainer.querySelector(".modal__btn-Close");

modalTrigger.addEventListener("click", displayModal);

btnClose.addEventListener("click", hideModal);
function displayModal(){
    modalContainer.classList.toggle("active");
}
function hideModal(){
    modalContainer.classList.remove("active");
    console.log("salut");
}

//export {modalTrigger};