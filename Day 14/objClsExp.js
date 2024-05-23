var bike=class{
    constructor(model,color,...specs)
    {
        this.model=model;
        this.color=color;
        this.specs=specs;
    }
    disp()
    {
        console.log(this.model);
        console.log(this.color);
        for(let i=0;i<this.specs.length;i++)
            console.log(this.specs[i])
    }
}
var bike=class{
    constructor(price,launch)
    {
        this.price=price;
        this.launch=launch;
    }
    disp()
    {
        console.log(this.price);
        console.log(this.launch);
        
    }
}

let ktm=new bike("Duke125","Orange","125cc","Dual abs","45mil");
ktm.disp();
let r15=new bike(230000,2024);
r15.disp();