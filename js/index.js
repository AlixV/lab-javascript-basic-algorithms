// Iteration 1: Names and Input
let hacker1 = "Alix";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Mamadou";
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if(hacker2.length === hacker1.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
} else {
    console.log( `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
};


// Iteration 3: Loops
let capitalizeDriver = "";

for(let i=0; i < hacker1.length; i++){
  
  //capitalizeDriver = capitalizeDriver + hacker1[i]
  capitalizeDriver += hacker1[i] + " "

}
console.log(capitalizeDriver.toUpperCase().trim())

console.log(capitalizeDriver.toUpperCase().trim());

let reverseNavigator = "";
for(let i = hacker2.length - 1; i >= 0; i--){
  reverseNavigator += hacker2[i]
}

console.log(reverseNavigator);

//console.log(hacker1[2]>hacker1[0])

function lexico (driver, navigator){
    let driverFirst = driver[i];
    let navigatorFirst = navigator[j];

    for (let i =0; i<driver.length; i++){
        for (let j =0; j<navigator.length; ++){

            if(driver[i] < navigator[j]){
                console.log("The driver's name goes first")
            } else if (driver[i] === navigator[j]){
                console.log("What?! You both have the same name?")
            } else {
                console.log("Yo, the navigator goes first definitely")
            }

            while ()

        }
    }

    
}

lexico(hacker1,hacker2);
