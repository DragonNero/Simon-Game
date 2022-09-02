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

  if (pushedButton == activeButton) {
    obj.src = "sounds/" + activeButton + ".mp3";
  } else {
    obj.src = "sounds/wrong.mp3";
  }
  obj.play();
}
// $("#"+randomColor()).hide();
let colorOfTheActiveButton = randomColor();
$("#" + colorOfTheActiveButton).fadeOut(200).fadeIn(200);
console.log(colorOfTheActiveButton);


setTimeout(function() {
  $("h1").text("penis");
}, 1000);



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


// 3. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
//
// 4. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
//
// Once complete, you will get this effect when you click on any button.
//
