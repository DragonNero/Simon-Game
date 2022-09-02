gamePattern = [];
let colorOfThePushedButton;
userClickedPattern = [];




var started = false;

//2. Create a new variable called level and start at level 0.
var level = 0;

//1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function() {
  if (!started) {

    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    $("#level-title").text("Level " + level);
    startGame();
    started = true;
  }
});




let colorOfTheActiveButton;
function startGame(){
  colorOfTheActiveButton = randomColor();
  $("#" + colorOfTheActiveButton).fadeOut(200).fadeIn(200);
  console.log(colorOfTheActiveButton);
}


function nextSequence() {


}

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

  if (pushedButton == activeButton) {
    obj.src = "sounds/" + activeButton + ".mp3";
  } else {
    obj.src = "sounds/wrong.mp3";
  }
  obj.play();
}

// $("#"+randomColor()).hide();


// setTimeout(function() {
//   $("h1").text("penis");
// }, 1000);



$(".btn").click(function(event) {
  colorOfThePushedButton = event.target.id;
  animatePress(colorOfThePushedButton);
  userClickedPattern.push(colorOfThePushedButton);
  console.log(userClickedPattern);
  playAudio(colorOfThePushedButton, colorOfTheActiveButton);

})


function animatePress(currentColour) {
  $("#"+currentColour).addClass("pressed");
  setTimeout(function() {
    $(".btn").removeClass("pressed");
  }, 100);
}


// 1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
//
// You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
//
// 2. Create a new variable called level and start at level 0.
//
// 3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
//
// 4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
//
// 5. Inside nextSequence(), update the h1 with this change in the value of level.
//
// All going well, this is what you should see when you refresh the website:
