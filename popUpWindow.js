
var parent=document.querySelector(".paraParent"),
buttn=document.querySelector("button");
buttn.addEventListener("click",appear);
X =document.querySelector(".x");
section =document.querySelector(".content");
function appear(){
parent.style.display="block";
section.style.filter="blur(6px)";
}
X.addEventListener("click",disappear);
function disappear(){
parent.style.display="none";
section.style.filter ="blur(0px)";
}
parent.addEventListener("click",disappearparent);
function disappearparent(e){
if(e.target.className =="paraParent"){
  parent.style.display="none";
  section.style.filter ="blur(0px)";
}
}
