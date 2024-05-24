const city = { 
	name: "Salem",
    pin:636009
} 
const state = { 
	stateName: "Tamilnadu",
    country:"India"
} 

Object.defineProperty(city,"name",{
    enumerable:false,
    configurable:false,
    writable:false
})
Object.defineProperty(state,"country",{
    enumerable:false,
    configurable:false,
    writable:true
})
const descriptor1 = Object.getOwnPropertyDescriptor(city, 'name',city,"pin"); 
//const descriptor2 = Object.getOwnPropertyDescriptor(city, 'pin'); 
const descriptor3 = Object.getOwnPropertyDescriptor(state, 'stateName');
const descriptor4 = Object.getOwnPropertyDescriptor(state, 'country'); 
console.log(descriptor1.value); 
console.log(descriptor1.enumerable); 
console.log(descriptor1.configurable);
console.log(descriptor1.writable)
// console.log(descriptor2.value);
// console.log(descriptor2.enumerable); 
// console.log(descriptor2.configurable);
// console.log(descriptor2.writable)
console.log(descriptor3.value);
console.log(descriptor3.enumerable); 
console.log(descriptor3.configurable);
console.log(descriptor3.writable)
console.log(descriptor4.value);
console.log(descriptor4.enumerable); 
console.log(descriptor4.configurable);
console.log(descriptor4.writable)


