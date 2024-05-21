function mob(model,color,price,...specs)
{
    console.log(model);
    console.log(color);
    console.log(price);
    for (let i= 0; i< specs.length; i++) {
       console.log(specs[i]);
        
    }
}
mob("Redmi","Blue",23500,"6gb Ram","4500 mah","128gb")