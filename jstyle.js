var randomNumber1 = Math.floor(Math.random()*6) + 1;//1-6

var randomDiceImage = "dice"+randomNumber1 + ".png";//dice1.png ------ dice6.png

var randomImageSource = "images/" + randomDiceImage;//image/dicel.png   - images/dices6.png

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() *6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);


if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " Play 1 Win";
}
else if (randomNumber2 > randomNumber1) 
{
    document.querySelector("h1").innerHTML = " Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}
