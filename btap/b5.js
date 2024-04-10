"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(this.id);
        console.log(this.name);
        console.log(this.employees);
    }
}
let department = new Department(1, "aaa", ["a", "b", "c"]);
department.describe();
