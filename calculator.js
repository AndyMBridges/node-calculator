// Node Calculator
// Using node and the NPM package readline-sync create a simple calculator.
// When the program runs it will show the text "Please enter a number"
// After the number is entered it will say, "Please enter another number"
// After the second number is entered show a prompt that says, "Please enter an operator (+, - , / , * )"
// The user will enter an operator. Once that operator is entered the result of the operation will be printed to the screen.

var readline = require('readline-sync');

var Calculation = function(num1, num2, op) {
  this.x = parseInt(num1);
  this.y = parseInt(num2);
  this.op = op;

  this.result = function() {
    var x = this.x;
    var y = this.y;
    var op = this.op;

    if (op === "+") {
      var result = x + y;
    } else if (op === "-") {
      var result = x - y;
    } else if (op === "/") {
      var result = x / y;
    } else if (op === "*") {
      var result = x * y;
    } else {
      var result = "Please enter +, - , / , * only!"
    }

    console.log("Result: " + result);
  };
}

var num1 = readline.question("Please enter a number: ");
var num2 = readline.question("Please enter another number: ");
var op = readline.question("Please enter an operator (+, - , / , * ): ");

var calc = new Calculation(num1, num2, op);

calc.result();
