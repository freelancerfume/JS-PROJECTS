function Topla(x,y,z,a,b){
    document.getElementById("h3id").innerHTML=x+y+z+a+b;
}

function Topla2(...args){
    var sum = 0;
    for(var i of args){
        sum += i; // sum = sum + i;
    }
    document.getElementById("h2id").innerHTML=sum;
}