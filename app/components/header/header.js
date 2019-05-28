// // header slider left

let leftPagin = $(".header__pagination-left");
let rightPagin = $(".header__pagination-right");

$(".header__right-slider").on("init", function(event, slick){
    $(leftPagin).text(String('0' + parseInt(slick.currentSlide + 1) + ''));
    $(rightPagin).text(String('/0' + parseInt(slick.slideCount)));
});

$(".header__right-slider").on("afterChange", function(event, slick, currentSlide){
    $(leftPagin).text(String('0' + parseInt(slick.currentSlide + 1)) + '');
    $(rightPagin).text(String('/0' + slick.slideCount));
});


$('.header__left-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.header__right-slider',
    arrows: false,
    fade: true
});

$('.header__right-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.header__left-slider',
    arrows: true,
    prevArrow: '<div class="header__prev"></div>',
    nextArrow: '<div class="header__next"></div>'
});

let audioBtn = document.querySelector('.play-audio'),
    equalizer = document.querySelector('.audio-equalizer');

audioBtn.addEventListener('click', function () {
    if(equalizer.classList.contains('onplay')){
        audioBtn.innerHTML = 'ВКЛ.';
        equalizer.classList.remove('onplay');
    } else {
        audioBtn.innerHTML = 'ВЫКЛ.';
        equalizer.classList.add('onplay');
    }
});
