alert("Enter you full name please !!");
const name = prompt("Enter your name");
alert("Welcome " + name + " to our website");

 const isOk = confirm("Do you wanna add your name to console ??");

 if (isOk) {
    console.log("User's name is: " + name);
 } else{
    console.log("Permisson denied");    
 }