function types(choice)
{
    if(choice==1)
        {
            console.log("Rest Parameters\n")
            function account(name,accNo,ifsc, ...location) 
            {
                console.log("Name :"+name + "\n Account No. :"+accNo + "\n IFSC code :"+ifsc);
                for (let i = 0; i < location.length; i++) {
                   console.log("Location Details :"+location[i]);
                    
                }
                
            }
            account("Ajay",34526753,"SBIT7865","Kumarnagar","Madurai","Tamilnadu");
        }
    else if(choice==2)
        {
            console.log("\nArrow Functions\n")
            let area=(l,b)=>{let res=(l*b)/2; return res};
            console.log(area(5,12));
        }
    else
        {
            console.log("\nFunction Expression\n")
            let valid=function(yrs)
            {
                if (yrs>=5) {
                    console.log("Eligible for applying citizenship");
                }
                else{
                    console.log("Not eligible");
                }
            }
            valid(7);
        }

}

types(1);
types(2);
types(3)

