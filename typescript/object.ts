interface User{
    username:string,
    age:number,
}
let user:User={
    username:"John",
    age:30
}
console.log(user.username);
console.log(user.age);

let num:string[]=["ab","cd",]
num[3] = "45";

let num1:number[]=[5,3,]
num1[3] = 45;

let numstr:number[] | string[] = [];
numstr[0] = "10";
numstr[1] = 10;
// console.log(numstr[4]);

interface Emp{
    id:number,
    ename:string,
    salary:number,
    dep:string,
    getName():string,
    getSalary():number,
    getDep():string,
}
let emp1:Emp={
    id:1,
    ename:"Sumit",
    salary:200000,
    dep:"IT",
    getName:function(){
        return this.ename;
    },
    getSalary:function(){
        return this.salary;
    },
    getDep:function(){
        return this.dep;
    },   
}
let emp2:Emp={
    id:2,
    ename:"John",
    salary:400000,
    dep:"IT",
    getName:function(){
        return this.ename;
    },
    getSalary:function(){
        return this.salary;
    },
    getDep:function(){
        return this.dep;
    },   
}
let emp3:Emp={
    id:3,
    ename:"Amit",
    salary:100000,
    dep:"IT",
    getName:function(){
        return this.ename;
    },
    getSalary:function(){
        return this.salary;
    },
    getDep:function(){
        return this.dep;
    },   
}
function empname(em:Emp){
    return em.getName
}
// empname("hello");
empname(emp1);

//array of object
// let employe:Emp[]=[emp1,emp2,emp3];

interface User2{
    id:number,
    email:string,
    password:string,
}

let users:User2[]=[
    {
        id:1,
        email:"hhrehd",
        password:"1234",
    },
    {
        id:1,
        email:"hhrehd",
        password:"1234",
    },
    {
        id:1,
        email:"hhrehd",
        password:"1234",
    }
]

// OR | 

let some:number | string;
let arr2:number[] | string[] = ["3ffgf","3"]
let arr3:(number | string)[] = ["3ffgf",3]
