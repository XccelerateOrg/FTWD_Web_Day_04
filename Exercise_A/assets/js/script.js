var fnc_scrollto = function(to,id){
    var smoothScrollFeature = 'scrollBehavior' in document.documentElement.style;
    var articles = document.querySelectorAll("ul#content > li"), i;
    if (to == 'elem') to = articles[id].offsetTop;
    var i = parseInt(window.pageYOffset);
    if ( i != to ) {
        if (!smoothScrollFeature) {
            to = parseInt(to);
            if (i < to) {
                var int = setInterval(function() {
                    if (i > (to-20)) i += 1;
                    else if (i > (to-40)) i += 3;
                    else if (i > (to-80)) i += 8;
                    else if (i > (to-160)) i += 18;
                    else if (i > (to-200)) i += 24;
                    else if (i > (to-300)) i += 40;
                    else i += 60;
                    window.scroll(0, i);
                    if (i >= to) clearInterval(int);
                }, 15);
            }
            else {
                var int = setInterval(function() {
                    if (i < (to+20)) i -= 1;
                    else if (i < (to+40)) i -= 3;
                    else if (i < (to+80)) i -= 8;
                    else if (i < (to+160)) i -= 18;
                    else if (i < (to+200)) i -= 24;
                    else if (i < (to+300)) i -= 40;
                    else i -= 60;
                    window.scroll(0, i);
                    if (i <= to) clearInterval(int);
                }, 15);
            }
        }
        else {
            window.scroll({
                top: to,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
};