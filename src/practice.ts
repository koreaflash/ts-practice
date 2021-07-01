let count = 0;
count += 1;
//count = "1";  //error

const message: string = "hello world";
const done: boolean = true;
const nmbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];
//messages.push(1); //error

let myString: String | undefined = undefined;
let myNumber: number | null = null;
let color: 'red' | 'orange' = 'orange';
color = "red";
//color = "yellow"; //error

function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

const reducer = (acc: number, curr: number): number => {
  return acc + curr;
}

function sumArray(numbers: number[]): number {
  return numbers.reduce(reducer, 0);
}

const total = sumArray([1, 2, 3, 4, 5, 6]);

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(shape => {
  console.log(shape.getArea());
});