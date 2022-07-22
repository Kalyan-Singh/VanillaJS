const inc=document.querySelector(".inc");
inc.addEventListener("click",function(){
    let c1=document.querySelector(".count").innerHTML;
    c1=Number(c1);
    c1=c1+1;
    document.querySelector(".count").innerHTML=c1;
    if (c1>0){
        document.querySelector(".count").style.color="green";
    }
    if (c1==0){
        document.querySelector(".count").style.color="black"
    }
})

const dec=document.querySelector(".dec");
dec.addEventListener("click",function(){
    let c1=document.querySelector(".count").innerHTML;
    c1=c1-1;
    document.querySelector(".count").innerHTML=c1;
    if (c1<0){
        document.querySelector(".count").style.color="red";
    }
    if (c1==0){
        document.querySelector(".count").style.color="black"
    }
})

const res=document.querySelector(".res");
res.addEventListener("click",function(){
    let c1=document.querySelector(".count").innerHTML;
    c1=0;
    document.querySelector(".count").innerHTML=c1;
    document.querySelector(".count").style.color="black"
})