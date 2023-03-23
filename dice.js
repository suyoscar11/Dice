randomno = Math.random();
rnd = Math.floor(randomno * 6) + 1;
imgg = "images/dice" + rnd + ".png";

document.querySelectorAll("img")[0].setAttribute("src", imgg);

tmro = Math.floor(Math.random() * 6) + 1;
imgg2 = "images/dice" + tmro + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imgg2);

if (tmro > rnd) {
  document.querySelector("h3").innerHTML = "Player 2 Wins!!";
} else if (tmro < rnd) {
  document.querySelector("h3").innerHTML = "Player 1 Wins!!";
} else {
  document.querySelector("h3").innerHTML = "It's a Tie!!";
}

document.querySelector("h1").innerHTML = onclick(window.reload());
