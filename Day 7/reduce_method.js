const a = [1, 2, 3, 4, 5];

const sum = a.reduce(function(acc, cur){
    acc = acc + cur;
    return acc;
})

console.log(sum);
