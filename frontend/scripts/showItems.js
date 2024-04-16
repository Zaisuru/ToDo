import { showModalUpdate } from "./updateItems.js";
import { showModalRemove } from "./removeItems.js"

const response = await fetch('../backend/items.json');
const items =  await response.json();



const toDoContainer = document.getElementById("toDo__Container");
/* check if items empy */
if(items.length == 0){
    const img = document.createElement("img");
    img.classList.add("emptyItems");
    img.setAttribute("src","pictures/NoItems.png");
    img.setAttribute("alt", "Empty items");
    toDoContainer.appendChild(img);
}else{
    for(let i=0 ; i < items.length; i++){
        const containerRow = document.createElement("div");
        const formCheck = document.createElement("div");
        const formInput = document.createElement("input");
        const formLabel = document.createElement("label");
        const formIcon = document.createElement("div");
        const linkEdit = document.createElement("a");
        const iconEdit = document.createElement("i");
        const linkTrash = document.createElement("a");
        const iconTrash = document.createElement("i");

        containerRow.classList.add("todo__Container_row");
        formCheck.classList.add("form-check");
        formInput.classList.add("form-check-input");
        formLabel.classList.add("form-check-label");
        formIcon.classList.add("form-icon");
        linkEdit.classList.add("fa__form_icon", "btnModalUpdate", "modal-trigger");
        iconEdit.classList.add("fa-solid", "fa-pen-to-square")
        linkTrash.classList.add("fa__form_icon", "fa__form_icon_trash", "btnModalDelete", "modal-trigger");
        iconTrash.classList.add("fa-solid", "fa-trash");

        formInput.setAttribute("type", "checkbox");
        linkEdit.setAttribute("href","#");
        linkTrash.setAttribute("href","#");
        linkEdit.setAttribute("id", items[i].title)
        formLabel.textContent = items[i].title;

        // Display items
        toDoContainer.appendChild(containerRow);
        containerRow.appendChild(formCheck);
        formCheck.appendChild(formInput);
        formCheck.appendChild(formLabel);
        containerRow.appendChild(formIcon);
        formIcon.appendChild(linkEdit);
        linkEdit.appendChild(iconEdit);
        formIcon.appendChild(linkTrash);
        linkTrash.appendChild(iconTrash);

    };
    
    showModalUpdate();
    showModalRemove();
}