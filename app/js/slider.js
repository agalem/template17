var topSlideList = document.getElementsByClassName('slide');
var nextBtn = document.getElementById('right-slide');
var prevBtn = document.getElementById('left-slide');

var menuSlideList = document.getElementsByClassName('menu-slide');
var menuNextBtn = document.getElementsByClassName('menu-goRight');
var menuPrevBtn = document.getElementsByClassName('menu-goLeft');


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
    menuSlideList[prev].style.display = 'none';
    menuSlideList[current].style.display = 'flex';
    menuSlideList[next].style.display = 'none';
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


for(var i=0; i<menuNextBtn.length; i++){
    menuNextBtn[i].addEventListener('click', function () {
        menuShowNext();
    })
}

for(var i=0; i<menuPrevBtn.length; i++){
    menuPrevBtn[i].addEventListener('click', function () {
        menuShowPrev();
    })
}