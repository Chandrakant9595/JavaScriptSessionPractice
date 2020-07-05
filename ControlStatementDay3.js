// 1. If else statement

let hour = 10;

if(hour>=6 && hour<=12){
    console.log("Good Morning");
}
else if(hour>=12 && hour<=18){
    console.log("Good Afternoon");
}
else{
    console.log("Good Evening");
}


// if else positive number
let number = 12;

if (number>=0) {
    console.log("Positive Number");
} else {
    console.log("Negitive Number");
}



// even or odd
let no = 3;
if (no%2===0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}



// WAP to find greast number form 3 
let a = 50;
let b = 20;
let c = 9;

if(a>b && a>c){
    console.log("A is greater");
}
else if (b>c) {
    console.log("B is greater");
} else {
    console.log("C is greater");
}


// 2. Switch statement

let role = 'Admin';
switch (role) {
    case 'Guest':
        console.log('Guest user');
        break;

    case 'Admin':
        console.log('Admin user');
        break;    

    case 'Vendor':
        console.log('Vendor user');
        break;
        
    default:
        console.log('No user');
        break;
}

if(role==='Guest') console.log('Guest user');
else if(role==='Admin') console.log('Admin user');
else if(role==='Vendor') console.log('Vendor user');
else console.log('No user');


