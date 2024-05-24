const stream=["BSc","BCom","BBA"];
const bsc=[];
bsc[0]="BCA"
bsc[1]="CS";
bsc[2]="IT";
bsc[3]="CT";
bsc[4]="DA";
const bcom=["FT","CA","PA","History"];
const bba=["Merit","Management"];

// console.log(bsc);
// console.log(bsc.length);
// bsc.length=3;
// console.log(bsc);
// console.log(bsc[3]);
// console.log(bsc[4]);

function courseSelection(choice)
{
    switch (choice) {
        case "BSc":
            console.log("Available courses in BSc ")
            for(let i=0;i<bsc.length;i++)
                console.log(bsc[i]);
            break;
        case "BCom":
            console.log("Available courses in BCom ")
            for(let i=0;i<bcom.length;i++)
                console.log(bcom[i]);
            break;
        case "BBA":
            console.log("Available courses in BBA ")
            for(let i=0;i<bba.length;i++)
                console.log(bba[i]);
            break;
        default:
            console.log("Enter valid stream");
            break;
    }
    
}
courseSelection("BSc");
courseSelection("BCom");
