//globel variable
//**********************************************
var wordOptions = ["kane", "luke", "kenny","brown"];
var selectedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blankAndSuccesses = [];
var wrongLetters = [];

//game counters
var winCounter = 0;
var lossCounter = 0;
var gussesLeft = 9;

 //function
 //*****************************************

 function startGame(){
     selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
     lettersinWord = selectedWord.split("");

     console.log(selectedWord);
     console.log(lettersinWord);
 }

 //main process
 //****************************************************