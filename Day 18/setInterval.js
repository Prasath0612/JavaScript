var i=0;
function select() {
    list=["Arun","Bala","Akilesh","Shankar","Mohan","Prem"];
    if (i<=5) {
        console.log(`${list[i]}`);
        i=i+1;
    }
    else{
        clearInterval(d);
    }
}
var d=setInterval(select,1000);