/*Add your JavaScript here*/
var introScore = 0;
var extroScore = 0;

var numQuestion = 0;

var q1a1= document.getElementById ("q1a1"); 
var q1a2= document.getElementById ("q1a2");

var q2a1= document.getElementById ("q2a1");
var q2a2= document.getElementById ("q2a2");

var q3a1= document.getElementById ("q3a1");
var q3a2= document.getElementById ("q3a2");

var result=document.getElementById ("result");





q1a1.addEventListener("click", extrovert );
q1a2.addEventListener("click", introvert);

q2a1.addEventListener("click", introvert);
q2a2.addEventListener("click", extrovert);

q3a1.addEventListener( "click", extrovert);
q3a2.addEventListener ("click", introvert);


function extrovert () {
extroScore= extroScore+1;
numQuestion= numQuestion+1;
console.log("numQuestion="+ numQuestion + "extroScore= " + extroScore);
  
  if (numQuestion == 3) {
console.log("The Quiz is done!");
    updateResult()
}
  
}

function introvert () {
introScore= introScore+1;
numQuestion= numQuestion+1 
  console.log("numQuestion="+ numQuestion+ "introScore=" + introScore);
  
  if (numQuestion == 3) {
console.log("The Quiz is done!");
    updateResult()
    
}
}

function updateResult (){
  
  if (extroScore>=2){
    result.innerHTML= "You are an Extrovert!"
  console.log("You are an Extrovert!");
} else if (introScore>=2) {
    result.innerHTML= "You are an Introvert!"
  console.log("You're an Introvert!");
}
  
}