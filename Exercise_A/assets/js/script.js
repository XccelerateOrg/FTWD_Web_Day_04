// Write your JavaScript script here.
window.onscroll = function() { 
    changeBgColor() 
}; 


function changeBgColor () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('nav').style['border-bottom-style'] = 'none';
        document.getElementById('nav').style['background-color'] = '#fff';
        // let navLink = document.getElementsByClassName('nav-link');
        // for (let i = 0; i < navLink.length; i++) {
        //     navLink[i].style.color = '#000';
        // }
    } else {
        document.getElementById('nav').style['border-bottom-style'] = 'none';
        document.getElementById('nav').style['border-bottom-color'] = 'rgba(255, 255, 255, 0.7)';
        document.getElementById('nav').style['border-bottom-width'] = '1px';
        document.getElementById('nav').style['background-color'] = 'transparent';
    }
}
