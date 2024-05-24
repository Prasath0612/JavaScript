class keyboard
{
    constructor(letters,numbers)
    {
        this.letters=letters;
        this.numbers=numbers;
    }
    disp()
    {
        console.log(`${this.letters}  ${this.numbers}`);
    }
}
let key=new keyboard("A-z","0-9");

splchar.prototype=key;
function splchar(sc,func)
{
    this.sc=sc;
    this.func=func;
}

splchar.prototype.show=function()
{
    console.log(`${this.sc} ${this.func}`);
}
let k=new splchar("!-_","f1-f12");
k.disp();
k.show();