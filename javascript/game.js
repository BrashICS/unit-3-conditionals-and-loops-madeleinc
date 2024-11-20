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
function gameStart(){
    alert("📍 welcome student, to st. matthew haunted high school!")
    alert("today isn't a regular day, it's halloween!")
    alert("as a result... your classes will be spookier than usual!")
    alert("your priority today isn't to finish any missing assignments or revise for any tests... it's to survive.")
    
    let adventure = prompt("would you like to proceed? [Y / N]")
     if (adventure == "Y"){
        alert("goodluck! remember --  this doesn't mean you can miss class! you're already running late to your first period, physics with mr. flynn!")
        office()
    }
    if (adventure == "N"){
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
        alert("he probably won't notice, right?")
        alert("now, hurry before you miss anything important!")
        physics(name,bag)
    }
}

function locker(name, bag){
    alert("🕒")
    alert("📍 you rush to put away you bag and notice something unusual inside your locker...")
    
    let shield = prompt("it's a mini shield! do you take it? [Y / N]")
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
        alert("mr flynn squirts you with his supersoaker as punishment!")
        alert("👻 you eventually drown. game over!")
        alert("returning to last checkpoint...")
        office()
    }

    alert("you find your seat start to doze off mid lesson...")
    alert("🕒")
    alert("you wake up... to a gun pointed at your face! it's the supersoaker!!")


    if (shield == "Y"){
        alert("but you're able to protect yourself with the shield you found in your locker! it breaks, but you're safe! phew!")
    

    }
    if (shield == "N"){
        alert("you try to cover yourself, but you're no match for mr flynn... if only you had something to protect yourself with...")
        alert("👻 you eventually drown. game over!")
        alert("returning to last checkpoint...")
        locker(name)
    }

    alert("the bell rings and you're able to escape mr. flynn's wrath... let that be a lesson for what not to do in a haunted high school!")
    passingPeriod()
    
}

function passingPeriod(){   
    let toilet = prompt("📍 now it's time to go to second period -- computer science with mr. brash! do you want to use the washroom first, though? [Y / N]")
        if (toilet =="Y"){
            alert("try not to take too much time!")
            washroom()
    }
       if (toilet =="N"){
            alert("you don't want to risk being late, right? that's probably for the best..!")
            compsci()
    }
}

function washroom(){
    alert("🕒")
    alert("you've made it to the washroom!")
    
    let sack = prompt("it's pretty empty... but you notice a small sack left on the sink... do you take it? [Y / N]")
    if (sack == "Y"){
        alert("you untie the sack and it's... filled with acorns. who'd need such a thing?")
        alert("you decide to hold onto it anyway. now go finish your business and head to your second period!")

    }
    if (sack == "N"){
        alert("yeah... you don't want to touch anything strange...")
        alert("okay, do what you came here to do and head to your second period afterwards! quickly!")
    }

    compsci(sack)
}

function compsci(sack){
    alert("🕒")
    alert("you've made it to computer science with mr. brash!")
    alert("but... he's not here yet?")
    alert("you take your seat and patiently wait for your teacher to arrive... except, an angry, giant squirrel walks in instead!")
    let fight = prompt("it starts jumping around the class and attacking your classmates... act quickly! do you take cover [1], or fight back [2]?")

    if (fight == "1"){
        alert("you try to hide under your table... but the squirrel notices and pounces on you! you should've took the oppertunity to attack first!")
        alert("👻 it bites your head really hard. game over!")
        alert("returning to last checkpoint...")
        passingPeriod()
    }
    if (fight =="2" && sack == "Y"){
        alert("you start pelting the squirrel with acorns!")
        alert("your attack isn't very strong... but it distracts the squirrel.")
        alert("it calms down and starts munching on one of the acorns! the squirrel explains that it was angry because it lost its lunch -- a sack of acorns -- and it tends to get mad on an empty stomach...")
    }
    else if (fight =="2" && sack =="N"){
        alert("you lunge on the squirrel and start attacking, but it defeats you effortlessly... if only you found another item to defend yourself with.")
        alert("👻 you fall unconscious. game over!")
        alert("returning to last checkpoint...")
        passingPeriod()
    }

}