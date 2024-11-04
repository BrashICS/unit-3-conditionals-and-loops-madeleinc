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
    alert("8:23AM\nit's cold. it's dark. the halls are empty. you think you can feel a presence near you, moving all around you, but no one's there.") 
    alert("8:23AM\nwas it really a good idea to come to school on halloween?")
    alert("8:23AM\nyou feel stuck in place. like there's a force keeping you from leaving.")
    alert("8:23AM\nyou vaguely remember a weird story your friends told you once, about why basically all the students choose not to attend school on halloween, but it's a distant memory now.")
    alert("8:24AM\nbesides, creepy rumours and holidays will not ruin your perfect attendance!!! (seriously?)")
    
    let playerName = prompt("8:24AM\nsuddenly, a faint voice calls out to you. you still don't see any sign of life in the school.\n\"hello wanderer... what's your name? you don't look like a spirit.\"")
    alert(`8:24AM\n\"well... welcome ${playerName}, to st. matts HAUNTED high school!\"`)
    alert("8:24AM\nhaunted?..")
    
    let inputOne = prompt("8:24AM\n\"would you like to go on an adventure with me?\" [YES / NO]")
    if (inputOne == "NO"){
        alert("8:24AM\n\"umm... okay... let's try that again...\"")
        alert("your mind starts feeling a little foggy...")
        gameStart()
    }
    if (inputOne == "YES"){
        alert("8:24AM\n\"yaay! let's begin!\"")
        intro(playerName)
    }

}
gameStart()

function intro(playerName){
    let inputOne = prompt(`8:25AM\n\"i need your help, ${playerName}. a looong time ago, i lost something very important to me. now, it's hidden somewhere within the school..! can you guess what it is?\"`)
    alert("8:25AM\n\"...that was a trick question! there's noo possible way you'd know what it is.\"")
    alert("8:25AM\n\"but you still need to help me! it's impossible for me to find, so you have to get it for me.\"")
    alert("8:26AM\n\"neither of us can leave the school premise until i get it back. you'll have to do endless math worksheets and eat rotten cafeteria food for the rest of your life.\"")

    let inputTwo = prompt(`8:26AM\n\"... so you'll help me, right ${playerName}?\" [YES / NO]`)
    if (inputTwo =="NO"){
        alert("8:26AM\n\"...\"")
        alert("8:26AM\n\"...i'll give you another chance...\"")
        alert("your mind starts feeling a little foggy...")
        intro(playerName);
    }
    if (inputTwo =="YES"){
        alert(`8:26AM\n\"thank you, ${playerName}!\"`)
        alert("8:27AM\n\"the item i need you to find . i know you'll be able to find them. you should have no trouble interacting with them. that's all i can say for now!\"")
        alert("8:27AM\n\"i promise there's a reward if you help me!\"")
        alert("8:27AM\n\"well... go on! go find them!\"")
        alert("8:27AM\nyou don't feel so cold anymore. there was never any physical sign of... whoever you were speaking with... but you can feel that they've disappeared now.")
        alert("8:28AM\n...shouldn't you be a little more concerned about what just happened though? oddly enough, you can't bring yourself to care.")
        hallway()

    }
}
intro()

function hallway(){
    alert("8:28AM\nas you start walking torwards your first period - physics with mr. flynn, you decide your mysterious new aquaintance and their strange quest is not a priority. you came to school to work, you can focus on finding their green orbs later. (are you really that studious?..)")
    alert("8:28AM\nyou walk past your locker and you realize you need to put away your bag...")
    alert("8:29AM\nusually, mr flynn is too distracted to notice you walking in with it, and you hide it under your lab bench.")
    
    let bag = prompt("8:29AM\ndo you continue walking to first period [1], or put away your bag and risk being late... consequently being shot with his Supersoaker© [2]... ")
    if (bag == "1"){
        alert("8:29AM\ngood idea! mr. flynn has been duped before and he'll be duped again.")
        mrflynn()
    }
    if (bag =="2"){
        alert("8:29AM\nyou think about how cold that supersoaker water might be and rush to put away your bag...")
        locker()
    }

}

function mrflynn(){
    alert("8:29AM\nmr. flynn's classroom, like the rest of the school, is uncharacteristically quiet. mr. flynn's classroom is never quiet...")
    alert("8:29AM\nnormally, you'd be able to hear the chatter from your teacher and peers from miles away.")
    alert("8:29AM\nthe door is closed but unlocked, and you grow increasingly more nervous as you turn the handle...")
    alert("8:29AM\nyou try to discreetly sneak in, but you realize you've made a grave mistake!")
    alert("8:29AM\nyou forgot that you're the only student who attended school today! mr. flynn was the only other person in the classroom. he sat idly at his desk looking bored out of his mind.")
    alert("8:30AM\nmr. flynn looks extremely tired and pale today... almost ghostly. he immediately becomes angry when he sees you and your bag though, and starts marching torwards you..!")
    
    let escape = prompt("8:30AM\nyou need to get out of here... quickly! do you attempt to escape? [YES / NO]")
    if (escape == "YES"){
        alert("8:30AM\nyou make a run for it!")
        alert("8:30AM\nyou might be quick, but mr. flynn's quicker... mr. flynn suddenly appears in front of you, and you realize...")
        alert("8:30AM\nhe's a ghost!!! (did you forget this school's haunted..?)")
        alert("8:30AM\nthe ghost of mr. flynn screams in anger and you scream in fear...")
        alert("your mind starts feeling a little foggy...")
        hallway()
    }
    if (escape == "NO"){
        alert("8:30AM\nyou panic and freeze!")
        alert("8:30AM\nyou look at mr flynn up close and notice something you didn't before... he's transluscent! and oddly serious! this can't be mr. flynn. this must be a ghost.")
        alert("8:30AM\nyou start feeling dizzy as your realization sinks in...")
        alert("your mind starts feeling a little foggy...")
    }

}
mrflynn()

function locker(){

}
