var x = Math.floor(Math.random()*10);
var t = prompt("Lütfen bir sayı tahmin edin");

while(parseInt(t)!=x){
    t = prompt("While - Yeniden deneyin");
}

alert("Tebrikler");