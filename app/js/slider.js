/*
<section class="cover-slider" id="cover-slider">
        <div class="section-content-wrap">
            <h1 class="main-title">Taste on Our hands!</h1>
            <h2 class="welcome">- wellcome -</h2>
            <i class="arrow left" id="left-slide" onclick=""></i>
            <i class="arrow right" id="right-slide" onclick="next_slide(current + 1)"></i>
            <i class="arrow down" id="go-down"></i>
            <i class="arrow downTop" id="go-down2"></i>
        </div>
        <div class="slide slide-1"></div>
        <div class="slide slide-2"></div>
        <div class="slide slide-3"></div>
    </section>
 */

var topSlideList = document.getElementsByClassName('slide');
var slidesNum = topSlideList.length;
var nextBtn = document.getElementById('right-slide');



var prev = 0;
var current = 1;
var next = 2;

function ifNextExists() {

    if(prev === slidesNum){
        prev = 0;
    } else if(next === slidesNum){
        next = 0;
    } else if (current === slidesNum){
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


function showNext() {

    current++;
    prev++;
    next++;

    ifNextExists();

    changeStyles();

}


function showPrev() {

    current--;
    prev--;
    next--;

    ifPrevExists();

    changeStyles();

}

//coverInterval = window.setInterval(showNext, 10000);