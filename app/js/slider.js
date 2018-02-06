var slider = document.getElementById('slider__container');
var allImages = document.getElementsByClassName('slide');
var arrowRight = document.getElementById('right-slide');
var arrowLeft = document.getElementById('left-slide');

var imgWidth = document.getElementById('first-slide').offsetWidth;

var i = 0;

var menuSlideList = document.getElementsByClassName('menu-slide');

var current = 2;
var prev = 1;
var next = 0;


var addEvent = function (object, type, callback) {
    if(object == null || typeof(object) == 'undefined') return;
    if(object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent('on' + type, callback);
    } else {
        object['on' + type] = callback;
    }
};

addEvent(window, 'resize', function () {
    slider.style.left = '0px';
    i=0;

    imgWidth = document.getElementById('first-slide').offsetWidth;

});

function moveRight() {

    i += imgWidth;


    if(i < allImages.length * imgWidth) {
        slider.style.left = '-' + i + 'px';
    } else {
        i = 0;
        slider.style.left = '0px';
    }

    console.log(document.getElementById('first-slide').offsetWidth);

}

function moveLeft() {

    i -= imgWidth;


    if(i < 0){
        i = imgWidth * (allImages.length-1);
        slider.style.left = '-'+i+'px';
    } else {
        slider.style.left = '-'+i+'px';
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