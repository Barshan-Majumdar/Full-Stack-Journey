sessionStorage.setItem('name', 'Barshan Majumdar');
sessionStorage.setItem('age', '21');
sessionStorage.setItem('goal', 'Full Stack JavaScript');

console.log(sessionStorage.length);
console.log(sessionStorage.getItem('name'));
console.log(sessionStorage.key(0)); 

sessionStorage.hobby = 'Coding';
delete sessionStorage.hobby;
sessionStorage.clear();
