var image = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
]

var image2 = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
]


var length = image.length;
var randomNumber1 = Math.floor(Math.random() * length);
var randomNumber2= Math.floor(Math.random() * length);
document.getElementById('img').src=image[randomNumber1];
document.getElementById('img2').src=image2[randomNumber2];


if (randomNumber1 > randomNumber2) { 
   document.querySelector("h1").innerHTML = "Player 1 Wins";
} 

else if(randomNumber1 < randomNumber2) {
    document.getElementById('heading').innerHTML= "Player 2 Wins";
}


else if(randomNumber2 == randomNumber1) {
    document.getElementById('heading').innerHTML= "Draw";
}

else { 
    document.getElementById('heading').innerHTML= "Refresh Me";
}