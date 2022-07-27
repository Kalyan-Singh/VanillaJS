let btn=document.querySelector(".modal-btn");
btn.addEventListener("click",funct1);
function funct1(){
    document.querySelector(".modal-overlay").style.visibility="visible";
    document.querySelector(".modal-overlay").style.zIndex="10";   
}

let close=document.querySelector(".close-btn");
close.addEventListener("click",funct2);
function funct2(){
    document.querySelector(".modal-overlay").style.visibility="hidden";
    document.querySelector(".modal-overlay").style.zIndex="-10";   
}