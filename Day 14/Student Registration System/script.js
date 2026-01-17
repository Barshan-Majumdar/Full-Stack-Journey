const nameInput = document.querySelector(".studentName");
const classInput = document.querySelector(".studentClass");
const addressInput = document.querySelector(".addressArea");
const contactInput = document.querySelector(".contactNo");
const form = document.querySelector("form");
form.addEventListener("submit", () => {
    console.log("Name : "+ nameInput.value);
    console.log("Class : "+ classInput.value);
    console.log("Address : "+ addressInput.value);
    console.log("Contact Number : "+ contactInput.value);
});

