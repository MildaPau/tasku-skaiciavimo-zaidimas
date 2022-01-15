"use strict"

// Taškų skaičiavimo žaidimas

var count1 = document.getElementById("count1");
var count2 = document.getElementById("count2");

var player1 = document.getElementById("player-1");
var player2 = document.getElementById("player-2");
var reset = document.getElementById("reset");

var maxNumber = document.getElementById("maxnumber");
var input = document.getElementById("input");

var number = 0;
var number1 = 1;
var number2 = 1;

input.value = 0;


input.addEventListener("change", function(){

    if(number != maxNumber){
        maxNumber.textContent = (`${input.value}`);
        // console.log(maxNumber);
    } 
});


player1.addEventListener("click", function(){

     if(number1 <= input.value){
        count1.textContent = (`${number1++}`); 
        // console.log(number1-1);
        // console.log(input.value);
        // console.log(maxNumber);
        // console.log(count1);
        
        if (number1-1 == input.value){
        count1.style.color = "green";
        }
    } 
   
})

player2.addEventListener("click", function(){
    if(number2 <= input.value){
        count2.textContent = (`${number2++}`);

         if (number2-1 == input.value){
        count2.style.color = "green";
        }
    }
})

reset.addEventListener("click", function(){
    count1.textContent = (`${number1 = 0}`);
    count2.textContent = (`${number2 = 0}`);
    input.textContent = (`${input.value = 0}`);
    maxNumber.textContent = (`${input.value}`);
    count1.style.color = "black";
    count2.style.color = "black";
    number = 0;
    number1 = 1;
    number2 = 1;
})
