// Write your JavaScript script here.
let about_btn=document.getElementById("about-btn")

about_btn.addEventListener("mousedown",function(){
   
    about_btn.style.backgroundColor="#444D67"
})
about_btn.addEventListener("mouseout",function(){
   
    about_btn.style.backgroundColor="#F05F40"
})

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >30){
            $(".menu").css({"background-color":"white"});   
            $(".font").css({"color":"black"});   
            $(".orange").css({"color":"#F05F40"});   
            $(".orange").css({"font-size":"15px"});   
        }
        else if($(window).scrollTop() <=30&&window.innerWidth>768){
            $(".menu").css({"background-color":"transparent"});
            $(".font").css({"color":"rgba(240, 235, 235, 0.781)"}); 
            $(".orange").css({"color":"rgba(240, 235, 235, 0.781)"});
            $(".orange").css({"font-size":"20px"});
        }

    })
})


