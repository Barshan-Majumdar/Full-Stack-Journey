//let keyword special features

//Block Scope
{
    let blockVar = "I am inside a block";
    console.log(blockVar); // "I am inside a block"
}
console.log(blockVar); // Error: blockVar is not defined

//No Redeclaration
let redeclareVar = "First Declaration";
// let redeclareVar = "Second Declaration"; // Error: redeclareVar has already been declared

//let can be used for a special scope, but you cant use the let of a scope in global or outer scope
if (true) {
    let scopedVar = "I am scoped to this if block";
    console.log(scopedVar); // "I am scoped to this if block"
}
console.log(scopedVar); // Error: scopedVar is not defined

