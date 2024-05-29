function add(arr,val) {
    arr=new Array();
    arr.push(val);
    console.log(arr.toString())
}
touristSpot=add.bind(null,"spots");
let spot=["Kodaikanal","Ooty","Kolli","Yercaud","Valparai","Munnar"];
spot.forEach(x => {
    touristSpot(x);
});