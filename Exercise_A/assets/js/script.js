

    let navbar = document.querySelector('#jcnav');
    let navlogo = document.querySelector('#jclogo');
    let navlink = document.querySelectorAll('#jclink');
      window.onscroll = () => {
      if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
        navlogo.classList.add('newlogo');
        for (var i = 0; i < navlink.length; i++) {
            navlink[i].classList.add('newlink');
        };
      } else {
        navbar.classList.remove('nav-active');
        navlogo.classList.remove('newlogo');
        for (var i = 0; i < navlink.length; i++) {
            navlink[i].classList.remove('newlink');
        };
      }
    };

    // let navlogo = document.querySelector('#jclogo');
    //   window.onscroll = () => {
    //   if (window.scrollY > 300) {
    //     navlogo.classList.add('newlogo');
    //   } else {
    //     navlogo.classList.remove('newlogo');
    //   }
    // };