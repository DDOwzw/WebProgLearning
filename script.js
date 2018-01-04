var secNum = 4;

var gu = prompt("Guess a number:");

gu = Number(gu);

if(secNum === gu){
	alert("You got it right!");
}else if(gu > secNum) {
	alert("Too high. Guess again.");
}else {
	alert("Too low. Guess again.");
}