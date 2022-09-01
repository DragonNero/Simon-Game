gamePattern = [];
var colorOfThePushedButton;
userClickedPattern = [];

function gameColors() {
  gamePattern.push(randomColor());
  console.log(gamePattern);
}


function randomColor() {
  var buttonColours = ["red", "blue", "green", "yellow"];
  var randomNumber = Math.floor((Math.random() * 4));
  // let randomChosenColour = buttonColours[randomNumber];
  return buttonColours[randomNumber];
}


function playAudio(pushedButton, activeButton) {
  var obj = document.createElement('audio');

  if (pushedButton == activeButton){
    obj.src = "sounds/"+activeButton+".mp3";
  } else {
    obj.src = "sounds/wrong.mp3";
  }
  obj.play();
}
// $("#"+randomColor()).hide();
let colorOfTheActiveButton = randomColor();
$("#" + colorOfTheActiveButton).fadeOut(200).fadeIn(200);
console.log(colorOfTheActiveButton);





$(".btn").click(function(event) {
  colorOfThePushedButton = event.target.id;
  userClickedPattern.push(colorOfThePushedButton);
  console.log(userClickedPattern);
  playAudio(colorOfThePushedButton, colorOfTheActiveButton);
})
