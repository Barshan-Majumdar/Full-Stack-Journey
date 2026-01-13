//promises in javascript
let promise = new Promise(function(resolve, reject) {
    // Simulating an asynchronous operation using setTimeout
    setTimeout(function() {
        let success = true; // Change this to false to simulate an error
        if (success) {
            resolve("The operation was successful!");
        } else {
            reject("There was an error with the operation.");
        }
    }, 2000);
});

promise.then(function(message) {
    console.log("Success:", message);
}).catch(function(error) {
    console.log("Error:", error);
});

