const acc=
{
    accName:"Raja",
    "acc Num":34526354,
    balance:2000,
    checkBal:function (debit)
    {
        this.debit=debit;
        let bill=this.balance-this.debit;
        if (bill>0) {
            console.log("Transaction Completed.\n Balance :"+bill);
        } else {
            console.log("Insufficient balance for transaction");
        }
    },
    eligible(credsc)
    {
        if(credsc>550)
            console.log("You are eligible for loan");
        else
            console.log("Not eligible");
    }
}
console.log("Account Holder 1")
console.log(acc);
acc.checkBal(1565);
let accHol2=Object.create(acc);
accHol2.name="Sandy";
accHol2.accNo=3654782;
accHol2.balance=5000;
console.log("Account Holder 2");
console.log(accHol2);
accHol2.checkBal(1327);
console.log("Property contains multiple words:")
console.log(acc["acc Num"]);
console.log("Without using function keyword")
acc.eligible(670);
accHol2.eligible(470);
