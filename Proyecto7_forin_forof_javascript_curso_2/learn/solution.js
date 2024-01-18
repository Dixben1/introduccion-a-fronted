// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy(){
    var daily;
    for (daily of dairy) {
        console.log(daily);
    }
}
logDairy();
// Task 2
const animal = {
canJump: true
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    var ber;
    for (ber of Object.keys(bird)) {
        console.log(ber + ": " + bird[ber]);
    }
}

birdCan()
// Task 3
function animalCan() {
    var bera;
    for (bera in bird) {
        console.log(bera + ": " + bird[bera])
    }
}

animalCan()