//random number
var randomNumFirst = Math.floor (Math.random() * 6 ) + 1 ;
var randomNumSecond = Math.floor (Math.random() * 6 ) + 1 ;

//change src image
document.querySelector(".img1").src = "./images/dice" + randomNumFirst + ".png" ;
document.querySelector(".img2").src = "./images/dice" + randomNumSecond + ".png" ;

//check who win ?
if (randomNumFirst > randomNumSecond) {
    document.querySelector ("h1") .innerHTML = "Player 1 Win !!!" ;
} else if (randomNumFirst < randomNumSecond) {
    document.querySelector ("h1") .innerHTML = "Player 2 Win !!!" ;
} else {
    document.querySelector ("h1") .innerHTML = "DRAW !!!" ;
}

console.log (randomNumFirst) ;
console.log (randomNumSecond) ;
