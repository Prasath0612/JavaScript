function post(postName,dno,area,recieved)
{
    this.postName=postName;
    this.dno=dno;
    this.area=area;
    this.recieved=recieved;
}
p=new post("Ajay",514,"Three roads","yes");
console.log(p.postName);
console.log(p.dno);
console.log(p.area);
console.log(p.recieved);
console.log(p)