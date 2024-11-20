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
function menu(){
    let message = `Hi! Please make a selection:\n1 - Play\n2 - Options\n3 - DLC\n4 - Check for Updates\n5 - Exit`
    let selection = Number(prompt(`${message}`))

    if (selection == 1){
        alert("Let's play!")
        
        let difficulty = Number(prompt("Select a difficulty route:\n1 - Easy\n2 - Medium\n3 - Hard"))
        if (difficulty == 1){
            alert("You selected the easy route.")
        }
        else if (difficulty == 2){
            alert("Most people select medium.")
        }
        else if (difficulty == 3){
            alert("I see you like a challenge!")
        }
        else {
            alert("Invalid! Select again.")
            menu()
        }
    }
    else if (selection == 2){
        alert("You selected Options.")
    }
    else if (selection == 3){
        alert("No new DLC at this time.")
    }
    else if (selection == 4){
        alert("Everything is up to date.")
    }
    else if (selection == 5){
        alert("Bye!")
    }
    else {
        alert("Invalid! Select again.")
        message()
    }
}

//part two
function greeting(hour){
    if ((hour >= 0) && (hour <= 11)){
        return "Good morning!";
    }
    else if ((hour >= 12) && (hour <= 17)){
        return "Good Afternoon!";
    }
    else if ((hour >= 18) && (hour <= 23)){
        return "Good Evening!"
    }
    else {
        return "Invalid hour!"
    }
}