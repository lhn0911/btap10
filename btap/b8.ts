class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    getWidth(): number {
        return this._width;
    }

    getHeight(): number {
        return this._height;
    }

    setWidth(width: number): void {
        this._width = width;
    }

    setHeight(height: number): void {
        this._height = height;
    }

    dtich(): number {
        return this._width * this._height;
    }

    cvi(): number {
        return 2 * (this._width + this._height);
    }

   
}

let rectangle = new Rectangle(5, 10);

console.log(rectangle.getWidth());
console.log(rectangle.getHeight());
console.log(rectangle.cvi());
console.log(rectangle.dtich());

rectangle.setWidth(8);
rectangle.setHeight(12);

console.log(rectangle.getWidth());
console.log(rectangle.getHeight());
console.log(rectangle.cvi());
console.log(rectangle.dtich());
