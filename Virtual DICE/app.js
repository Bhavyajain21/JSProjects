var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);


var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
document.getElementsByTagName("img")[0].setAttribute("src", randomDiceImage1);
document.getElementsByTagName("img")[1].setAttribute("src", randomDiceImage2);