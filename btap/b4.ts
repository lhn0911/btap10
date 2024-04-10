class Vehicle {
    constructor(
        public name: string,
        protected year: number,
        private company: string,
        public id: number
    ) {}

    printInfo(): void {
        console.log(this.name);
        console.log(this.year);
        console.log(this.company);
        console.log(this.id);
    }
}
let vehicle = new Vehicle("a", 1, "b", 1);
vehicle.printInfo();
