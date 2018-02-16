// MENU 

const header = document.querySelector('header')
const link = document.querySelectorAll('nav ul li a')
const borderColor = document.querySelector('.active')
const logo = document.querySelector('.logo')

if(window.innerWidth < 1000) {
    logo.setAttribute('src', 'assets/img/logo.png') 
}

addEventListener("scroll", () => {
    if(window.innerWidth > 1000) {
        if(pageYOffset > 10) {
            header.classList.add('menu-scroll')
            for(i = 0; i < link.length; i++) {
                link[i].classList.add('color-white')
            }
            borderColor.style.border = "1px solid #A6A6A6"
            logo.setAttribute('src', 'assets/img/logo.png')   
        } else {
            header.classList.remove('menu-scroll')
            for(i = 0; i < link.length; i++) {
                link[i].classList.remove('color-white')
            }
            borderColor.style.border = "1px solid #FFF"   
            logo.setAttribute('src', 'assets/img/logo-white.png')     
        }
    } else {
        logo.setAttribute('src', 'assets/img/logo.png') 
    }
});

// RESPONSIVE MENU

const icon = document.querySelector("#navResponsive");
const menu = document.querySelector(".menu");

icon.addEventListener('click', () => {
    
    if(icon.getAttribute('class') == "fa fa-bars") {
        menu.style.left = "0px";
        for(var i = 0; i < link.length; i++) {
            link[i].style.display = "block";
        }
        icon.className = "fa fa-times";
        icon.style.color = "#A6A6A6";
    } else {
        menu.style.left = "-100%";
        icon.className = "fa fa-bars";
    }    
});
