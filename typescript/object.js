"use strict";
let user = {
    username: "John",
    age: 30
};
console.log(user.username);
console.log(user.age);
let num = ["ab", "cd",];
num[3] = "45";
let num1 = [5, 3,];
num1[3] = 45;
let numstr = [];
numstr[0] = "10";
numstr[1] = 10;
let emp1 = {
    id: 1,
    ename: "Sumit",
    salary: 200000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
    getSalary: function () {
        return this.salary;
    },
    getDep: function () {
        return this.dep;
    },
};
let emp2 = {
    id: 2,
    ename: "John",
    salary: 400000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
    getSalary: function () {
        return this.salary;
    },
    getDep: function () {
        return this.dep;
    },
};
let emp3 = {
    id: 3,
    ename: "Amit",
    salary: 100000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
    getSalary: function () {
        return this.salary;
    },
    getDep: function () {
        return this.dep;
    },
};
function empname(em) {
    return em.getName;
}
// empname("hello");
empname(emp1);
let users = [
    {
        id: 1,
        email: "hhrehd",
        password: "1234",
    },
    {
        id: 1,
        email: "hhrehd",
        password: "1234",
    },
    {
        id: 1,
        email: "hhrehd",
        password: "1234",
    }
];
// OR | 
let some;
let arr2 = ["3ffgf", "3"];
let arr3 = ["3ffgf", 3];
