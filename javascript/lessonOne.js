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
    //part two
    if (userAge % 2 == 0){
        console.log(`you're ${userAge} years old, so your age is an even number!`)
    }
    if (userAge % 2 > 0){
        console.log(`you're ${userAge} years old, so your age is an odd number!`)
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

//part three
function longerString(str1, str2){
    if (str1.length > str2.length){
        return str1;
    }
    if (str1.length < str2.length){
        return str2;
    }
    if (str1.length == str2.length){
        return;
    }   
}
longerString("Happy","Birthday")

//part four
function discriminant(a, b, c){
    alert("we're finding quadratic zeroes with a discriminant!")
    
    let d = Number(prompt("what's the value of a?"))
    let e = Number(prompt("what's the value of b?"))
    let f = Number(prompt("what's the value of c?"))

   let x = e**2 - 4*d*f

   if (x > 0){
    console.log("you have 2 zeros!")
   }
   if (x == 0){
    console.log("you have one zero!")
   }
   if (x < 0){
    console.log("you have no zeros!")
   } 
}