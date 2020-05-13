var main=document.querySelector(".contentOuter"),
    btn=document.querySelector("button"),
section=document.querySelector(".sec");

btn.addEventListener("click",appear);
function appear(){
main.style.display= "block";
section.style.filter ="blur(6px)";
}
main.addEventListener("click",disappear);
function disappear(e){
if(e.target.className == "contentOuter"){
main.style.display ="none";
section.style.filter ="blur(0)";
}
}
