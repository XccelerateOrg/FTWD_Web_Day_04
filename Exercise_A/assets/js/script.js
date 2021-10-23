// Write your JavaScript script here.
var navItems = document.getElementsByClassName('nav-link');
for (let i = 0; i < navItems.length; i++) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            navItems[i].classList.add('scrollNavItems',
                'scrollNavItems:hover');
        } else {
            navItems[i].classList.remove('scrollNavItems')
        }
    })
}

var navLogo = document.getElementsByClassName('navbar-brand');
for (let i = 0; i < navLogo.length; i++) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            navLogo[i].classList.add('scrollNavLogo', 'scrollNavLogo:hover');
        } else {
            navLogo[i].classList.remove('scrollNavLogo')
        }
    })
}

var navBar = document.querySelector('nav');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        navBar.classList.add('scrollBar');
    } else {
        navBar.classList.remove('scrollBar')


    }
})