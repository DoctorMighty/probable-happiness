class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
const nonsquare = new Rectangle(10,15);
console.log(square.area); // 100
console.log("next");
console.log(nonsquare.area);