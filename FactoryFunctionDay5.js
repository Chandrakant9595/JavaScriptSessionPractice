// var and function should be define in objects
// Factory function produce the objects.

// 1. create circle function with 1 var and 2 functions
function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('circle draw function chandu');
        },

        paint(){
            console.log('circle painting');
        }
    }
}

const c1 = createCircle(1);
console.log(c1.radius);
c1.draw();

const c2 = createCircle(5);
console.log(c2.radius);
c2.paint();


// 2. create operation function with 2 var and 4 functions
function operation(n1,n2){
    return{
        n1,n2,
        add(){
            console.log('Addition is: '+(n1+n2));
        },

        sub(){
            console.log('Subtraction is: '+(n1-n2));
        },

        mul(){
            console.log('Multiplication is: ' +(n1*n2));
        },

        div(){
            console.log('Division is: ' +(n1/n2));
        }
    }
}

const o1 = operation(5,3);
console.log(o1.n1);
console.log(o1.n2);
o1.add();
o1.sub();
o1.mul();
o1.div();

// 3. create evonodd function with 1 var and one function with if-else statement
function evonOdd(num){
    return{
        num,
        eo(){
            if (num%2===0) {
                console.log('Even no: ' +num);
            }
            else{
                console.log("Odd no: " +num);
            }
        }
    }
}

const e1 = evonOdd(4);
e1.eo();
const e2 = evonOdd(5);
e2.eo();