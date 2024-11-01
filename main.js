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
    alert("8:21AM\nit's cold. it's dark. the halls are empty. you think you can feel a presence near you, moving all around you, but no one's there.") 
    alert("8:21AM\nwhy would you come to school on halloween?")
    alert("8:21AM\nyou feel stuck in place. like there's a force keeping you from leaving.")
    alert("8:21AM\nyou vaguely remember a weird story your friends told you once, about why basically all the students choose not to attend school on halloween, but it's a distant memory now.")
    alert("8:22AM\nbesides, creepy rumours and holidays will not ruin your perfect attendance!!! (seriously?)")
    
    let playerName = prompt("8:22AM\nsuddenly, a faint voice calls out to you. you still don't see any sign of life in the school.\n\"hello wanderer... what's your name? you don't look like a spirit.\"")
    alert(`8:22AM\n\"well... welcome ${playerName}, to st. matts HAUNTED high school!\"`)
    alert("haunted?..")
    
    let inputOne = prompt("8:22AM\n\"would you like to go on an adventure with me?\" [YES / NO]")
    if (inputOne == "NO"){
        alert("8:22AM\n\"umm... okay... let's try that again...\"")
        alert("your mind starts feeling a little foggy...")
        gameStart()
        return;
    }
    if (inputOne == "YES"){
        alert("8:22AM\n\"yaay! let's begin!\"")
    }
    gameIntro(playerName);
}
gameStart()

function gameIntro(playerName){
    let inputOne = prompt(`8:23AM\n\"i need your help, ${playerName}. a looong time ago, i lost some very important items. now, they're scattered all around the school..! can you guess what they are?\"`)
    alert("8:23AM\n\"...that was a trick question! there's noo possible way you'd know what they are.\"")
    alert("8:24AM\n\"but you still need to help me! it's impossible for me to collect my belongings now, so you have to find them for me.\"")
    alert("8:24AM\n\"neither of us can leave the school premise until i get them back. you'll have to do endless math worksheets and eat rotten cafeteria food for the rest of your life.\"")

    let inputTwo = prompt(`8:24AM\n\"... so you'll help me, right ${playerName}?\" [YES / NO]`)
    if (inputTwo =="NO"){
        alert("...")
        alert("8:24AM\n\"...i'll give you another chance...\"")
        alert("your mind starts feeling a little foggy...")
        return gameIntro(playerName);
    }
    if (inputTwo =="YES"){
        alert(`8:25AM\n\"thank you, ${playerName}!\"`)
        alert("8:25AM\n\"the items i need are 5 green orbs. i know you'll be able to find them. you should have no trouble interacting with them. that's all i can say for now!\"")
        alert("8:25AM\n\"i promise there's a reward if you help me!\"")
        alert("8:26AM\n\"well... go on! go find them!\"")
        alert("8:26AM\nyou don't feel so cold anymore. there was never any physical sign of... whoever you were speaking with... but you can feel that they've disappeared now.")
        alert("8:26AM\n...shouldn't you be a little more concerned about what just happened though? oddly enough, you can't bring yourself to care.")
        alert("8:27AM\n as you start walking torwards your second-floor locker, you decide your mysterious new aquaintance and their strange quest is not a priority. you came to school to work, you can focus on finding their green orbs later. (are you really that studious?..)")


    }


}
gameIntro()