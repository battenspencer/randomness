//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];

function randomNumber(){
    let number = Math.random();
    let timesTen = number * 22;
    let round = Math.floor(timesTen);
    console.log(round);
}

function randomLetter(){
    let number = Math.random();
    let randomizer = number * alphabet.length;
    let round = Math.floor(randomizer);
    console.log(alphabet.charAt(round));
}

function randomFood(){
    let number = Math.random();
    let randomizer = number * foods.length;
    let round = Math.floor(randomizer);
    console.log(foods[round]);
}

function randomStudent(){
    let number = Math.random();
    let randomizer = number * students.length;
    let round = Math.floor(randomizer);
    console.log(students[round]);
}

function randomGroup(){
    let studentsGroup = [];
    for(let i = 0; i < 3; i++){
        let number = Math.random();
        let randomizer = number * students.length;
        let round = Math.floor(randomizer);
        studentsGroup.push(students[round]);
        console.log(studentsGroup);
        
    }
   
}


randomNumber();
randomLetter();
randomFood();
randomStudent();
randomGroup();


/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////