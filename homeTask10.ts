import { addNum, subNum, Person } from "./my_modules";

class Animal {
    makeSound() {
      console.log("I am an Animal!");
    }
}
class Cat extends Animal {
    makeSound(): void {
        console.log("meow!");
    }
}
class Dog extends Animal {
    makeSound(): void {
       super.makeSound();
       console.log("woof!");
    }
}
const puppy = new Dog();
const kitty = new Cat();
puppy.makeSound();
kitty.makeSound();

interface DB {
    ID: number,
    name: string,
    description: string 
}

class connectionPoint implements DB {
    ID: number;
    name: string;
    description: string;
    
    constructor(id:1234, name:'tolga', description:'demo') {
        this.ID = id;
        this.name = name;
        this.description = description;
    }
}

class Stack<T> {
    private items: T[] = [];

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop());
console.log(numberStack.peek());

console.log(addNum(2,4));
console.log(subNum(5,3));
const p = new Person('Tolga', 28);
p.sayHello();

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor):any {
    const originalMethod = descriptor.value;
    if(typeof originalMethod ===  'function') {
        descriptor.value = function (...args: any[]) {
            console.log(`Calling ${propertyKey} with arguments: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);  
            return result;
        };
    }
    return descriptor;
  }
  
  class Calculator {
    @log // i couldn't fix it :(
    add(a: number, b: number) {
      return a + b;
    }
  }
  
  const calc = new Calculator();
  calc.add(2, 3);



function getValueByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  interface Human {
    name: string;
    age: number;
  }
  
  const human: Human = {
    name: "Tolga",
    age: 28
  };
  
  const nameValue: string = getValueByKey(human, "name");
  const ageValue: number = getValueByKey(human, "age");

  console.log(nameValue);
  console.log(ageValue);