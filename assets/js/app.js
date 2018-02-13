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