
let obj = {
    name: "Vincent",
    age: 56,
};

let person = {};
Object.setPrototypeOf(person,obj); 
console.log(Object.getPrototypeOf(obj));

function hello()
{
    console.log("Hello");
}
console.log(Object.getPrototypeOf(hello));