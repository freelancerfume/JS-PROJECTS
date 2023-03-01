function renk(){
    document.getElementById("aa").style.color="red";
}

function welcome(){
    var x=document.getElementById("ii").value;
    document.getElementById("aa").innerHTML="Merhaba "+ x + " Web siteme hoşgeldin";
}

let text = document.getElementById("aa");
let colors = ["red", "green", "blue"];
let currentColor = 0;

function changeTextColor() {
  text.style.color = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
}