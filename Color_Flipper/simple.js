const sB=document.querySelector(".Simple");
sB.addEventListener("click",parent1);
function parent1(){
    const b1=document.querySelector(".b1");
    b1.addEventListener("click",cchange);
    function cchange(){
    let colors=["green","blue","red","black","white","yellow"];
    const ele=document.querySelector("body");
    ele.style.backgroundColor=colors[Math.floor(Math.random()*6)];
}
}