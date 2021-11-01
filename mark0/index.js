var readlineSync = require('readline-sync');
var chalk = require('chalk');

// // input
// var userName = readlineSync.question('Give me your name: '); 

// //processing
// var welcomeMessage = "Welcome " + userName;

// //output
// console.log(welcomeMessage);

// var score = 0;
// var isGreaterThan = readlineSync.question('Is my age greater than 25? ');

// if(isGreaterThan === 'yes'){
//   score = score - 1;
//   console.log('wrong, your score is ' + score);
// }
// else{
//    score = score + 1;
//   console.log('right, your score is ' + score);
// }

// function add (num1, num2) { // num1 and num2 are parameters defined in functon defation

// return num1 + num2;

// }
// var numOne = 2;
// var numTwo = 5;

// var sum = add(numOne, numTwo); // numeOne and numTwo are arguments passed to the function add()

// console.log('Addition of ' + numOne + ' and ' + numTwo + ' is ' + sum);


// // Global Variable
// var score = 0;

// // function defination
// function isCorrect(q1, ans, userAns){
//   if(ans === userAns.toLowerCase()){
//     score = score + 1;
//     console.log('you entered ' + userAnswer + ' you are right!');
//     console.log('your score is ' + score);
//   }
//   else{
//     console.log('you entered ' + userAnswer + ' you are wrong!');
//     score = score + 1;
//     console.log('your score is ' + score);
//   }
// }

// // variables
// var questionOne = 'What is my name? ';
// var qOneAns = "krushna";
// var userAnswer = readlineSync.question(questionOne);

// // function Calling
// isCorrect(questionOne, qOneAns, userAnswer);

// var num = 1;
// for(var i = 0; i < 5; i++){
//   console.log('Krushna ' + num);
//   num++;
// }


// star triangle pattern

// function printStarPattern(numOfRows){
//     for(var rows = 1; rows<=numOfRows; rows++)
//     {
//       var starsInRow = "";
//       for(var stars = 1; stars <= rows; stars++ )
//       {
//         starsInRow = starsInRow + '*'
//       }
//       console.log(starsInRow);
//     }
// }


// var numOfRows = readlineSync.question('Enter the number of rows for star pattern ');

// printStarPattern(numOfRows);


// // Inverted star triangle pattern
// function printStarPattern(numOfRows){
//     for(var rows = numOfRows; rows > 0; rows--)
//     {
//       var starsInRow = "";
//       for(var stars = rows; stars > 0; stars-- )
//       {
//         starsInRow = starsInRow + '*'
//       }
//       console.log(starsInRow);
//     }
// }


// var numOfRows = readlineSync.question('Enter the number of rows for star pattern ');

// printStarPattern(numOfRows);

var score = 0;

function showOutput(question){
var userAnswer = readlineSync.question(question.question);
if(userAnswer.toLowerCase() == question.answer.toLowerCase()){
  console.log(chalk.green('You are correct!'));
  score = score + 1;
  console.log('score: ' + score);
}
else{
  console.log(chalk.red('You are Wrong!'));
  if(score > 0)
    score = score - 1;
  console.log('score: ' + score);
}
}




questionOne = {
  question: "Who is my favorite superhero? ",
  answer: "Dhruv"
}

questionTwo = {
  question: "Which is my favorite sad song? ",
  answer: "Channa Meraya"
}

questionThree = {
  question: "Who is my favorite Sports Person? ",
  answer: "MS Dhoni"
}

questionFour = {
  question: "Which is my favorite city? ",
  answer: "Mumbai"
}

var questionArray = [questionOne, questionTwo, questionThree,questionFour];

for(var i = 0; i < questionArray.length; i++){
  showOutput(questionArray[i]);
}

console.log('yey! you scored ' + score + ' out of ' + (questionArray.length));