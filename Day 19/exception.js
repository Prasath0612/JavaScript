const chair=710,cot=8500,pillow=670,bed=5750,dressingTable=8900,diningTable=6500;
class bill{
    constructor(noChair,noCot,noPillow,noBed,noDt,noDiningT) {
    this.noChair=noChair;
    this.noBed=noBed;
    this.noCot=noCot;
    this.noDiningT=noDiningT;
    this.noPillow=noPillow;
    this.noDt=noDt;
    }
    cost(){
        let total=((this.noBed*bed)+(this.noChair*chair)+(this.noCot*cot)+(this.noDiningT*diningTable)+(this.noDt*dressingTable)+(this.noPillow*pillow));
        console.log(`Total bill = ${total}`);
        return total;
        }
    except(amt,balance) {
        try {
            if (amt>balance) {
                throw("Insuffficient Balance");
                }
            else{
                console.log(`Balance amt is ${balance-amt}`);
                }
        } catch (error) {
            console.log(error);
        }
    }
}

const c1=new bill(4,1,2,1,0,2);
//sufficient balance
let b=c1.except(c1.cost(),50000);
//insufficient balance
let d=c1.except(c1.cost(),25000);