/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/
document.getElementById("guess").addEventListener("click", guess_10);


/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//part one 
function isNumber(num){
    if (typeof num == "number"){
        return true;
    }
    else {
        return false;
    }
}

//part two
function whichDay(n){
    isNumber(n)
    
    if (n == 1){
        return "Sunday";
    }
    else if (n == 2){
        return "Monday";
    }
    else if (n == 3){
        return "Tuesday";
    }
    else if (n == 4){
        return "Wednesday";
    }
    else if (n == 5){
        return "Thursday";
    }
    else if (n == 6){
        return "Friday";
    }
    else if (n == 7){
        return "Sunday";
    }
    else {
        return "Invalid";
    }
}
whichDay(5)

//part three
function guess_10(){
    let number = randInt(1,10)

    let guess = Number(prompt("Guess a number from 1 - 10."))

    if (guess == number){
        alert(`${guess} is right!`)
    }
    else if ((guess <= 0) && (guess > 10)){
        alert(`${guess} is out of the range. The correct answer is ${number}.`)
    }
    else if (guess < number){
        alert(`${guess} is too low. The correct answer is ${number}.`)
    }
    else if (guess > number){
        alert(`${guess} is too high. The correct answer is ${number}.`)
    }
    else {
        alert("Error.")
    }

}