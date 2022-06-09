const links = document.querySelectorAll('.btnItem'),
    content = document.querySelectorAll('.itemContent');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e){
        e.preventDefault();
        for (let k = 0; k < links.length; k++) {
            links[k].classList.remove('active')
            content[k].classList.remove('active')
        }
        this.classList.add('active');
        content[i].classList.add('active');
    });
}

const popapLink = document.querySelector('.popLink'),
    popap = document.querySelector('.popap'),
    popapClose =  document.querySelector('.lines'),
    popapLink2 =  document.querySelector('.popLink2');


popapLink.addEventListener('click', function(e){
    e.preventDefault();
    popap.classList.add('open');
});
popapLink2.addEventListener('click', function(e){
    e.preventDefault();
    popap.classList.add('open');
});
popapClose.addEventListener('click', function(e){
    e.preventDefault();
    popap.classList.remove('open');
});

