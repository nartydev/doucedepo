const allSwitch = document.querySelectorAll('.slide-switch');
const slide = document.querySelectorAll('.one-slide');

let idSlider = 0;

for(let i = 0; i < allSwitch.length; i++) {
    allSwitch[i].addEventListener('click', () => {
        if(allSwitch[i].getAttribute('slide-number') == slide[i].getAttribute('slide-number')) {
            allSwitch[idSlider].classList.remove('active')
            allSwitch[i].classList.add('active')
            slide[idSlider].setAttribute('class', 'one-slide last-slide')
            slide[i].setAttribute('class', 'one-slide active-slide')
            idSlider = slide[i].getAttribute('slide-number')
        }
    })
}

// MENU 

const header = document.querySelector('header')
const link = document.querySelectorAll('nav ul li a')
const borderColor = document.querySelector('.active')

addEventListener("scroll", () => {
	console.log(window.innerWidth);
	if(pageYOffset > 10) {
        header.classList.add('menu-scroll')
        for(i = 0; i < link.length; i++) {
            link[i].classList.add('color-white')
        }
        borderColor.style.border = "1px solid #A6A6A6"
	} else {
        header.classList.remove('menu-scroll')
        for(i = 0; i < link.length; i++) {
            link[i].classList.remove('color-white')
        }
        borderColor.style.border = "1px solid #FFF"        
	}
});

// RESPONSIVE MENU

function openNav() {
    
        const icon = document.querySelector("#navResponsive");
        const menu = document.querySelector(".menu");
        const link = document.querySelectorAll(".menu a");
    
        if(icon.getAttribute('class') == "fa fa-bars") {
            menu.style.left = "0px";
            for(var i = 0; i < link.length; i++) {
                link[i].style.display = "block";
            }
            icon.className = "fa fa-times";
            icon.style.color = "black";
        } else {
            menu.style.left = "-100%";
            icon.className = "fa fa-bars";
            icon.style.color = "white";
        }
        
    }