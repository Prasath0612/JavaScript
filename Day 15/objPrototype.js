function vacancy(role,salary,opening)
{
    this.opening=opening;
    this.role=role;
    this.salary=salary;
}
vacancy.prototype.bond=function(b)
{
    console.log(`${this.opening} openings available for ${this.role} with the ${this.salary} salary of ${b} years bond.`)
}
let obj=new vacancy("Software Developer",30000,6);
obj.bond(4);
let obj1=new vacancy("Tester",20000,3);
obj1.bond(1);


