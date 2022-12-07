var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


function start(){
  document.querySelector("#two").onclick = function(){
  document.querySelector("#two").classList.add("vis");
  show();
}
document.querySelector("#three").onclick = function(){
document.querySelector("#three").classList.add("vis");
show();
}
document.querySelector("#foor").onclick = function(){
document.querySelector("#foor").classList.add("vis");
show();

}

}


function show() {
  if (document.querySelector("#two").classList.contains("vis") ===
  document.querySelector("#three").classList.contains("vis")) {
    if (document.querySelector("#two").classList.contains("vis") ===
    document.querySelector("#foor").classList.contains("vis")){
      if (document.querySelector("#three").classList.contains("vis") ===
      document.querySelector("#foor").classList.contains("vis")){
          document.getElementById('one').removeAttribute('disabled');
      }
    }


  }


};
start();
