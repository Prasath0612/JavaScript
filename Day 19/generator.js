var HrTime=["9:00-10:15","10:15-11:00","11:00-12:30","1:30-3:00","3:30-5:00","5:00-6:00"];
var Hravailablity=["Bc","Free","Free","Bc","Bc","Free"];
var avail=Hravailablity.concat([]);
class interviw{
    constructor(name,id){
        this.name=name;
        this.id=id;
    }
    * schedule() {
        let c=1;
        for (let index = 0; index < avail.length; index++) {
            if (avail[index]=="Free") {
                yield 
                console.log(`Schedule the interview for ${this.name} at ${HrTime[index]}`); 
                avail[index]="Booked";
                c=0;
                break;
            }
        }
      if (c==1) {
        console.log(`No available slot to schedule interview for ${this.name}`)
      }
    }
}
let person1=new interviw("Harish",6547);
res=person1.schedule();
let person2=new interviw("Surya",6590);
res1=person2.schedule();
let person3=new interviw("Kripa",6579);
res3=person3.schedule();
let person4=new interviw("Shankar",6579);
res4=person4.schedule();
const person=[person1,person2,person3,person4];
for (let index = 0; index < person.length; index++) {
    switch (person[index]) {
        case person1:
            for (let index = 0; index < HrTime.length; index++) {
                res.next().value;
            }
            break;
        case person2:
            for (let index = 0; index < HrTime.length; index++) {
                res1.next().value;
            }
            break;
        case person3:
            for (let index = 0; index < HrTime.length; index++) {
                res3.next().value;
            }
            break;
        case person4:
            for (let index = 0; index < HrTime.length; index++) {
                res4.next().value;
            }
            break;
    }
    
}    

//optimized code for the same program
/*var HrTime = ["9:00-10:15", "10:15-11:00", "11:00-12:30", "1:30-3:00", "3:30-5:00", "5:00-6:00"];
var Hravailablity = ["Bc", "Free", "Free", "Bc", "Bc", "Free"];

class Interview {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    *schedule() {
        for (let index = 0; index < HrTime.length; index++) {
            if (Hravailablity[index] == "Free") {
                yield `Schedule the interview for ${this.name} at ${HrTime[index]}`;
                Hravailablity[index] = "Booked";  // Mark the slot as booked
                break;
            }
        }
    }
}

let person1 = new Interview("Harish", 6547);
let person2 = new Interview("Surya", 6590);
let person3 = new Interview("Kripa", 6579);

const persons = [person1, person2, person3];
const generators = persons.map(person => person.schedule());

for (let gen of generators) {
    const result = gen.next();
    if (!result.done) {
        console.log(result.value);
    }
}*/
