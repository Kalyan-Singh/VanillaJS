let reviews=["Hello I'm using ppt to show this review it is something random that I typed please don't read it.Now comes the last line of this review.This was a part of vanillaJS projects.Bye!","Hello I'm using xml to show this review it is something random that I typed please don't read it.Now comes the last line of this review.This was a part of vanillaJS projects.Bye!","Protects you against tracking through free, centralized, content delivery. It prevents a lot of requests from reaching networks like Google Hosted Libraries, and serves local files to keep sites from breaking. Complements regular content blockers.","Decentraleyes is no silver bullet, but it does prevent a lot of websites from making you send these kinds of requests. Ultimately, you can make Decentraleyes block requests for any missing CDN resources, too.","Websites have increasingly begun to rely much more on large third-parties for content delivery. Canceling requests for ads or trackers is usually without issue, however blocking actual content, not unexpectedly, breaks pages"];
console.log(reviews.length);
let names=["Logan Kylie","James Scott","Kylie Page","Owens Steiner","Reily Cage"];
let images=["images/dan-jpsp2-3-_custom-98d6a8ae1900e40a374e983be220f91b7ead7c13-s1100-c50.jpg","images/100k-ai-faces-7.jpg","images/1604754765_684227.jpeg","images/images-1.fit_lim.size_376x.jpg","images/photo-1597223557154-721c1cecc4b0.jpeg"]
let roles=["Web Dev","UI Design","UX Desginer","Blockchain Developer","Student"];
let blist=document.querySelectorAll(".b1");
for (let i=0;i<blist.length;i++){
    switch(i){
        case (0):
            blist[i].addEventListener("click",left_func);
            break;
        case (1):
            blist[i].addEventListener("click",right_func);
            break;
    }
}
var count=0;
function left_func(){
    if (count==0){
        count=4;
        document.querySelector(".rev").innerHTML=reviews[count];
        document.querySelector(".name").innerText=names[count];
        document.querySelector(".face").src=images[count];
        document.querySelector(".desg").innerText=roles[count];

    }
    else{
        count--;
        document.querySelector(".rev").innerHTML=reviews[count];
        document.querySelector(".name").innerText=names[count];
        document.querySelector(".face").src=images[count];
        document.querySelector(".desg").innerText=roles[count];
    }
}
function right_func(){
    if (count==4){
        count=0;
        document.querySelector(".rev").innerHTML=reviews[count];
        document.querySelector(".name").innerText=names[count];
        document.querySelector(".face").src=images[count];
        document.querySelector(".desg").innerText=roles[count];
    }
    else{
        count++;
        document.querySelector(".rev").innerHTML=reviews[count];
        document.querySelector(".name").innerText=names[count];
        document.querySelector(".face").src=images[count];
        document.querySelector(".desg").innerText=roles[count];
    }
}
document.querySelector(".random").addEventListener("click",rand_func);
function rand_func(){
    let temp=Math.floor(Math.random()*4);
    document.querySelector(".rev").innerHTML=reviews[temp];
    document.querySelector(".name").innerText=names[temp];
    document.querySelector(".face").src=images[temp];
    document.querySelector(".desg").innerText=roles[temp];
}
