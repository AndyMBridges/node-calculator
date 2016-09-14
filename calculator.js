// Node Calculator
// Using node and the NPM package readline-sync create a simple calculator.
// When the program runs it will show the text "Please enter a number"
// After the number is entered it will say, "Please enter another number"
// After the second number is entered show a prompt that says, "Please enter an operator (+, - , / , * )"
// The user will enter an operator. Once that operator is entered the result of the operation will be printed to the screen.

var readline = require('readline-sync');

var num1 = readline.question("Please enter a number ");
var num2 = readline.question("Please enter another number ");
var operator = readline.question("Please enter an operator (+, - , / , * ) ");

var operation = function(first_num, second_num, operator){
  if(!isNaN(first_num) || !isNan(second_num)){
    var result = eval(first_num + operator + second_num);
    console.log(first_num + " " + operator + " " + second_num + " = " + result)
  }
};

operation(num1, num2, operator);
