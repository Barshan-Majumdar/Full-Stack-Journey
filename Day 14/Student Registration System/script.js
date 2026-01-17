const mainTag = document.querySelector("main");

const nameInput = document.querySelector(".studentName");
const classInput = document.querySelector(".studentClass");
const addressInput = document.querySelector(".addressArea");
const contactInput = document.querySelector(".contactNo");
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Name : "+ nameInput.value);
    console.log("Class : "+ classInput.value);
    console.log("Address : "+ addressInput.value);
    console.log("Contact Number : "+ contactInput.value);
    const studentCard = document.createElement("div");
    const sName = document.createElement("p");
    sName.innerHTML = nameInput.value;
    const sClass = document.createElement("p");
    sClass.innerHTML = classInput.value;
    const sAddress = document.createElement("p");
    sAddress.innerHTML = addressInput.value;
    const sContact = document.createElement("p");
    sContact.innerHTML = contactInput.value;
    studentCard.appendChild(sName);
    studentCard.appendChild(sClass);
    studentCard.appendChild(sAddress);
    studentCard.appendChild(sContact);

    mainTag.appendChild(studentCard);
    
});


