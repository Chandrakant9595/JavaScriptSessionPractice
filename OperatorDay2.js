//Operators

// 1. Airthmatic operator (+, -, *, /, **)
console.log("Airthmatic operations...");
let a = 20;
let b = 10;
console.log("Addition is: "+  (a+b));
console.log("Subtraction is: "+ (a-b));
console.log("Multiplication is: "+ (a*b));
console.log("Division is: "+(a/b));

//Incremaent and Decrement operator (++ and --)
let c = 2;
console.log(c++);
console.log(c);

let d = 5;
console.log(++d);
console.log(d);

console.log("----")

let e = 6;
console.log(e--);
console.log(e);

let f = 8;
console.log(--f);
console.log(f);
console.log("-------");

// 2 Assignment operator (=)
console.log("Assigmnet operator...");
let g = 3;
let h = g+5;
console.log(h);
console.log("-------")

// 3. Comparsion operation (<, >, <=, >=, ==, ===)
console.log("Comparsion operator..."); 
let i = 10;
console.log(i>11);
console.log(i<11);
console.log(i>=11);
console.log(i<=11);
console.log(i==10); //check only value
console.log(i===10); // check value and type
console.log("-----");

// 4. Ternary operator
console.log("Ternary operator...");
let points = 100;
let type = points>30?'Gold':'Silver';
console.log(type);
console.log("-------");

//Logical operator (and(&&), or(||), not(!))
//AND (&&)
console.log("Logical operator AND (&&) ...");
let j = true;
let k = true;
let l = j && k;
console.log(l);
console.log("----");

console.log("Logical operator OR (||) ...");
let m = true;
let n = true;
let o = m||n;
console.log(o);
console.log("------");

console.log("logical NOT(!) ...");
let p = false;
console.log(!p);
console.log("------");

console.log("SWAP NUMBER PROGRAM");
let n1 = 10;
let n2 = 20;

console.log("Befor swap");
console.log("Q is: "+n1);
console.log("R is: "+n2);

let no = n1;
    n1 = n2;
    n2 = no;

console.log("After swap");    
console.log("Q is: "+n1);
console.log("R is: "+n2);
console.log("End operator");