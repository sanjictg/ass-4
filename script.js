const submitBtn =document.getElementById("submit");
submitBtn.addEventListener("click",function(){
 //hide notify section
const notifySection = documentgetElementById("notify-section");
notifySection.style.display = "none";
}
   

//generate random pin
function generate(){
//set pin length/complexity
let complexity =document.getElementById("slider").Value;
//possible pin values
let values = 123456789
let pin = "";
//create for loop to choose pin characters
for( var i = 0; i <= complexity; i++){
pin = pin+values.charAt(Math.floor(Math.random() * Math.floor(values.length-1)));
}
// add pin to display area
document.getElementById("display").value = pin;

}
