const firstObject = fetch("https://dummyjson.com/users/1").then(res => res.json());
const secondObject = fetch("https://dummyjson.com/posts/1").then(res => res.json());
const thirdObject = fetch("https://dummyjson.com/products/1").then(res => res.json());

Promise.all([firstObject, secondObject, thirdObject]).then(responese => {
    for (const response of responese){
        console.log(response);
    }
}).catch(err => console.log("Error:", err));