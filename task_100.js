var heads = 35;
var legs = 94;
var chicken = 0;
var rabbit = 0;

if (heads >= legs  ) {
    console.log("Error, try to add a new number of legs and heads.")
} else {
    var rabbit = (legs + (-2*heads))/2;
    var chicken = heads - rabbit;
    console.log("Rabbits number:" + rabbit, "Chicken number:" + chicken)
}