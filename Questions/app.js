buttons=Array.from(document.querySelectorAll(".show-plus"));

buttons2=Array.from(document.querySelectorAll(".hide-minus"));

for(let i=0;i<buttons.length;i++){
    var ele=buttons[i];
    ele.addEventListener("click",function(ele){
        show_func(this);
    });
}

for(let i=0;i<buttons2.length;i++){
    var ele=buttons2[i];
    ele.addEventListener("click",function(ele){
        minus_func(this);
    });
}

function show_func(ele){
    let plus=ele;
    let minus=ele.parentElement.nextElementSibling.children[0];
    let qt=ele.parentElement.parentElement.parentElement.nextElementSibling;
    let buttons=Array.from(document.querySelectorAll(".show-plus"));
    for(let i=0;i<buttons.length;i++){
        var ele=buttons[i];
        hide_func(buttons[i]);
    }
    plus.style.display="none";
    minus.style.display="inline";
    qt.classList.add("show-text");
    qt.classList.remove("question-text");
    }



function hide_func(ele){
    b2=document.querySelectorAll(".show-plus");
    for(let i=0;i<b2.length;i++){
        if(b2[i].style.display=="none"){
            b2[i].style.display="inline";
            let minus=b2[i].parentElement.nextElementSibling.children[0];
            minus.style.display="none";
        }
    }
    let qt=ele.parentElement.parentElement.parentElement.nextElementSibling;
    qt.classList.add("question-text");
    qt.classList.remove("show-text");
}

function minus_func(ele){
    let plus=ele.parentElement.parentElement.firstElementChild.children[0];
    plus.style.display="inline";
    let qt=ele.parentElement.parentElement.parentElement.nextElementSibling;
    qt.classList.add("question-text");
    qt.classList.remove("show-text");
    ele.style.display="none";
}