const num = [3,5];

//print array
console.log('print array');
console.log(num);

//get lenthh of array
console.log('get lenthh of array');
console.log(num.length);

//get specfic array index value, index starts from 0 
console.log('get specfic array index value');
console.log(num[1]);

//add element at the end of array
console.log('add element at the end of array');
num.push(6,7);
console.log(num);

//add element at the begining of array
console.log('add element at the begining of array');
num.unshift(1,2);
console.log(num);

//add element at the middle of array
console.log('add element at the middle of array');
num.splice(3,0,4);
console.log(num);

//print all valus in an array
console.log('print all valus in an array');
for(const key in num){
    console.log(num[key]);
}
console.log('------------------');



//find elements in array - premative type
const a1 = [1,2,3,4,1,5];
console.log(a1);
console.log(a1.indexOf(4)); //3
console.log(a1.indexOf(2)); //1
console.log(a1.indexOf(6)); //-1 - 6 is not present in array so output is -1
console.log(a1.indexOf(1,3)); //4 - first 1- search index 3-starts index from
console.log(a1.includes(5)); // true - 5 is preset in array
console.log(a1.includes(6)); // false - 6 is not preset in array


//find elenment in array - reference type
const emp = [
    {id:1, name:'Vicky'},
    {id:2, name:'Mayuri'}
]
console.log('------------------');


//find data in reference type array
const e1 = emp.find(function(e1){
    return e1.name==='Mayuri';
});

console.log(e1);
console.log(e1.id);
console.log(e1.name);

const e2 = emp.findIndex(function(e2){
    return e2.name==='Vicky';
})

console.log(e2);


//using lamba function get the data from reference type array
console.log('using lamba function get the data from reference type array');
const e3 = emp.find(e=>e.name==='Mayuri');
console.log(e3);
console.log(e3.id);
console.log(e3.name);