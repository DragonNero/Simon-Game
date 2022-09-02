gamePattern = [];
let colorOfThePushedButton;
userClickedPattern = [];




var started = false;


var level = 0;


$(document).keypress(function() {
  if (!started) {

    $("#level-title").text("Level " + level);
    startGame();
    started = true;
  }
});




let colorOfTheActiveButton;
function startGame(){

  level++;

  $("#level-title").text("Level " + level);

  colorOfTheActiveButton = randomColor();
  $("#" + colorOfTheActiveButton).fadeOut(200).fadeIn(200);
  console.log(colorOfTheActiveButton);

}



function gameColors() {
  gamePattern.push(randomColor());
  console.log(gamePattern);
}


function randomColor() {
  var buttonColours = ["red", "blue", "green", "yellow"];
  var randomNumber = Math.floor((Math.random() * 4));

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
