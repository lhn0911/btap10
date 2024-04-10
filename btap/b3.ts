class Employee {
    constructor(public name: string, protected company: string, private phone: string) {}

    printInfo(): void {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}
let employee = new Employee("a","b","c");

employee.printInfo();
