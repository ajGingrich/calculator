/**
 * Created by Andrew on 13/10/2016.
 */


//Set Variables from DOM
var $result = $('#result');
var $clear = $('#clear');
var $subtract = $('#subtract');
var $multiply = $('#multiply');
var $divide = $('#divide');
var $add = $('#add');
var $zero = $('#zero');
var $one = $('#one');
var $two = $('#two');
var $three = $('#three');
var $four = $('#four');
var $five = $('#five');
var $six = $('#six');
var $seven = $('#seven');
var $eight = $('#eight');
var $nine = $('#nine');

var $equals = $('#equals');
var $decimal = $('#decimal');

///variables for carrying out operations
var answer = 0;
var operator;
var input1 = 0;
var input2 = 0;

///functions for each operator
var add = function(a, b) {
    var num1 = parseFloat(a);
    var num2 = parseFloat(b);
    answer =  parseFloat((num1 + num2).toFixed(12));
};
var multiply = function(a, b) {
    var num1 = parseFloat(a);
    var num2 = parseFloat(b);
    answer =  parseFloat((num1 * num2).toFixed(12));
};
var divide = function(a, b) {
    var num1 = parseFloat(a);
    var num2 = parseFloat(b);
    answer =  parseFloat((num1 / num2).toFixed(12));
};
//subtract a neg number with subtraction sign in front.
var subtractNeg = function(a, b) {
    var num1 = parseFloat(a);
    var num2 = parseFloat(b);
    /// Plus to account for additional subtraction sign
    answer =  parseFloat((num1 - num2).toFixed(12));
};



var operate = function() {
    switch(operator) {
        case "addLarger": add(input1, input2);
            break;
        //add to account for double subtraction sign
        case "subtractSmaller": add(input1, input2);
            break;
        case "subtractMinus": subtractNeg(input1, input2);
            break;
        case "multiplyLarger": multiply(input1, input2);
            break;
        case "divideSmaller": divide(input1, input2);
            break;
    }
};

//add numbers to the screen and then run the calculation
$($zero).click(function(){
    //add to screen
    if ($result.text() === "0" || $result.text() == '+' || $result.text() == '/' || $result.text() == 'x' ) {
        $result.html('0');
    }
    else {
        $result.append('0');
    }
    input2 = $result.text();
    operate();
});
$($one).click(function(){
    //add to screen
    if ($result.text() === "0" || $result.text() == '+' || $result.text() == '/' || $result.text() == 'x' ) {
        $result.html('1');
    }
    else {
        $result.append('1');
    }
    input2 = $result.text();
    operate();
});
$($two).click(function(){
    //add to screen
    if ($result.text() === "0" || $result.text() == '+' || $result.text() == '/' || $result.text() == 'x' ) {
        $result.html('2');
    }
    else {
        $result.append('2');
    }
    input2 = $result.text();
    operate();
});
$($three).click(function(){
    if ($result.text() === "0" || $result.text() == '+' || $result.text() == '/' || $result.text() == 'x') {
        $result.html('3');
    }
    else {
        $result.append('3');
    }
    input2 = $result.text();
    operate();

});
$($four).click(function(){
    //add to screen
    if ($result.text() === "0" || $result.text() == '+' || $result.text() == '/' || $result.text() == 'x' ) {
        $result.html('4');
    }
    else {
        $result.append('4');
    }
    input2 = $result.text();
    operate();
});
$($five).click(function(){
    //add to screen
    if ($result.text() === "0" || $result.text() == '+' || $result.text() == '/' || $result.text() == 'x' ) {
        $result.html('5');
    }
    else {
        $result.append('5');
    }
    input2 = $result.text();
    operate();
});
$($six).click(function(){
    //add to screen
    if ($result.text() === "0" || $result.text() == '+' || $result.text() == '/' || $result.text() == 'x' ) {
        $result.html('6');
    }
    else {
        $result.append('6');
    }
    input2 = $result.text();
    operate();
});
$($seven).click(function(){
    //add to screen
    if ($result.text() === "0" || $result.text() == '+' || $result.text() == '/' || $result.text() == 'x' ) {
        $result.html('7');
    }
    else {
        $result.append('7');
    }
    input2 = $result.text();
    operate();
});
$($eight).click(function(){
    //add to screen
    if ($result.text() === "0" || $result.text() == '+' || $result.text() == '/' || $result.text() == 'x' ) {
        $result.html('8');
    }
    else {
        $result.append('8');
    }
    input2 = $result.text();
    operate();
});
$($nine).click(function(){
    //add to screen
    if ($result.text() === "0" || $result.text() == '+' || $result.text() == '/' || $result.text() == 'x' ) {
        $result.html('9');
    }
    else {
        $result.append('9');
    }
    input2 = $result.text();
    operate();
});


//Decimal
$($decimal).click(function(){
    if ($result.text() != '+' && $result.text() != '-' && $result.text() != '/' && $result.text() != 'x' && $result.text().indexOf('.') == -1) {
        $result.append('.');
    }
    else if ($result.text() == '+' || $result.text() == '-' || $result.text() == '/' || $result.text() == 'x') {
        $result.html('0.');
    }
});

///operators
$($add).click(function(){
    if (answer != 0) { //if chaining and not hitting equal
        input1 = answer;
    }
    else {
        //grab input from screen
        input1 = $result.text();
    }
    $result.html('+');
    operator = "addLarger";
});
$($subtract).click(function(){
    if (answer != 0) { //if chaining and not hitting equal
        input1 = answer;
        operator = "addLarger";
    }
    else {
        //grab input from screen
        if ($result.text() != '+' && $result.text() != '/' && $result.text() != 'x' && $result.text() != '-' ) {
            input1 = $result.text();
            operator = "addLarger";
        }
        if ($result.text() == '-') {
            operator = "subtractMinus";
        }
    }
    $result.html('-');
});
$($divide).click(function(){
    if (answer != 0) { //if chaining and not hitting equal
        input1 = answer;
    }
    else {
        //grab input from screen
        input1 = $result.text();
    }
    $result.html('/');
    operator = "divideSmaller";
});
$($multiply).click(function(){
    if (answer != 0) { //if chaining and not hitting equal
        input1 = answer;
    }
    else {
        //grab input from screen
        input1 = $result.text();
    }
    $result.html('x');
    operator = "multiplyLarger";
});


$($equals).click(function(){
    $result.html(answer);
});

///Clear everything

$($clear).click(function(){
    $result.html('0');
    operator = 0;
    input1 = 0;
    input2 = 0;
    answer = 0;
});

/*Bouncy!*/


