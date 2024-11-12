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

//part one
function user(){
    let userAge = Number(prompt("how old are you?"))
    
    if (userAge >= 60)[
        console.log(`wowie... ${userAge}? you're old...`)
    ]
    if (userAge < 16){
        console.log(`you're ${userAge}? are you even old enough to drive?`)
    }
    if (userAge == 44){
        console.log(`mr. squirrel is ${userAge} too!!!`)
    }
    

    let userName = prompt("what's your name?")

    if (userName == "mr. squirrel"){
        console.log("🐿️🐿️🐿️")
    }
    if (userName == "madeleine"){
        console.log("hey, that's my name!")
    }
    if (userName.length >= 7){
        console.log(`${userName} is a really long name...`)
    }

    let userLength = Number(prompt(`so, ${userName}, how long do you think your name is?`))
    
    if (userLength == userName.length){
        console.log(`${userLength} is correct!!!`)
    }
    if (userLength < userName.length){
        console.log("what? that number is way too small.")
    }
    if (userLength > userName.length){
        console.log(`${userLength} is tooo big..!`)
    }
}

