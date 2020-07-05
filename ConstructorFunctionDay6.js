// constructor function is also used to create the objects 
// in factor function we have to use camelcase notation eg - createCircle (c samll and C capital)
// in constructor functionwe use pascal notation eg - CreateCircle (c all capital)  
// to call constructor we use new keyword


// create Circle function with one var and one method
function Circle(radius){
    this.radius = radius; // var
    
    this.draw = function(){ // method
        console.log('Draw function')
    },

    this.paint = function(){
        console.log('Paint function')
    }
}

const c = new Circle(2); // call the functionusing new keyword
console.log(c);
console.log(c.radius);
c.draw();
c.paint();


// create Mathfunction with 2 var and 4 methods 
function MathsFunction(no1, no2){
    this.no1 = no1;
    this.no2 = no2;

    this.add = function(){
        console.log('Addition is: '+(no1+no2));
    },

    this.sub = function(){
        console.log('Substraction is: '+(no1-no2));
    },

    this.mul = function(){
        console.log('Multiplication is: '+(no1*no2));
    },

    this.div = function(){
        console.log('Division is: '+(no1/no2));
    }
}

const ms = new MathsFunction(6,2);
console.log('First number is ' +ms.no1);
console.log('Second number is '+ms.no2);
ms.add();
ms.sub();
ms.mul();
ms.div();


// create EvenOdd function with 1 var with if else condition
function EvenOdd (number){
    this.number = number;

    this.checkEvenOddNumber = function(){
        if(number%2===0){
            console.log('Even no: ' +number);
        }else{
            console.log('Odd no: ' +number);
        }
    }
}

const eo = new EvenOdd(5);
console.log(eo.number);
eo.checkEvenOddNumber();