var birthDate = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var outputEl = document.querySelector("#output-div");
var checkBtn = document.querySelector("#check-btn");

function digitsInDate(birthDate) {
  var birthDay = birthDate;
  var digitsArr = birthDay.replaceAll("-", "");
  return digitsArr;
}

function SumOfDigitsinDate(digits) {
  var sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum = sum + Number(digits.charAt(i));
  }
  return sum;
}

function isBirthdayLucky(sumOfDigits, luckyNumber) {
  if (sumOfDigits % Number(luckyNumber) === 0) {
    outputEl.style.color = "green";
    outputEl.innerText = "yey! your birthday is lucky!";
  } else {
    outputEl.style.color = "red";
    outputEl.innerText = "oh oh ! your birthday is not so lucky";
  }
}

function clickHandler() {
  var digits = digitsInDate(birthDate.value);
  var sumOfDigits = SumOfDigitsinDate(digits);
  isBirthdayLucky(sumOfDigits, luckyNumber.value);
}

function checkButton() {
 const dob = digitsInDate(birthDate.value);
 const sumOfDob = SumOfDigitsinDate(dob);
 if(dob && sumOfDob){
     if(luckyNumber.value <=0)
     {
        outputEl.style.color = "red";
        outputEl.innerText = "Enter lucky number greater than 0";
     }
     else{
        clickHandler();
     }
 }
 else{
    outputEl.style.color = "red";
     outputEl.innerText = "Enter both the fields";
 }
}

checkBtn.addEventListener("click", checkButton);
