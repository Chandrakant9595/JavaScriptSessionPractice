//value type - number, string, boolean, symbol, undefined, null
//reference type - object, function, array


//value type example
let x = 100;
let y = x;
x = 200;
console.log('X value is: ' +x); //200
console.log('Y value is: ' +y); //100


//reference type
let p = {
    value : 500
};
let q = p;
p.value = 600;
console.log('P value is: ' +p.value); //600
console.log('Q value is: ' +q.value); //600