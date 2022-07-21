const Hb=document.querySelector(".Hex")
Hb.addEventListener("click",parent);
function parent(){
const button1=document.querySelector(".b1")
button1.addEventListener("click",hex_color);
function hex_color(){
    var letters="0123456789ABCDEF";
    var color="#";
    for (let i=0;i<6;i++){
        color=color+letters[Math.floor(Math.random()*16)];
    }
    document.querySelector("body").style.backgroundColor=color; 
    document.querySelector(".color").innerHTML=color;
}
}