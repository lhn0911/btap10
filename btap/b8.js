"use strict";
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
    setWidth(width) {
        this._width = width;
    }
    setHeight(height) {
        this._height = height;
    }
    dtich() {
        return this._width * this._height;
    }
    cvi() {
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
