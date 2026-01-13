//callback hell example
console.log("Starting the callback hell example.");

//3 functions for addition of numbers from +1 to +3 with callbacks
function add1(num, callback) {
    setTimeout(() => {
        const result = num + 1;
        console.log("After adding 1:", result);
        callback(result);
    }, 1000);
}

function add2(num, callback) {
    setTimeout(() => {
        const result = num + 2;
        console.log("After adding 2:", result);
        callback(result);
    }, 1000);
}

function add3(num, callback) { 
    setTimeout(() => {
        const result = num + 3;
        console.log("After adding 3:", result);
        callback(result);
    }
    , 1000);
}

//Using the functions in a nested manner leading to callback hell
add1(0, (result1) => {
    add2(result1, (result2) => {
        add3(result2, (result3) => {
            console.log("Final Result after all additions:", result3);
        });
    });
});
