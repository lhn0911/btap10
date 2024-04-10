"use strict";
let pi = 3.14;
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    cvihtron() {
        return 2 * pi * this._radius;
    }
    shtron() {
        return pi * this._radius * this._radius;
    }
}
const circle = new Circle(5);
console.log(circle.radius);
console.log(circle.shtron());
console.log(circle.cvihtron());
circle.radius = 7;
console.log(circle.radius);
console.log(circle.shtron());
console.log(circle.cvihtron());
