function topla(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    document.getElementById("hh").innerHTML=Number(x)+Number(y);
}

function cikar(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    document.getElementById("hh").innerHTML=Number(x)-Number(y);
}

function carp(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    document.getElementById("hh").innerHTML=Number(x)*Number(y);
}

function bol(){
    var x=document.getElementById("in1").value;
    var y=document.getElementById("in2").value;
    document.getElementById("hh").innerHTML=Number(x)/Number(y);
}