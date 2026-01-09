const fruits = ['apple', 'baanana', 'cherry', 'date'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (const fruit of fruits) {
    console.log(fruit);
}

for (const index in fruits) {
    console.log(fruits[index]);
}

fruits.forEach(fruit => {
    console.log(fruit);
});

