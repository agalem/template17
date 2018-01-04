var menuListDest = document.getElementsByClassName('menu-list-li-a');

for(var i=0; i<menuListDest.length; i++){
    menuListDest[i].addEventListener('click', function (event) {

        event.preventDefault();

        var dest = menuListDest[i].getAttribute('href');
        document.querySelector(''+dest+'').scrollIntoView({
            behavior: 'smooth'
        })
    });
}