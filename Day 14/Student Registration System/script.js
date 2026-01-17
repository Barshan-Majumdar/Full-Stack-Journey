const table = document.getElementById("studentTable");

// const mainTag = document.querySelector("main");
const tableBody = document.querySelector("tbody");
const nameInput = document.querySelector(".studentName");
const classInput = document.querySelector(".studentClass");
const addressInput = document.querySelector(".addressArea");
const contactInput = document.querySelector(".contactNo");
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Name : " + nameInput.value);
    console.log("Class : " + classInput.value);
    console.log("Address : " + addressInput.value);
    console.log("Contact Number : " + contactInput.value);
    // const studentCard = document.createElement("div");
    // const sName = document.createElement("p");
    // sName.innerHTML = nameInput.value;
    // const sClass = document.createElement("p");
    // sClass.innerHTML = classInput.value;
    // const sAddress = document.createElement("p");
    // sAddress.innerHTML = addressInput.value;
    // const sContact = document.createElement("p");
    // sContact.innerHTML = contactInput.value;
    // studentCard.appendChild(sName);
    // studentCard.appendChild(sClass);
    // studentCard.appendChild(sAddress);
    // studentCard.appendChild(sContact);
    const row = document.createElement("tr");
    const tName = document.createElement("td");
    tName.textContent = nameInput.value;
    const tClass = document.createElement("td");
    tClass.textContent = classInput.value;
    const tAddress = document.createElement("td");
    tAddress.textContent = addressInput.value;
    const tContact = document.createElement("td");
    tContact.textContent = contactInput.value;


    row.appendChild(tName);
    row.appendChild(tClass);
    row.appendChild(tAddress);
    row.appendChild(tContact);
    // row.appendChild(deleteButton);

    tableBody.appendChild(row);
    if (tableBody.children.length > 0) {
        table.style.display = "table";
    }

    // mainTag.appendChild(studentCard);
    form.reset();
});




