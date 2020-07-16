
console.log("Welcome to Black Radical Bookclub! A place where you can get Black radical texts reccomended to you based on your personality :p\n")
const prompt = require('prompt-sync')({sigint: true});
const name = prompt("What's your name: ")
console.clear();
console.log("Awesome, good to meet to you comrade "+name+"!");

// Beginning of Test

console.log("To start we'll need a sense of your politics.");

while (true) {
    const vibe = prompt("Would you consider yourself more of a liberal or a leftist: ").toLowerCase();
    if (vibe == "leftist" || vibe == "left" || vibe == "liberal" || vibe == " lib") { break;}
    else { console.log("Invalid response. Please try again.")}
}

console.clear();
if (vibe === "leftist" || vibe === "left") {

}

else if (vibe === "liberal" || vibe === "lib") {

}

