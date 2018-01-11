var slider = document.getElementById('slider__container');
var allImages = document.getElementsByClassName('slide');
var arrowRight = document.getElementById('right-slide');
var arrowLeft = document.getElementById('left-slide');
var imgWidth = Math.ceil(100/allImages.length);
var sliderWidth = allImages.length * 100;

var menuSlideList = document.getElementsByClassName('menu-slide');

var current = 2;
var prev = 1;
var next = 0;

slider.style.width = sliderWidth + 'vw';

var i = imgWidth;

function moveRight() {

    i += 100;

    if(i < allImages.length * 100) {
        slider.style.left = '-' + i + 'vw';
    } else {
        i = 0;
        slider.style.left = '0vw';
    }

}

function moveLeft() {

    i -= 100;

    if(i < 0) {
        i = 200;
        slider.style.left = '-200vw';
    } else {
        slider.style.left = '-' + i + 'vw';
    }

}

goNext = setInterval(moveRight, 5000);

arrowLeft.addEventListener('click', function () {
    clearInterval(goNext);

    moveLeft();
    goNext = setInterval(moveRight, 5000);
});

arrowRight.addEventListener('click', function () {
    clearInterval(goNext);

    moveRight();
    goNext = setInterval(moveRight, 5000);
});

function ifNextExists() {

    if(prev === 3){
        prev = 0;
    } else if(next === 3){
        next = 0;
    } else if (current === 3){
        current = 0;
    }

}

function ifPrevExists() {

    if(prev < 0){
        prev = 2;
    } else if(next < 0){
        next = 2;
    } else if (current < 0){
        current = 2;
    }

}


function changeMenuStyles() {
    menuSlideList[prev].style.opacity = '0';
    menuSlideList[next].style.opacity = '0';
    menuSlideList[current].style.opacity = '1';
}

function menuShowNext() {
    current++;
    prev++;
    next++;

    ifNextExists();

    changeMenuStyles();
}

function menuShowPrev() {
    current--;
    prev--;
    next--;

    ifPrevExists();

    changeMenuStyles();
}

setInterval(menuShowNext, 10000);