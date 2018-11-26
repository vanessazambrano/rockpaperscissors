// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice= "";
var computerChoice= "";
var winner= "";
var randomNumber=0

// DOCUMENT READY FUNCTION BELOW
$("button").click(function() {
    userChoice = $("#input").val();
    $("#userChoice").text($("input").val());
    
     
    randomNumber = Math.random();
    if (randomNumber < 0.33){
        computerChoice = "rock"
    } else if (randomNumber < 0.66){
         computerChoice = "paper"
    } else{ 
         computerChoice = "scissors"
    }

     $("#computerChoice").text(computerChoice);
});

