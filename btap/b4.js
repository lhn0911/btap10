"use strict";
class Vehicle {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo() {
        console.log(this.name);
        console.log(this.year);
        console.log(this.company);
        console.log(this.id);
    }
}
let vehicle = new Vehicle("a", 1, "b", 1);
vehicle.printInfo();
