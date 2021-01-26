
var popupContact = document.querySelector('.contact-popup-overlay');
var popupButton = document.querySelector('.poster-button_js');
var popupCloseBtn = popupContact.querySelector('.button-close');
var firstInput;

popupButton.addEventListener('click', function () {
    popupContact.classList.add('open');
    firstInput = popupContact.querySelector('#name-input');
    firstInput.focus();

    document.body.style.overflow = 'hidden';
})

popupCloseBtn.addEventListener('click', function() {
    popupContact.classList.remove('open')
    popupButton.focus();
    document.body.style.overflow = 'initial';
})

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        popupContact.classList.remove('open')
        popupButton.focus();
        document.body.style.overflow = 'initial';
    } 
}) 

popupContact.addEventListener('click', function(evt) {
    if (evt.target === popupContact ) {
        popupContact.classList.remove('open');
        popupButton.focus();
        document.body.style.overflow = 'initial';
    }
})


var buttonMobileMenu = document.querySelector('.header__humburger_js');
var buttonCloseMobileMenu = document.querySelector('.mobile-menu__close_js');
var mobileMenu = document.querySelector('.mobile-menu');

buttonMobileMenu.addEventListener('click', function () {
    mobileMenu.classList.add('.mobile-menu__open');
})

buttonCloseMobileMenu.addEventListener('click', function() {
    popupContact.classList.remove('.mobile-menu__open');
})




