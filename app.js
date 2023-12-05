var numSquares=6;
var colors = [];
var pickedColor;
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();   
}

//Sets the game for the chosen mode
function setupModeButtons(){
    
	for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			pickedColor= reset();
		});
	}
}

//Checks if the guess is correct or not
function setupSquares(){
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function () {
            var clickedColor = this.style.backgroundColor;
            if (pickedColor === clickedColor) {
                messageDisplay.textContent = "You are good at guessing!";
                changeColors(pickedColor);
                h1.style.background = pickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Wrong Choice!";
            }
        });
    }
}

//Resets the game
function reset(){
    colors = generateRandomColor(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();

    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "Reset Game";
    
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        console.log("hello")
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
    return pickedColor;
}

//Gives functionality to the reset game button
resetButton.addEventListener("click", function(){
    reset();
})


//Fills the squares with the random colors
function changeColors(color) {
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}


//Picks a random color
function pickColor() {  
    var random = Math.floor(Math.random() * colors.length); //picks a random color from the array
    return colors[random];
}


//Generates random colors to fill the squares
function generateRandomColor(num){
   
    var numbers = "" ;
    colors=[];
    for (i=0; i < num; i++){     
     
        var randomColor= "rgb(" 
        for (j=0; j<3; j++){
            var temp=  Math.floor(Math.random() * 255);
            if(j == 0){
                numbers =  temp;
            }
            else {
                numbers =  numbers +", " + temp;
            }
            
        }
        randomColor= randomColor+ numbers +")" ;
        colors.push(randomColor);
    }
    return colors;
}
  
