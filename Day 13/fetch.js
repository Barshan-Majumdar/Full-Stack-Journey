console.log("fetching data...");

const promiseObject = fetch("https://dummyjson.com/ip");

promiseObject.then(obj => obj.json().then(data => console.log(data)));
promiseObject.catch(err => console.log("Error:", err));
