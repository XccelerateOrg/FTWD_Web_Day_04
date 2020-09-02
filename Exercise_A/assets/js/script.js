var myNav = document.getElementById('mynav');

window.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if (window.scrollY > 200 ) {
        myNav.classList.add("customNav");
        myNav.classList.remove("bg-transparent");
    } 
    else {
        myNav.classList.add("bg-transparent");
        myNav.classList.remove("customNav");
    }
});


