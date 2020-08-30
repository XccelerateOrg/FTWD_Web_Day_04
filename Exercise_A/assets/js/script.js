// Write your JavaScript script here.

const nav = document.getElementsByTagName("nav")[0];


window.addEventListener("scroll", function() {
    // console.log(window.scrollY);
    if (window.scrollY > 100) {
        nav.classList.add("customNav");
        $("#navLogo").css({ color: '#F05F40' });
        $("#myList").css({ color: 'black' });
        // console.log('testing')
    } else {
        nav.classList.remove("customNav");
        $("#navLogo").css({ color: 'rgba(255, 255, 255, .7)' });
    }
});

// smooth scroll //
// library
var scroll = new SmoothScroll('a[href*="#"]');

// smooth scroll jquery
// $('.btn').on('click', function(e) {
//     console.log(this.hash);
// })