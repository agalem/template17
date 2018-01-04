var menuBtn = document.getElementById('menu-btn');
var menuList = document.getElementById('menu-list');
var menuListElem = document.getElementsByClassName('menu-list-li');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menuList.classList.toggle('active');
});

for(var i=0; i<menuListElem.length; i++){
    menuListElem[i].addEventListener('click', function () {
        menuBtn.classList.remove('active');
        menuList.classList.remove('active');
    });
}