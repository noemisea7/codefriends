
console.log("Welcome to Black Radical Bookclub! A place where you can get Black radical texts reccomended to you based on your personality :p\n")
const prompt = require('prompt-sync')({sigint: true});
const name = prompt("What's your name: ")
console.clear();

let politic, role, vibe;

// Beginning of Test
console.log("Awesome, good to meet to you comrade "+name+"!\n");
console.log("To start we'll need a sense of your politics.\n");
while (true) {
    const politic_a = prompt("Would you consider yourself more of a liberal or a leftist: ").toLowerCase().trim();
    if (politic_a == "leftist" || politic_a == "left" || politic_a == "liberal" || politic_a == " lib") { 
        politic = (politic_a==="leftist" || politic_a==="left" ?  true : false);
        break;
    }
    else { console.log("Invalid response. Please try again.")}
}
console.clear();
console.log("Okay, good to know!\n");
while (true) {
    const role_a = prompt("What excites you more? Theory or practice: ").toLowerCase().trim();
    if (role_a == "theory" || role_a == "t" || role_a == "practice" || role_a == "p") {
        role = (role_a==="practice" || role_a==="practice" ?  true : false); 
        break;
    }
    else { console.log("Invalid response. Please try again.")}
}
console.clear();
console.log("Hopefully we'll find a good complement to your interests!\n");
while (true) {
    const vibe_a = prompt("Which of the following set of terms describes you best: (1) airy, imaginative, and dreamy OR (2) grounded, lucid, and realistic: ").toLowerCase().trim();
    if (vibe_a == "1" || vibe_a == "2") { 
        vibe = (vibe_a==="2" ?  true : false); 
        break;
    }
    else { console.log("Invalid response. Please try again.")}
}

// This will produce a number from 0 to 7 based on the results.
politic = politic << 2;
role = role << 1;
const option = politic + role + vibe;

console.clear();
switch (option) {

    // liberal, theory, & dreamy
    case 0: 
        console.log("Your book is Race Matters by Cornel West.\n");
        break;

    // liberal, theory, & realistic
    case 1:
        console.log("Your book is The New Jim Crow by Michelle Alexander.\n");
        break;

    // liberal, practice, & dreamy
    case 2:
        console.log("Your book is Emergent Strategy by adrienne maree brown.\n");
        break;

    // liberal, practice, & realistic
    case 3:
        console.log("Your book is Building A Movement to End the New Jim Crow by Daniel Hunter.\n");
        break;

    // leftist, theory, & dreamy 
    case 4:
        console.log("Your text is the Combahee River Collective Statement.\n");
        break;

    // leftist, theory, & realistic 
    case 5:
        console.log("Your text is An Insider's Take On How the Black Panther Party Was Hurt By Its Own Ideals by Don Cox.\n");
        break;

    // leftist, practice, & dreamy
    case 6:
        console.log("Your book is Pedagogy of the Oppressed by Paulo Freire.\n");
        break;

    // leftist, practice, & realistic 
    case 7: 
        console.log("Your book is Let Your Motto Be Resistance by Kali Akuno.\n");
        break;
}

console.log("Thanks for participating "+name+".\n\nYou can find your book at z-lib.org or at the Black Socialists of America website.");


