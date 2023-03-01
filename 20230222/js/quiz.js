var s = ["1. Soru", "2. Soru", "3. Soru"];
var c = ["1. Cevap", "2. Cevap", "3. Cevap"];
var k = 0;

document.getElementById("h5").innerHTML = s[k];

function cevap() {
    document.getElementById("pp").innerHTML = c[k];
}

function ileri() {
    if (k == s.length - 1) {
        alert("Sorular bitti");
    } else {
        k++;
        document.getElementById("h5").innerHTML = s[k];
        document.getElementById("pp").innerHTML = "";
    }
}

function geri() {
    if (k == 0) {
        alert("Bu ilk soru");
    } else {
        k--;
        document.getElementById("h5").innerHTML = s[k];
        document.getElementById("pp").innerHTML = "";
    }
}