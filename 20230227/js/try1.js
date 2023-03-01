function Test(){
    try{
        alertt("Merhaba Try & Catch");
    }catch(e){
        document.getElementById("hid").innerHTML=e;
    }
}