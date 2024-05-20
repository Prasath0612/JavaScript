"use strict";
var name=["Gowtham","Shankar","Mukesh","Siva","Hari"];
var age=[25,15,17,34,37];
function eligible()
{
    for(let i=0;i<name.length;i++)
        {
            if(age[i]>=18)
                {
                    console.log(`${name[i]} is eligible for voting`);
                }
            else
                {
                    console.log(`${name[i]} is not eligible for voting`);
                }
        }
}
eligible();
