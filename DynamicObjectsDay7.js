// we can add and remove object property at the run time

const circle = {
    radius : 5, //object property
    draw(){ //function property
        console.log('Circle dwar with radius of :' +this.radius);
    }
}
console.log(circle); 
circle.draw();

//add property in circle object
circle.colour = 'Red'
circle.paint = function(){
    console.log('Circle colour is: ' +this.colour);
    console.log('Circle Radius is: ' +this.radius);
} 
console.log(circle); 
circle.paint();

//remove propert
delete circle.radius;
delete circle.paint;
console.log(circle); 
circle.draw();