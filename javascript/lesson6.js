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

//lesson 
function rain(){
    let raining = false;
    while (raining){
        console.log("it's raining! i need an umbrella.")
    }
} // this loop will never run

function number(){
    let input;
    do {
        input = +prompt("please enter a number from 1 to 5.");
    } while ((isNan(input)) || (input < 1) || (input > 5));
} // this loop above will run at least once 

function hi(num){
    do {
        console.log("hi");
        num--
    } while (num > 0)
}

function get_number(){
    let input;
    do {
        input = +prompt("please enter a number")
    } while (isNaN(input))
    return input;
}

//practice one 
function odd(n){
    let count = 1
    if (n != isNaN && n >= 1){
        do {
            console.log(count)
            count += 2
        } while ( count <= n)
    }
}

//practice two
function negative_only(){
    let negative = +prompt("please enter a negative number.")
    if (negative > 0){
        do {
            negative = +prompt("PLEASE enter a negative number.")
        } while (negative > 0)
    }
    return negative;
}

//practice three
function parrot(){
    let text = prompt("please enter some text or the word quit to exit!")
    
}
