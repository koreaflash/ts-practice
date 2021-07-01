"use strict";
var count = 0;
count += 1;
//count = "1";  //error
var message = "hello world";
var done = true;
var nmbers = [1, 2, 3];
var messages = ['hello', 'world'];
//messages.push(1); //error
var myString = undefined;
var myNumber = null;
var color = 'orange';
color = "red";
//color = "yellow"; //error
function sum(x, y) {
    return x + y;
}
sum(1, 2);
var reducer = function (acc, curr) {
    return acc + curr;
};
function sumArray(numbers) {
    return numbers.reduce(reducer, 0);
}
var total = sumArray([1, 2, 3, 4, 5, 6]);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
