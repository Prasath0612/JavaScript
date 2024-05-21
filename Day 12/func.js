function empDetails(id,name,desg,locat="Salem") 
{
    console.log("Employee id:"+id);
    console.log("Employee name:"+name);
    console.log("Employee designation:"+desg);
    console.log("Location:"+locat);
}



function cube(a) {
    return a*a*a;
}


square=function(x)
{
    return x*x;
}
empDetails(1265,"Arvind","Developer","Trichy");
empDetails(1234,"Anand","Tester");
console.log("---------------")
console.log(cube(4));
console.log("---------------")
console.log(square(2));