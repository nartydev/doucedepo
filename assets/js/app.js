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