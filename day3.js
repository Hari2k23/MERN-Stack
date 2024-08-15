let book = {
    title: "Atomic Habits",
    author: "James Clear",
    yearPublished: 2018,
    getSummary(){
        return `${this.title} has been published by ${this.author} in ${book.yearPublished}`
    }
}
console.log(book.getSummary());

book.age = function(){
    return 2024-this.yearPublished
}
console.log(book.age())

let calculator = {
    x : 3,
    y : 7,
    history:[],
    add: function(){
        result =  this.x + this.y
        this.history.push({"Addition:": this.x + this.y})
        return result
    },
    subtract() {
        result =  this.x - this.y
        this.history.push({"Subtraction:":result})
        return result
    },
    multiply(){
        result =  this.x * this.y
        this.history.push({"Multiplication:":result})
        return result
    },
    divide: function(){
        result =  this.x/this.y
        calculator.history.push({"Division:":result})
        return result
    }
}

calculator.add();
calculator.subtract();
calculator.multiply();
calculator.divide();
console.log(calculator.history);
/*calculator.history = [];
calculator.add = function(){
    calculator.history.push("Addition:", calculator.x + calculator.y);
}
calculator.subtract = function(){
    calculator.history.push("Subtraction:", calculator.x - calculator.y);
}
calculator.multiply = function(){
    calculator.history.push("Multiplication:", calculator.x * calculator.y);
}
calculator.divide = function(){
    calculator.history.push("Division:", calculator.x / calculator.y);
}
console.log(calculator);
calculator.add();
calculator.subtract();
calculator.add();
calculator.add();
console.log(calculator.history);
*/

let person ={
    age : 17,
    up(){
        this.age+=1
    },
    down(){
        if(this.age>0) this.age-=1
    }
}
console.log("Current age:", person.age);
person.up();
console.log("After increment:", person.age);
person.up();
console.log("After increment:", person.age);
person.up();
console.log("After increment:", person.age);
person.down();
console.log("After decrement:", person.age);
person.down();
console.log("After decrement:", person.age);
person.down();
console.log("After decrement:", person.age);

person.greet = function(){
    return `Hello, ${this.name}!`
}
person.name = prompt("Enter a name:");
console.log(person.greet());

let circle = {
    radius: 0,
    area(){
        return `The area of the circle of radius ${this.radius} is ${3.14*this.radius**2}`
    }
}
circle.radius = prompt("Enter the radius of circle:");
console.log(circle.area())

circle.circumference = () =>{
    return `The circumference of the circle of radius ${this.radius} is ${2*3.14*circle.radius}`
}
circle.diameter = function(){
    return `The diameter of the circle of radius ${this.radius} is ${2*this.radius}`
}
console.log(circle.diameter());
console.log(circle.circumference());

let account = {
    name: "Harsha",
    balance: 100000000000000,
    deposit(x){
        account.balance+=x
        return `Balance after depositing: ${this.balance}`
    },
    withdraw(x){
        this.balance-=x
        if(this.balance<0){
            this.balance+=x
            return "Insufficient balance"
    }
        else
            return `Balance after withdrawing: ${this.balance}`
        }
}

console.log(account.balance);
console.log(account.deposit(3));
console.log(account.withdraw(1000000000000000));
console.log(account.withdraw(100));


let fruits = ["Apple", "Orange"];
console.log(fruits);
fruits.push("Mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("Strawberry");
console.log(fruits);

fruits.shift();
console.log(fruits);

function append(arr){
    arr.push(7);
}
arr =[10, 18, 17]
append(arr);
console.log(arr);

function Remove(str){
    str = str.split(" ");
    str.pop();
    return str
}
let str_ = "I am Iron Man. Love you 3000!"
console.log(Remove(str_));

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(days);
days.shift();
console.log(days);
days.push('Sunday', 7);
console.log(days);

let letters = ['A','B','C','D'];
console.log(letters);
function Unshift(arr){
    arr.unshift('Z');
}
Unshift(letters);
console.log(letters);
function Push(arr){
    arr.push('Z');
}
Push(letters);
console.log(letters);

const movies = ['Ghilli', 'Poove Unakaga', 'Master', '96', 'Vinnai Thaandi Varuvaaya'];
movies.push(prompt("Enter your favorite movie:"));
console.log(movies);

movies.splice(2, 1)              //(Index, How many from index)
console.log(movies);


let arr1 = [10, 7, 18, 17, 45];
let squared = arr1.map(temp => temp**2);
console.log(squared);

console.log(arr1.filter(temp => temp%2==0))

let price = [100, 200, 4108, 90000];
let total = price.reduce((accumulator, currentValue) => accumulator+currentValue, 0);
console.log(total);

let stringray = ["Steve Rogers", "Tony Stark", "Thor Odinson", "Bruce Banner", "Natasha Romanoff", "Clint Barton"];
let len = stringray.map(i => i.length);
console.log(len);

stringray.splice(2, 2, "replaced!");
console.log(stringray);

console.log(price.slice(1, 4));

names = ['Ashok', 'Vijaykumar', 'Parthiban', 'Rahul', 'Anjali', 'Abi', 'Harshithah'];
let Anames = names.filter(i => (i[0]=='A' || i[0]=='a'));
console.log(names);
console.log(Anames);

scores = [100, 95, 82, 82, 76];
console.log(scores);
function grade(i){
    if(i>89) return 'A'
    else if(i>79) return 'B'
    else if(i>69) return 'C'
    else return 'D'
}
grades = scores.map(grade);
console.log(grades);

let ages = [100, 95, 82, 82, 76];
average_age = ages.reduce((accumulator, currentValue) => (accumulator+currentValue)/5, 0);
console.log(`Average of ages: ${average_age}`);

fruits_ = fruits.concat(['Mango', 'Strawberry', 'Pineapple']);
fruits_.splice(2, 0, "Banana", "Blueberry");
console.log(fruits_);
