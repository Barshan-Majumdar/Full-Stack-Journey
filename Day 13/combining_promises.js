const firstObject = fetch("https://dummyjson.com/users/1").then(res => res.json());
const secondObject = fetch("https://dummyjson.com/posts/1").then(res => res.json());
const thirdObject = fetch("https://dummyjson.com/products/1").then(res => res.json());

Promise.all([firstObject, secondObject, thirdObject]).then(responese => { //it will return output when all promises are resolved if anyone fails it will go to catch block
    for (const response of responese){
        console.log(response);
    }
}).catch(err => console.log("Error:", err));

Promise.any([firstObject, secondObject, thirdObject]).then(responese => { //it will return output when any one of the promises is resolved
    console.log("First resolved response:", responese);
}).catch(err => console.log("Error:", err));
