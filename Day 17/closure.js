function iexceed()
{
    let b1="Banglore";
    let strength=450;
    return function iexceedSalem() {
        let b2="Salem";
        let strength1=70;
        console.log(`No of employees in ${b1} branch is ${strength} \n No of employees in ${b2} is ${strength1}`);
    }
}
const salem=iexceed();
salem();
salem();
