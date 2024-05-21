let a=20,b=15;
let res=a>b?"a is greater than b":"b is greater than a";
console.log(res);
console.log("-----------------")
let x=["Alex","Bala","Chandru","Dhanush","Gokul","Kumar"];
let y=["Present","On duty","Present",null,"Absent",undefined]
for (let i = 0; i < x.length; i++) {
    let res= y[i]=="Present"?`${x[i]} is present` 
                    :y[i]=="Absent"? `${x[i]} is absent` 
                    :y[i]=="On duty"? `${x[i]} is on Onduty`
                    :"Falsy value";
    console.log(res);
    
}