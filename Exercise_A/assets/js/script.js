// Write your JavaScript script here.

TopNav = document.getElementById("mainNav");
TopNavText = document.getElementsByClassName("navbar-brand")[0];
RightNav = document.getElementsByClassName("link");
window.onscroll = function() {scrollFunction()};

console.log(RightNav, "a tag in nav")

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    TopNav.style.backgroundColor =  "white";
    TopNavText.style.color = "#f05f40";
    TopNavText.style.fontSize = "15px";
    
    for (let i=0; i< RightNav.length; i++) {
        RightNav[i].style.color = "black";
    }
  } else {
    TopNav.style.backgroundColor =  "rgba(255, 255, 255, 0)";
    TopNavText.style.color="white";
    TopNavText.style.fontSize = "20px";
    for (let i=0; i< RightNav.length; i++) {
        RightNav[i].style.color = "white";
    }
  }
}
