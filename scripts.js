const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const mainNav = document?.querySelector('main-nav');




burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--active');
    
});

navItems.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger?.classList.remove('burger--active');
        nav?.classList.remove('nav--active');
    })
});

