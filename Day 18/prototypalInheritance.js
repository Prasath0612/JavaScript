const banglore={
    developers:45,
    teamLead:10,
    testers:15,
    disp:function(){
        let total=this.developers+this.testers+this.teamLead;
        console.log(`No of employees in Banglore branch is ${total}`);
    }
}
const salem={
    developers:20,
    teamLead:4,
    testers:10,
    __proto__:banglore
}
salem.disp();
banglore.disp();