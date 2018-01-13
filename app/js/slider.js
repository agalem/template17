var coverSlides = document.getElementsByClassName('slide');
var nextBtnCover = document.getElementById('right-slide');
var prevBtnCover = document.getElementById('left-slide');

var menuSlideList = document.getElementsByClassName('menu-slide');

var current = 2;
var prev = 1;
var next = 0;

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

function changeStylesNext() {
    coverSlides[prev].style.zIndex = '3';
    coverSlides[current].style.zIndex = '3';
    coverSlides[next].style.zIndex = '-1';

    coverSlides[next].style.left = '100vw';
    coverSlides[prev].style.left = '-100vw';
    coverSlides[current].style.left = '0';
}


function changeStylesPrev() {
    coverSlides[prev].style.zIndex = '-1';
    coverSlides[current].style.zIndex = '3';
    coverSlides[next].style.zIndex = '3';

    coverSlides[next].style.left = '100vw';
    coverSlides[prev].style.left = '-100vw';
    coverSlides[current].style.left = '0';
}


function showNextCover() {
    changeStylesNext();

    current++;
    prev++;
    next++;

    ifNextExists();
}

function showPrevCover() {

    current--;
    prev--;
    next--;

    ifPrevExists();

    changeStylesPrev();
}


showCoverNextInterval = setInterval(showNextCover, 6000);

nextBtnCover.addEventListener('click', function () {
    clearInterval(showCoverNextInterval);

    showNextCover();
    showCoverNextInterval = setInterval(showNextCover, 6000);
});

prevBtnCover.addEventListener('click', function () {
    clearInterval(showCoverNextInterval);

    showPrevCover();
    showCoverNextInterval = setInterval(showNextCover, 6000);
});


/*             MENU SLIDER             */

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
