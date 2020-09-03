$(function(){


// Write your JavaScript script here.
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 877
});



var navbg = document.querySelector(".navbar");
var brandname = document.querySelector(".navbar a");
var mynav = document.getElementsByTagName("nav")[0];

console.log(mynav);




window.addEventListener("scroll", function(){
        console.log(window.scrollY);
    if (window.scrollY > 100) {
        navbg.style.backgroundColor = "grey";
        brandname.style.color = "darkorange";
                
    } else {
        navbg.style.backgroundColor = "transparent";
        brandname.style.color = "white"; 

    }
});

})