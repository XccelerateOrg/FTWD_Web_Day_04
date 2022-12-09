// Write your JavaScript script here.
function morePhoto() {
    var more = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (more.style.display === "none") {
      btnText.innerHTML = "Show More"; 
      more.style.display = "none";
    } else {
      btnText.innerHTML = "Show Less"; 
      more.style.display = "flex";
    }
  }

  