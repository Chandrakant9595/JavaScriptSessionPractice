// loops - to avoide the repetative lines of code

// 1. for
for(let i=1; i<=10; i++){
    console.log(i);
    if (i%2===0) {
        console.log('Even no');
    } else {
        console.log('Odd no');
    }
}


// 2.While
let i = 11;
while (i<=20) {
    console.log(i);
    i++;
}


// 3. do-while
let j = 21;
do {
    console.log(j);
    j++;
} while (j<=30);







// 4. for--in 
const person = {
    name: 'chandrakant',
    age: 27,
    address: 'pune'
};
for (let key in person) {
    console.log(key, person[key]);
}

const colour = ['Red','White','Black','Green'];
for (let index in colour) {
    console.log(index, colour[index]); 
}







// 5. for-of - It is used in array
const animals = ['Cat','Tiger','Horse'];
for (let an of animals) {
    console.log(an);
}





// 6. break
let k = 0;
while (k<=10) {
    if (k===5) {
        break;
    }
    console.log(k);
    k++;
}
