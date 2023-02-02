let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]


let fighterButtonEl = document.getElementById("fighter-btn");

function getRandomNumber(){
   return Math.floor(Math.random()* fighters.length);
}


function displayEmojis (x){
let emoji1 = fighters[getRandomNumber()];
let emoji2 = fighters[getRandomNumber()];
while(emoji1===emoji2){
    emoji2 = fighters[getRandomNumber()];
}
document.querySelector("#stage").textContent = emoji1 +"Vs" + emoji2;
}

