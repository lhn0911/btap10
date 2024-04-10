class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let vehicle1 = new Vehicle("a", 1, "a");
let vehicle2 = new Vehicle("b", 2, "b");
 console.log(vehicle1.name);
 console.log(vehicle1.year);
 console.log(vehicle1.company);
 
 console.log(vehicle2.name);
 console.log(vehicle2.year);
 console.log(vehicle2.company);