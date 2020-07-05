const num = [1,2,3,4,5];
console.log(num);

//Remove last element from the array
console.log('Remove last element from the array');
const last = num.pop();
console.log(last);
console.log(num);

//Remove first element from the array
console.log('Remove first element from the array');
const first = num.shift();
console.log(first);
console.log(num);

//Remove middle element from the array
console.log('Remove middle element from the array');
num.splice(1,1);
console.log(num);
console.log('----------------------------------------');



//Remove all element from an array
// 1. using black array
console.log('1. using black array');
let no1 = [1,2,3,4,5,6];
console.log(no1);
no1 = [];
console.log(no1);

// 2. using length method
console.log('using length method');
let no2 = [1,2,3,4,5,6];
no2.length = 0;
console.log(no2);

// 3. using splice method
console.log('using splice method');
let no3 = [1,2,3,4,5,6];
no3.splice(0,no3.length);
console.log(no3);

// 4. using pop method
console.log('using pop method');
let no4 = [1,2,3,4,5,6];
while(no4.length>0){
    no4.pop();
}
console.log(no4);