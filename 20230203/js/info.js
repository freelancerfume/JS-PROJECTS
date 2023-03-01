function check(){
    //alert("You cannot paste text in to this area");
    document.getElementById("hh").innerHTML="You cannot paste text in to this area";
    document.getElementById("hh").style.color="red";
}

function mouseOver(){
    document.getElementById("pp").style.color="blue";
    document.getElementById("pp").style.fontSize="150px";
    document.getElementById("pp").innerHTML="Merhaba";
}

function mouseOut(){
    document.getElementById("pp").style.color="green";
    document.getElementById("pp").style.fontSize="24px";
    document.getElementById("pp").innerHTML="Hello";
}

function copyText(){
    alert("Do not copy text");
}

function cutText(){
    alert("You cut the text");
}

