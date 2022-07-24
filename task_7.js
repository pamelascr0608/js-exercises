const prompt = require('prompt-sync')();

var array_numbers = prompt('Please type two digits in comma-separeted form: ');
var array_row = (array_numbers.split(","))[0]
var array_column = (array_numbers.split(","))[1]
var h = 0;

var array = new Array(array_row)
for (var i = 0; i < array_row; i++) {
  for (var j = 0; j < array_column; j++) {
      array[i][j] = i*j;
  }
}

console.log(`Hey there ${array_row}`);