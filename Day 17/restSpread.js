function powerRangers(...args)
{
    args.forEach(x => {
        console.log(x);
    });
}
powerRangers("SPD","Jungle flury","Diano Thunder","Mysteric Force")

function minimum(...args) { //...args - rest parameter
    console.log(Math.min(...args));//...args - spread operator
}
minimum(67,34,75,34,24,75);