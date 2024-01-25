let index = 1;
slider(index);
function slider(n){
    let slider = document.getElementsByClassName("slider");
    let circle = document.getElementsByClassName("circle");

    if (n>slider.length) {
        index = 1;
    }
    if (n<1) {
        index = slider.length;
    }
    for (let i=0; i<slider.length; i++) {
        slider[i].style.display = "none";
        circle[i].className = circle[i].className.replace("none","");
    }
    slider[index-1].style.display = "block";
    circle[index-1].className = circle[index-1].className +" active";
}

function next(n) {
    slider(index = index + n)
}
function circle(n) {
    slider(index = n)
}

let start = setInterval(function() {
    document.getElementById("next").click()
},2000)




const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

navLink.forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove("show-menu")
}))




const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");

    this.scrollY >= 700
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
}

window.addEventListener('scroll', scrollUp);