function x(){
    console.log("This is function x");
}

function y(x){
    x();
}

y(x);

// y is a higher order function  and x is a callback function