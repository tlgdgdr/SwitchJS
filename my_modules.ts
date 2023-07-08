export function addNum(a: number, b: number): number {
    return a+b;
}

export function subNum(a: number, b: number): number {
    return a-b;
}

export class Person {
    constructor(public name: string,public age: number) {}

    sayHello(): void {
        console.log(`Hello, I am ${this.name} and I am ${this.age}`);
    }
}