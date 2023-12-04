// 1. შექმენით მანქანის პროტოტიპი, რომელსაც ექნება ძირითადი მახასიათებლები (მაგ: ბორბლების რაოდენობა,  start მეთოდი). ამ პროტოტიპის გამოყენებით შექმენით რამდენიმე ბრენდის მანქანის ობიექტი სიჩქარის ფროფერთით.

// გააკეთეთ იგივე class-ის გამოყენებით

// const Car = {
//   wheels: 4,
//   start() {
//     return "Car is starting";
//   },
// };

// const BMW = Object.create(Car);
// BMW.speed = 250;

// const Mercedes = Object.create(Car);
// Mercedes.speed = 260;

// console.log(BMW.start());

// class Car {
//   constructor(speed, carName) {
//     this.carName = carName;
//     this.wheels = 4;
//     this.speed = speed;
//   }

//   start() {
//     return `${this.carName} is starting`;
//   }
// }

// const BMW = new Car(260, "BMW");
// const Mercedes = new Car(250, "Mercedes");

// console.log(BMW.start());

// 2. Create a set of JavaScript classes to represent different shapes (e.g., Circle, Square, and Triangle). Each shape class should have a method named calculateArea() that calculates and returns the area of that shape. Use polymorphism to ensure that you can call calculateArea() on any shape object, regardless of its specific class.

// class Shape {
//   calculateArea() {
//     return;
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   calculateArea() {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
// }

// class Square extends Shape {
//   constructor(side) {
//     super();
//     this.side = side;
//   }

//   calculateArea() {
//     return this.side ** 2;
//   }
// }

// class Triangle extends Shape {
//   constructor(base, height) {
//     super();
//     this.base = base;
//     this.height = height;
//   }

//   calculateArea() {
//     return 0.5 * this.base * this.height;
//   }
// }

// const shape = new Shape();

// const circle = new Circle(10);
// const square = new Square(10);
// const triangle = new Triangle(10, 5);

// console.log(circle.calculateArea());
// console.log(square.calculateArea());
// console.log(triangle.calculateArea());

// 3. Create a JavaScript class representing a bank account with private properties for the account holder's name and balance. Implement methods to deposit and withdraw funds, ensuring that the balance is updated securely. Use encapsulation to hide the internal details of the bank account and provide controlled access to its properties.

class BankAccount {
  constructor(accountHolder, balance) {
    this._accountHolder = accountHolder;
    this._balance = balance;

    this.getAccountHolder = () => {
      return this._accountHolder;
    };

    this.getBalance = function () {
      return this._balance;
    };

    this.deposit = (amount) => {
      this._balance += amount;
    };

    this.withdraw = (amount) => {
      if (amount > this._balance) {
        throw new Error("Not enough money on your balance");
      }
      this._balance -= amount;
    };
  }
}

const account = new BankAccount("temo", 100);

console.log(account.getAccountHolder());

console.log(account.getBalance());
account.deposit(50);
console.log(account.getBalance());
try {
  account.withdraw(1000);
} catch (error) {
  console.log(error.message);
}

console.log(account.getBalance());
