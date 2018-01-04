var numSquare = 6;
var colorPool = genRandomColor(numSquare);
var sq = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var correct = document.getElementById("correct");
var h1 = document.querySelector("h1");
var	resetButton = document.querySelector("#reset");
var easyBtn	= document.getElementById("easy");
var hardBtn	= document.getElementById("hard");


easyBtn.addEventListener("click", function(){
	numSquare = 3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colorPool = genRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < sq.length; i++){
		if(colorPool[i]){
			sq[i].style.backgroundColor = colorPool[i];
		}else{
			sq[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	numSquare = 6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colorPool = genRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < sq.length; i++){
		sq[i].style.backgroundColor = colorPool[i];
		sq[i].style.display = "block";
	}
	
});

resetButton.addEventListener("click", function(){
	colorPool = genRandomColor(numSquare);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "new colors";
	for(var i = 0; i < sq.length; i++){
		sq[i].style.backgroundColor = colorPool[i];
	}
	h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < sq.length; i++){
	sq[i].style.backgroundColor = colorPool[i];
	sq[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			correct.textContent = "Correct!"
			resetButton.textContent = "Play Again?";
			changeColor(pickedColor);
			h1.style.backgroundColor = pickedColor;

		}else{
			correct.textContent = "Try Again";
			this.style.backgroundColor= "#232323";
	}
	});
	
}

function changeColor(pickedColor){
	for(var i = 0; i < sq.length; i++){
		sq[i].style.backgroundColor = pickedColor;
	}
}

function pickColor(){
	var randomNum = Math.floor(Math.random() * colorPool.length);
	return colorPool[randomNum];
}

function genRandomColor(num) {
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	//rgb(255, 0, 0)
	return "rgb(" + r + ", " + g + ", " + b + ")";
}