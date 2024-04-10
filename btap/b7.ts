let pi = 3.14
class Circle {
    private _radius: number;
    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }
    public cvihtron(): number {
        return 2 * pi * this._radius;
    }
    public shtron(): number {
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
