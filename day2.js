alert("Hello, World!");

let str = "MERN Stack";
let int = 18;
let bool = true;
console.log("String:", str);
console.log("Number:", int);
console.log("Boolean:", bool);

let x = 7;
let y = 18;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

let str1 = "Con";
let str2 = "Cat";
console.log(str1+str2);

let unassigned = undefined;
let long = 34n;
let z = null;
let object = {};
console.log(typeof str);
console.log(typeof int);
console.log(typeof bool);
console.log(typeof unassigned);
console.log(typeof long);
console.log(z);
console.log(object);


// This is a single line comment
/* This is a
   Multi line comment */

console.log("Hello!")
console.log("World!");
console.log("Hello!"); console.log("World!");
//console.log("Hello!") console.log("World!");

for(let i=1; i<5; i++){
    for (let j=1; j<5; j++){
        console.log('*');
    }
}

let a, b, c, d;

document.write("External Script");


s = 3000;
console.log("Value of undeclared variable:", s);

//Strict Mode - Can't use undeclared variables
"use strict";
//new_ = 3000;

let new__ = 18.7;
//delete new__;

hs = 3000;
"use strict";
hs = 3000;

"use strict";
const pi = 3.14;
console.log(pi);




const sachin = 100;
//sachin = 200;

let X;
console.log("Value of not intialised variable:", X);

console.log("Type of Number:", typeof int_);
console.log("Type of String:", typeof str_);
console.log("Type of Boolean value:", typeof bool_);

let oldVariable = 10;
let newVariable = oldVariable;
console.log(oldVariable);
console.log(newVariable);


let Str_ = "MERN Stack";
let Num_ = 18;
let Bool_ = true;
let Unassigned_ = undefined;
let Long_ = 34n;
let Null_ = null;
let Object_ = {};

console.log(typeof Str_);
console.log(typeof Num_);
console.log(typeof Bool_);
console.log(typeof Unassigned_);
console.log(typeof Long_);
console.log(typeof Null_);
console.log(typeof Object_);


let id = Symbol(17);
console.log(id);
console.log(`Type of Symbol data-typed variable: ${typeof id}`);

let variable = null;
console.log(`Type of Null data-typed variable: ${typeof variable}`);

//Var
console.log("var - Before Intialising:", ab);
{
    var ab = 5;
    console.log("var - Inside Block:", ab);
}
console.log("var - Outside block:", ab);
//let
//console.log("let - Before Intialising:", cd);
{
    let cd = 4;
    console.log("let - Inside Block:", cd);
}
//console.log("let - Outside block:", cd);

let S = "3000";
let H = +S;
console.log(typeof S);
console.log(typeof H);
let w = "100";
console.log(typeof w);
let n = Number(w);
console.log(typeof n);
let f = parseFloat(w);
console.log(typeof f);
let i = parseInt(w);
console.log(typeof i);

var Bool = true;
var String_ = String(Bool);             //boolean -> String
console.log(typeof String_);
var Bool = Boolean(String_);            //String -> boolean
console.log(typeof Bool);

console.log(3+10);
console.log(10-3);
console.log(14*24);
console.log(14/2);

var N = 100;
console.log(N++);
var N = 100;
console.log(N--);
var N = 100;
console.log(++N);
var N = 100;
console.log(--N);

console.log(100 + 200/10 - 3 * 10);     //Precedence => () ** */ +- left to right


let num1 = 3;
let num2 = 5;
console.log(num1==num2);
console.log(num1!=num2);
console.log(num1>=num2);
console.log(num1>num2);
console.log(num1<=num2);
console.log(num1<num2);
 
let n1 = 100
let s1 ="100"
console.log(n1==s1);
console.log(n1===s1);

console.log("Apple"<"apple");          //Lowercase precedes
console.log("Apple">"pineapple");
console.log("apple">"pineapple");
console.log("2">"12");
console.log("Be">"Bee");

console.log(n1!=s1);
console.log(n1!==s1);

console.log(null==undefined);
console.log(null===undefined);


let input = prompt("Enter a number:");
if(input%2==0)
    console.log(`${input} is an even number`)
else
    console.log(`${input} is an even number`)

if(input%2==0){
    if(input>0) console.log(`${input} is a positive even number`)
    else if(input<0) console.log(`${input} is a negative even number`)   
    else console.log(`${input} equals zero`)
}    
else{
    if(input>0) console.log(`${input} is an positive odd number`)
    else if(input<0) console.log(`${input} is a negative odd number`)   
    else console.log(`${input} equals zero`)
}

let temp = 'Harsha';
console.log(temp=='harsha'?"Yes":"No");

let Null = null;
console.log(Null? Null: 1);

var val;
(input>100)?val = 1: val = 0;
console.log(val);


if(5>3 && 5%5==1)
    console.log("AND");
else if(5>32 || 3>5)
    console.log("OR");
else if(!0)
    console.log("NOT");

if(input>90 && input<100) console.log("A+");
else if(input>80 && input<=89) console.log("A");
else if(input>70 && input<=79) console.log("B+");
else if(input>60 && input<=69) console.log("A+");
else console.log("C");

let value = true;
console.log(!value);

console.log(13&&14);
console.log(7||5);
console.log(!10);


function sum(a, b){
    return a+b;
}
var result = sum(3, 10);
console.log(`Sum: ${result}`);

function area(length, breadth){
    return length*breadth;
}
console.log(`Area of a rectangle: ${area(13,14)}`)

var fn = function(){console.log("Function Expression!")};
fn();

function empty(){return }
console.log(empty());

function s2(a=10,b=10){
    return a*b;
}
console.log(s2());
console.log(s2(15,15));


let greet = (name) => {return `Hello, ${name}!`};
console.log(greet('Vijay')); 

let _n1 = +prompt("Enter a number:");
let _n2 = +prompt("Enter another number:");
let add = (_n1, _n2) => {return _n1+_n2;}
console.log(`Sum: ${add(_n1, _n2)}`);

let isEven = (n) => (n%2==0)?"Even":"Odd"
console.log(isEven(77));

let maxValue = (m, n) => m>n?m:n
console.log("Greatest: ", maxValue(18, 17));

let myObject = {
    value:10,
    multiplyTraditional(val){console.log(val*this.value)},
    multiplyArrow : (val) => {console.log(val*myObject.value)}   //this doesn't work inside an arrow function
}
myObject.multiplyTraditional(45);
myObject.multiplyArrow(45);
