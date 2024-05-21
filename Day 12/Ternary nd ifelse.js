function ternary(city)
{
    let fam=city=="Tirunelvi"? " Halwa" :
            city=="Coimbatore" ? "Education Hub" :
            city=="Tiruppur" ? "Textiles" :
            city=="Chennai" ? "IT Hub" : "No data for this city";
    return fam;
}

function toll(vehicle)
{
    if (vehicle=="Bus")
        {
            console.log("Entry Fee : Rs.150");
        }
    else if(vehicle=="Car")
        {
            console.log("Entry Fee : Rs.100");
        }
    else if(vehicle=="Truck")
        {
            console.log("Entry Fee : Rs.200");
        }
    else
    {
        console.log("Free Entry");
    }
}

console.log(" Ternary Operator :");
console.log(ternary("Coimbatore"));
console.log(ternary("Salem"));
console.log("    ");
console.log("--------------------");
console.log(" If Else ");
toll("Car");
toll("Bike");