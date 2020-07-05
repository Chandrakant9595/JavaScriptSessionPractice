
// use back tick char with string
// we can call var, function, and perform math operation in string

let name = 'Mayuri';
let product = function(){
    return 'Apple';
}

const mail = `Hi ${name}, ${2*4}, ${product()},

Thank for "helping" me.

Thank you,
Chandrakant`

console.log(mail);