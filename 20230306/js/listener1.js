var x = document.getElementById("btnid");
x.addEventListener("click",Run);
x.addEventListener("mouseover",Run2);
x.addEventListener("mouseout",Run3);

function Run(){
    //alert("Hi EventListener");
    document.getElementById("h3id").innerHTML+="click çalıştı </br>";
}

function Run2(){
    //document.getElementById("btnid").style.color="green";
    document.getElementById("h3id").innerHTML+="mouseover çalıştı </br>";
}

function Run3(){
    document.getElementById("h3id").innerHTML+="mouseout çalıştı </br>";
}