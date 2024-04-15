const response = await fetch('../backend/items.json');
const items =  await response.json();

if(items.length == 0){
    console.log("Aucune données dans le fichier");
    const img = document.createElement("img");
}

console.log(items.length)

    for(let i=0 ; i < items.length; i++){
        const toDoContainer = document.getElementById("toDo__Container");
        const containerRow = document.createElement("div");
        const formCheck = document.createElement("div");
        const formInput = document.createElement("input");
        const formLabel = document.createElement("label");
        const formIcon = document.createElement("div");
        const linkEdit = document.createElement("a");
        const iconEdit = document.createElement("i");
        const linkTrash = document.createElement("a");
        const iconTrash = document.createElement("i");

        // Add Class
        containerRow.classList.add("todo__Container_row");
        formCheck.classList.add("form-check");
        formInput.classList.add("form-check-input");
        formLabel.classList.add("form-check-label");
        formIcon.classList.add("form-icon");
        linkEdit.classList.add("fa__form_icon");
        iconEdit.classList.add("fa-solid", "fa-pen-to-square", "modal-trigger")
        linkTrash.classList.add("fa__form_icon", "fa__form_icon_trash", "btnRemove");
        iconTrash.classList.add("fa-solid", "fa-trash");

        // Add attribute
        formInput.setAttribute("type", "checkbox");
        iconEdit.setAttribute("id", "test");
        linkEdit.setAttribute("href", "#");
        linkTrash.setAttribute("href","#")
        formLabel.textContent = items[i].title;

        // Display items
        toDoContainer.appendChild(containerRow);
        containerRow.appendChild(formCheck);
        formCheck.appendChild(formInput);
        formCheck.appendChild(formLabel);
        containerRow.appendChild(formIcon);
        formIcon.appendChild(linkEdit);
        linkEdit.appendChild(iconEdit);0
        formIcon.appendChild(linkTrash);
        linkTrash.appendChild(iconTrash);
    }
