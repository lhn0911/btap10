class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }

    public describe(): void {
        console.log( this.id);
        console.log(this.name);
        console.log(this.employees);
    }
}
let department = new Department(1, "aaa", ["a", "b", "c"]);
department.describe();
