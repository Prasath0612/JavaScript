const brand={
    name:"Redmi"  
}
const mob={
    name:"Samsung",
    display:function(model,price,ram)
    {
        this.model=model;
        this.price=price;
        this.ram=ram;
        console.log(`${this.name} ${this.model} ${this.price} ${this.ram}`);
    }
}
console.log("For Mob object");
//display the data of mob object
mob.display("S22 ultra",25000,8);
console.log("For brand object")
//display the data of brand object
mob.display.bind(brand)("Note 9 pro",15000,6);
mob.display.apply(brand,["Note 10 pro",17500,8]);