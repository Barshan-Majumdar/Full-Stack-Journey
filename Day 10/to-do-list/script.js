const textArea = document.querySelector(".inputArea");
const button = document.querySelector(".buttonArea");
button.addEventListener("click", addItems);
const toDoList = document.querySelector(".list");
function addItems() {
    if (textArea.value == "") return;
    console.log("Button clicked");
    console.log("Input : "+textArea.value);
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("tasks");
    const item = document.createElement("p");
    item.innerHTML = textArea.value;
    toDoDiv.appendChild(item);
    // console.log(toDoDiv);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    toDoDiv.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        toDoList.removeChild(toDoDiv);
        console.log("Task Deleted : " + textArea.value);
    });
    toDoList.appendChild(toDoDiv);
    console.log("Task Added : " + textArea.value);
    textArea.value = "";
};