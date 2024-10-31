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

//spooky game! 
function gameStart(){
    let playerName = prompt("hello wanderer... what's your name?")
    alert(`welcome ${playerName}, to st. matts haunted high school!`)

    let gameBegin = prompt("would you like to go on an adventure with me? [YES or NO]")
    if (gameBegin == "NO"){
        alert("umm... okay... let's try this again..")
        gameStart()
        return;
    }
    if (gameBegin == "YES"){
        alert("yaay! let's begin!")
    }
    gameIntro(playerName);
}
gameStart()

function gameIntro(playerName){
    let inputOne = prompt(`i need your help, ${playerName}. a looong time ago, i lost some very important items. now, they're scattered all around the school..! can you guess what they are?`)
    alert("...that was a trick question! there's noo possible way you'd know what they are.")
    alert("you don't even know what i am.")
    alert("but you still need to help me! it's impossible for me to collect my belongings now, so you have to find them for me.")
    alert("neither of us can leave the school premise until i get them back. you'll have to do endless math worksheets and eat rotten cafeteria food for the rest of your life.")

    let inputTwo = prompt(`...you'll help me, right ${playerName}? [YES or NO] `)
    if (inputTwo =="NO"){
        alert("...i'll give you another chance...")
        return;
    }
    if (inputTwo =="YES"){
        alert(`thank you ${playerName}`!)
    }

}
gameIntro()