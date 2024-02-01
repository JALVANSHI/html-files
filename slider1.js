
var slide=document.querySelector('.slider-items').children;
var nextslide=document.querySelector(".right-slide");
var prevslide=document.querySelector(".left-slide");
var totalslides=slide.length;
var index=0;

nextslide.onclick=function() {
    next("next");
}
prevslide.onclick=function() {
    next("prev");
}
function next(direction){
    if(direction=="next"){
        index++;
        if(index==totalslides){
            index=0;
        }
        else{
            index--;
        }
    }
    else{
        if(index==0){
            index=totalslides-1;
        }
    }
 for(i=0;i<slide.length;i++){
     slide[i].classList.remove("active")
 }
 slide[index].classList.add("active");   
}
