class Student {
    constructor(public id: number, public age: number, public email: string) {
    }
}

let students: Student[] = [];
students.push(new Student(1, 20, "student1@example.com"));
students.push(new Student(2, 22, "student2@example.com"));
students.push(new Student(3, 21, "student3@example.com"));
students.forEach((item)=>{
    console.log(item.id);
    console.log(item.age);
    console.log(item.email);
})
