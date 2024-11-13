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

//part one - this function will count down from the start value to the stop value
function countdown(start, stop){
    //before you loop, make sure start > stop
    if (start <= stop){
        return -1;
    }
    let count = 0
    while (start >= stop){
        console.log(start)
        start--
        count++
    }
    //when the loop finishes, the function should return the number of times it looped
    return count;
}

//part two - this function will generate random numbers from a range until one is equal to stop
function random_until(min, max, stop){
    //check that max > min and stop is in between max and min
    if (max < min || stop > max && stop < min){
        return -1;
    }
    //generate a random number from range and print to console until it equals stop
    let n = randInt(min,max)
    while (n != stop){
        console.log(n)
        n = randInt(min,max)
    }
    //return stop
    return stop;
}  

//part three - this function calculates averages from a user's value 
function average(n){
    let value = 0
    let count  = 1
    while (count <= n){
        console.log(value)
        value += Number(prompt("enter value"))
        count += 1
    }
    value = round(value / n, 1)
    console.log(`average is ${value}`)
}