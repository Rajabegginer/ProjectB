burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightnav')
navlist = document.querySelector('.nav-list')



burger.addEventListener('click', ()=>{
rightNav.classList.toggle('visibility');
navlist.classList.toggle('visibility');
navbar.classList.toggle('h-nav');

})

