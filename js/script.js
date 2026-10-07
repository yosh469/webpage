// mouse stalker
const stalker = document.getElementById('koneta');
document.addEventListener('mousemove', (e) => {
    stalker.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(0.8, 0.8)`;
});
document.addEventListener('mouseenter', () => {
    stalker.classList.add('active');
});
document.addEventListener('mouseleave', () => {
    stalker.classList.remove('active');
});


// side menu
const menu = document.querySelector('.sidemenu-container');
document.querySelector('.side-open-btn').addEventListener('click', () => {
    menu.classList.add('active');
});
document.querySelector('.side-close-btn').addEventListener('click', () => {
    menu.classList.remove('active');
});
document.querySelectorAll('.side-menu-text').forEach(close => {
    close.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
