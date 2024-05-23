const match={
    score:345,
    wickets:7,
    batsmanScores:[78,100,25,46,79]
};
Object.defineProperty(match,"highScorer",{
    get()
    {
        return Math.max(...this.batsmanScores);
    }
});
console.log(match.highScorer);
Object.defineProperty(match,"mom",{
    set(val)
    {
        match._mom=val;
    }//,
    // get()
    // {
    //     return this._mom;
    // }
});
match._mom="Hari";
console.log(match._mom);