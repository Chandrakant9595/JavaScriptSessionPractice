const circle = {
    radius : 1,
    draw(){
        console.log('Draw circle');
    },
    paint(){
        console.log('Paint circle');
    } 
}
console.log('original object')
console.log(circle);
console.log('-------------------');

// 1. using for-in loop
console.log('1. using for-in loop')
const another1 = {};
for(let key in circle){
    another1[key] = circle[key];
}
console.log(another1);
console.log('-------------------');

// 2. using object.assign method
console.log('2. using object.assign method')
const another2 = Object.assign({},circle);
console.log(another2);
console.log('-------------------');

// 3. using spread... operator
console.log('3. using spread... operator')
const another3 = {...circle};
console.log(another3);
console.log('-------------------');