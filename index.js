var angleOne = document.querySelector("#angle1");
var angleTwo = document.querySelector("#angle2");
var angleThree = document.querySelector("#angle3");
var checkBtn = document.querySelector("#check-btn");
var outputEl = document.querySelector("#output-div");

function sumOfAngles(angle1, angle2, angle3){
    const sum = Number(angle1) + Number(angle2) + Number(angle3);
    return sum;
}

function isTriangle(sum){
    if(sum === 180){
        outputEl.innerText = "These angles forms a triangle";
    }
    else{
        outputEl.innerText = "These angles does not forms a triangle";
    }
}

function checkButton(){
    if(angleOne.value && angleTwo.value && angleThree.value){
    const sum = sumOfAngles(angleOne.value, angleTwo.value, angleThree.value);
    isTriangle(sum);
    }
    else{
        outputEl.innerText = "Please enter all the angles"
    }
}


checkBtn.addEventListener('click',checkButton);
