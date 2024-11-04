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
    alert("📍 welcome student, to st. matthew haunted high school!")
    alert("today isn't a regular day, it's halloween!")
    alert("as a result... your classes will be spookier than usual!")
    alert("your priority today isn't to finish any missing assignments or revise for any tests... it's to survive.")
    
    let adventure = prompt("would you like to proceed [1]? or return back home? [2]")
     if (adventure == "1"){
        alert("goodluck! remember --  this doesn't mean you can miss class! you're already running late to your first period, physics with mr. flynn!")
        office()
    }
    if (adventure= "2"){
        alert("you turn around and attempt to run back home... but trip on a pumpkin!")
        alert("👻 you fall, hit your head and pass out. game over!")
        alert("returning to last checkpoint...")
        gameStart()
    }
}
gameStart()

function office(){
    alert("📍 your homeroom teacher has probably already marked you absent... might as well sign yourself in at the office.")

    let name = prompt("the office asks for your first name. what do you tell them?")
    
    let bag = prompt(` well ${name}, it's time to rush to physics! but you should probably put your bag away first [1]! or would you rather try to sneak it past mr. flynn..? [2]`)
    if (bag == "1"){
        alert("good idea! you should always respect the school rules no matter how tedious they are! now, hurry before you miss anything important!")
        locker(name, bag)
    }
    if (bag == "2"){
        alert("mr. flynn has been duped once and he'll be duped once again..! now, hurry before you miss anything important!")
        physics(name,bag)
    }
}

function locker(name, bag){
    alert("🕒")
    alert("📍 you rush to put away you bag and notice something unusual inside your locker...")
    
    let shield = prompt("it's a mini medieval shield! do you take it? [Y / N]")
    if (shield == "Y"){
        alert("hmm... how might this be useful to you though?")
        alert("well, let's not dwell on that too much. you need to go to physics now!")
        physics(name, bag, shield)
    }
    if (shield == "N"){
        alert("that's a shame... it looked pretty cool.")
        alert("time to go to physics!")
        physics(name, bag, shield)
    }
}

function physics(name, bag, shield){
    alert("🕒")
    alert("you've made it to physics!")

    if (bag == 2){
        alert("mr flynn looks a little irritated though...")
        alert("oh no! it's because he noticed your bag! you should've put it in your locker...")
        alert("mr flynn squirts you with his supersoaker as punishement!")
        alert("👻 you eventually drown. game over!")
        alert("returning to last checkpoint...")
        office()
    }

    alert("you find your seat start to doze off mid lesson...")
    alert("🕒")
    alert("you wake up... to a gun pointed at your face! it's the supersoaker!!")


    if (shield == "Y"){
        alert("but you're able to protect yourself with the shield you found in your locker! phew!")

    }
    if (shield == "N"){
        alert("you try to cover yourself, but you're no match for mr flynn... if only you had something to protect yourself with...")
        alert("👻 you eventually drown. game over!")
        alert("returning to last checkpoint...")
        locker()
    }

    alert("the bell rings and you're able to escape mr. flynn's wrath... let that be a lesson for what not to do in a haunted high school!")
    passingPeriod(name)
    
}

function passingPeriod(name){   
    let washroom = prompt("now it's time to go to second period -- computer science with mr. brash! do you want to use the washroom first, though? [Y / N]")
        if (washroom =="Y"){
        toilet()
    }
        if (washroom =="N"){
        compsci()
    }
}