const district={
    name:"Madurai",
    language:"Tamil",
    famous:function()
    {
        console.log("Temples");
        console.log("Food")
    }
};

Object.defineProperties(district,{"name":{value:"Cbe",writable:true},"language":{value:"Kongu Tamil",writable:true}});
console.log(district.name);
console.log(district);
district.name="Chennai";
console.log(district.name);