// Write your JavaScript script here.


//I spent a few hours sat practicing js with Tom Corbin, which is why there is a lot of greentext in this js. He also showed me a bunch of other things that can be done when scrolling.


let navbar1 = document.getElementsByClassName('navbar')[0]
let navbar2 = document.getElementById('navbar')
let navbarBrand = document.getElementsByClassName('navbarbrand')[0]
let serviceBoxes = document.getElementsByClassName('servicebox')

console.log(navbar2)
 console.log(navbarBrand)

 navbar1.style.backgroundColor = 'transparent'

//  Needs tp be run every time the window scrolls
//  var y = window.scrollY

//  console.log(y)

// function bgchange(something){
//     if( something >= 400){
//         navbar1.style.backgroundColor = 'white';
//     }
// }
 
//  window.addEventListener('scroll', function() {
//     //  code below is run every time the window scrolls
//     let y = window.scrollY

//     console.log(y)
//     bgchange(y)
// });

// this one is for the navbar to scroll
window.addEventListener('scroll', function() {
    let y = window.scrollY

    if( y >= 400){
        navbar1.style.backgroundColor = 'white';
        navbarBrand.style.fontSize = '1.2rem';

    } else if (y <= 400){
        navbar1.style.backgroundColor = 'transparent';
        navbarBrand.style.fontSize = '1rem';
    }


//this one is for the service box to slide in 
//the for loop sets out the window height and the service boxes
//the if function sets out that when the serviceboxes hit the halfway point on the screen, it removes the inactive class and adds the active class
//the else function does it the opposite way around 
//the bottom 'return' sets out the speed the service boxes come in. the - i makes sure the individual boxes come in, not all of them at once. 
    for(let i = 0; i < serviceBoxes.length; i++){
        let screenHeight = window.innerHeight;
        let distanceToTopOfScreen = serviceBoxes[i].getBoundingClientRect().top;

        if(distanceToTopOfScreen <= screenHeight / 2){
            setTimeout(() => {
                serviceBoxes[i].classList.remove('inactive');
                serviceBoxes[i].classList.add('active');
            }, (serviceBoxes.length - i)*250);
        }else{
            setTimeout(() => {
                serviceBoxes[i].classList.remove('active');
                serviceBoxes[i].classList.add('inactive');
                
            }, (serviceBoxes.length - i)*250);
        }
    }
});




// let a = 5
// let b = 6
// let c = 12
// let d = 15

// let addition = (x,y) => {
//     console.log(x + y)
//     console.log(x * y)
//     console.log(x / y)
//     console.log(x % y)

//     return String(x + y)
// }

// let something = addition(a,b) + addition(c,d)

// console.log(something)

// // '1127'

// let list1 = [1,2,3,4]
// let list2 = [2,3,4,5,6]
// let list3 = [6,7,8,9,7,8]

// let addList = (x) => {
//     let sum = 0;
//     for (let i = 0; i < x.length; i++){
//         sum = sum + x[i]
//      }
//      return sum
// }
// console.log(addList(list3))