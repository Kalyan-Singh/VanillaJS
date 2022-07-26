let closeBtn=document.querySelector(".close-btn");
closeBtn.addEventListener("click",close_func);
let show=document.querySelector(".sidebar-toggle");
show.addEventListener("click",show_func);

function close_func(){
    document.querySelector(".sidebar").style.transform="translate(-100%)";
}
function show_func(){
    document.querySelector(".sidebar").style.transform="translate(0%)";
}