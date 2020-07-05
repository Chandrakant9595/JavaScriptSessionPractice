//get all properties on an object we use the Enumnerating

const circle = {
    radius : 1,
    draw(){
        console.log('Drow the circle');
    },
    paint(){
        console.log('paint the circle')
    }
}

// 1. using for-in loop to enumerating propertes
console.log('1. using for-in loop to enumerating propertes')
for(let key in circle){
    console.log(key, circle[key]);
}
console.log('------------------------------')

// 2.1 using for-of loop to enumerating propertes
console.log('2.1 using for-of loop to enumerating propertes')
for(let key of Object.keys(circle)){
    console.log(key);
}
console.log('------------------------------')

// 2.2 using for-of loop to enumerating propertes
console.log('2.2 using for-of loop to enumerating propertes')
for(let entry of Object.entries(circle)){
    console.log(entry);
}
console.log('------------------------------')

// 3. in operator - check the property present in an object
if('radius' in circle){
    console.log('Preset');
}else{
    console.log('Not present');
}

if('draw' in circle){
    console.log('Preset');
}else{
    console.log('Not present');
}
