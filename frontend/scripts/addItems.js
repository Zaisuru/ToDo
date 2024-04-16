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
}

// Create Item
const btnAdd = document.querySelector(".modal__btn-Add");
const itemsTitle= document.querySelector(".items__Title");

btnAdd.addEventListener("click", addItems);

function addItems(){
    const itemsTitleValue = itemsTitle.value; 
    console.log(itemsTitleValue);
        hideModal();
    }
