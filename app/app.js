var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var answ=document.getElementsByClassName("answ");
var question=document.querySelector(".question");
for (let i = 0; i < answ.length; i++) {
    answ[i].addEventListener("click",function(){
        var aparat=document.querySelector(".aparat");
        question.style.display="none";
        aparat.style.display="block"
    })
}