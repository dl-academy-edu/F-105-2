
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


var buttonMobileHeader = document.querySelector('.header__humburger_js');
var buttonCloseMobileHeader = document.querySelector('.mobile-menu__close_js');
var mobileHeader = document.querySelector('.mobile-menu_js');
 
 
buttonMobileHeader.addEventListener('click', function () {
    mobileHeader.classList.add('mobile-menu__open');
})
 
buttonCloseMobileHeader.addEventListener('click', function() {
    mobileHeader.classList.remove('mobile-menu__open');
})