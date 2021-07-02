"use strict";
//https://velog.io/@velopert/typescript-basics
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    //radius: number;
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    //width: number;
    //height: number;
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rect = new Rectangle(10, 5);
//console.log(circle.radius); //error
console.log(rect.width);
var shapes = [circle, rect];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
var person = {
    name: '이승호',
    age: 20
};
var expert = {
    name: '이승호',
    skills: ['actionscript', 'react']
};
var tperson = {
    name: '사람'
};
var texpert = {
    name: '개발자',
    skills: ["flash", "actionscript"]
};
var people = [tperson, texpert];
var tcolor = 'red';
var colors = ['red', 'orange'];
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);
function wrap(param) {
    return { param: param };
}
var wraped = wrap(10);
var wraped2 = wrap('10');
var items = { list: ['a', 'b', 'c'] };
var items2 = { list: [1, 2, 3] };
var typeItems = { list: ['a', 'b', 'c'] };
var typeItems2 = { list: [1, 2, 3] };
var Queuue = /** @class */ (function () {
    function Queuue() {
        this.list = [];
    }
    Object.defineProperty(Queuue.prototype, "length", {
        get: function () {
            return this.list.length;
        },
        enumerable: false,
        configurable: true
    });
    Queuue.prototype.enqueue = function (item) {
        this.list.push(item);
    };
    Queuue.prototype.dequeue = function () {
        return this.list.shift();
    };
    return Queuue;
}());
var qu = new Queuue();
qu.enqueue(0);
qu.enqueue(1);
qu.enqueue(2);
qu.enqueue(3);
console.log(qu.dequeue());
console.log(qu.dequeue());
console.log(qu.dequeue());
console.log(qu.dequeue());
