/*
<section class="menu-slider">
        <div class="section-content-wrap">
            <article class="text-box menu-text menu-text-1">
                <h3 class="menu-title">The Lemon Cake</h3>
                <p class="description menu-description">Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod ter incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud </p>
                <p class="handwriting price">&dollar; 15.00</p>
                <a href="" class="menu-btn">view all</a>
            </article>

            <a href="" class="arrow left"></a>
            <a href="" class="arrow right"></a>
        </div>
        <div class="menu-slide menu-slide-1"></div>
        <div class="menu-slide menu-slide-2"></div>
        <div class="menu-slide menu-slide-3"></div>
    </section>
 */

var topSlideList = document.getElementsByClassName('slide');
var nextBtn = document.getElementById('right-slide');
var prevBtn = document.getElementById('left-slide');

var menuSlideList = document.getElementsByClassName('menu-slide');
var menuNextBtn = document.getElementById('menu-right-slide');
var menuPrevBtn = document.getElementById('menu-left-slide');


var prev = 0;
var current = 1;
var next = 2;

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

    if(prev === -1){
        prev = 2;
    } else if(next === -1){
        next = 2;
    } else if (current === -1){
        current = 2;
    }

}

function changeStyles() {
    topSlideList[prev].style.zIndex = '1';
    topSlideList[next].style.zIndex = '1';
    topSlideList[current].style.zIndex = '5';

    topSlideList[prev].style.left = '-100vw';
    topSlideList[current].style.left = '0';
    topSlideList[next].style.left = '100vw';
}

function changeMenuStyles() {
    menuSlideList[prev].style.zIndex = '1';
    menuSlideList[next].style.zIndex = '1';
    menuSlideList[current].style.zIndex = '5';

    menuSlideList[prev].style.left = '-100vw';
    menuSlideList[current].style.left = '0';
    menuSlideList[next].style.left = '100vw';
}


function showNext() {

    current++;
    prev++;
    next++;

    ifNextExists();

    changeStyles();

}

function menuShowNext() {
    current++;
    prev++;
    next++;

    ifNextExists();

    changeMenuStyles();
}


function showPrev() {

    current--;
    prev--;
    next--;

    ifPrevExists();

    changeStyles();

}

function menuShowPrev() {

    current--;
    prev--;
    next--;

    ifPrevExists();

    changeMenuStyles();

}

coverInterval = window.setInterval(showNext, 10000);

nextBtn.addEventListener('click', function () {
    window.clearInterval(coverInterval);

    showNext();
    coverInterval = window.setInterval(showNext, 10000);
});

prevBtn.addEventListener('click', function () {
    window.clearInterval(coverInterval);

    showPrev();
    coverInterval = window.setInterval(showNext, 10000);
});

menuNextBtn.addEventListener('click', function (e) {
    e.preventDefault();

    menuShowNext();
});

menuPrevBtn.addEventListener('click', function (e) {
    e.preventDefault();

    menuShowPrev();
})