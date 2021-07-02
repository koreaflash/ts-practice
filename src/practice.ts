//https://velog.io/@velopert/typescript-basics

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
  //radius: number;

  constructor(private radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  //width: number;
  //height: number;

  constructor(public width: number, public height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const circle: Circle = new Circle(5);
const rect: Rectangle = new Rectangle(10, 5);
//console.log(circle.radius); //error
console.log(rect.width);

const shapes: Shape[] = [circle, rect];
shapes.forEach(shape => {
  console.log(shape.getArea());
});

interface Person {
  name: string;
  age?: number;
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: '이승호',
  age: 20
}

const expert: Developer = {
  name: '이승호',
  skills: ['actionscript', 'react']
}

type TPerson = {
  name: string;
  age?: number;
}

type TDeveloper = TPerson & {
  skills: string[];
}

const tperson: TPerson = {
  name: '사람'
}

const texpert: TDeveloper = {
  name: '개발자',
  skills: ["flash", "actionscript"]
}

type People = Person[];
const people: People = [tperson, texpert];

type Color = 'red' | 'orange' | 'yellow';
const tcolor: Color = 'red';
const colors: Color[] = ['red', 'orange'];

function merge<A, B>(a: A, b: B): A & B {
  return { ...a, ...b };
}

const merged = merge({ foo: 1 }, { bar: 1 });
console.log(merged);

function wrap<T>(param: T) {
  return { param };
}
const wraped = wrap(10);
const wraped2 = wrap('10');

interface Items<T> {
  list: T[];
}
const items: Items<string> = { list: ['a', 'b', 'c'] };
const items2: Items<number> = { list: [1, 2, 3] };

type TypeItems<T> = {
  list: T[];
};
const typeItems: TypeItems<string> = { list: ['a', 'b', 'c'] };
const typeItems2: TypeItems<number> = { list: [1, 2, 3] };

class Queuue<T>{
  list: T[] = [];
  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}
const qu = new Queuue<number>();
qu.enqueue(0);
qu.enqueue(1);
qu.enqueue(2);
qu.enqueue(3);
console.log(qu.dequeue());
console.log(qu.dequeue());
console.log(qu.dequeue());
console.log(qu.dequeue());