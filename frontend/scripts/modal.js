const modalContainer= document.getElementById("modalAdd")
const modalTrigger = document.getElementById("btnModalAdd");
const btnClose = document.querySelector(".modal__btn-Close");

//modalTrigger.addEventListener("click", displayModal);

btnClose.addEventListener("click", hideModal);
//function displayModal(){
  //  modalContainer.classList.toggle("active");
//}
export function hideModal(){
    modalContainer.classList.remove("active");
}

export {modalTrigger};