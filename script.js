const submitBtn =document.getElementById("submit");
submitBtn.addEventListener("click",function(){
 //hide notify section
const notifySection = documentgetElementById("notify-section");
notifySection.style.display = "none";
}
for (var i= 0; i<10; i++){
    var randomaNum = Math.floor(Math.random(max-min))+1;
    var output = Math.round(randomNum);
    console.log(output);
}