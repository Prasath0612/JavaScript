var i=0;
function winner() {
    list=["Gowtham","Siva","Mukesh","Dhanush","Mohan"];
    if(i<3) {
         console.log(`${i+1} prize goes to ${list[i]}`);
         d=setTimeout(winner,1500);
         i=i+1;
    }
    else{
        clearTimeout(d);
    }
}
winner();