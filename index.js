var randomnum1 = Math.floor(Math.random() * 6 + 1);

var diceImage = "dice" + randomnum1 + ".png";

var imgSource = "images/" + diceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imgSource);

var randomnum2 = Math.floor(Math.random() * 6 + 1);

var imgSource2 = "images/dice" + randomnum2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", imgSource2);


if (randomnum1 > randomnum2) {
  document.querySelector("h1").textContent = "🚩Player 1 wins!";
}
else if (randomnum1 < randomnum2) {
  document.querySelector("h1").textContent = "Player 2 wins!🚩";
}
else {
  document.querySelector("h1").textContent = "Tie";
}
