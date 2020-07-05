//Download VCCode application for writing the javascripts code
//For execute JS we need to installed the live server (use Extension option and installed)

//Data types
// 1. primative - string, number, boolean, undefined, null 
//2. reference type - objects, arrays, functions

// 1. primative data type
let name = 'Chandrakant'; // sting
console.log(name);        // print string
let age = 27;             // number
console.log(age);       
console.log(name + ' ' + age); // combine and print

let flag = true; //boolean
console.log(flag);

let price;  //undefined
console.log(price);
let wheel = undefined;
console.log(wheel);

let model = null; //null
console.log(model);

// 2. reference type - objects, arrays, functions
// objects - 
let person = {
    userName: "Amol",
    password: "SLK@123"
};
console.log(person);
console.log(person.userName); //dot notiation is used for print particular element
console.log(person.password);
person['userName'] = 'Pravin' //change name
console.log(person);
console.log(person.userName);

//array - 
let lang = ['java','c','c++'];
console.log(lang);
console.log(lang.length);

lang[1] = 'Ruby'; // change array element
console.log(lang);
console.log(lang[1]); //print specfice index 
 
//functions
//1
function getName(){
    //no parameter passs
    console.log("No parameter passed function")
}
getName();

//2
function userName(um){
    console.log('Hello '+um);
}
userName('Mayuri_Parameter_Passed');

//return from function
function add(n1,n2){
    return n1+n2;
}
let sum = add(2,4);
console.log(sum);
console.log(add(5,8));

function squareRoot(num1){
    let root = num1*num1;
    return root;
}
console.log(squareRoot(5));
console.log(squareRoot(3));
