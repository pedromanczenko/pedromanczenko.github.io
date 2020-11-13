/*
const parallax = document.querySelector('.parallax');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * .4 + 'px';
});
*/

/*
const header = document.querySelector('.sectionObserved');
const navbar = document.querySelector('.navbar');
const options = {
    root: null,
    threshold: 0,
    rootMargin: '-60px'
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.remove('variation');
        } else {
            navbar.classList.add('variation');
        } 
    });
},options);
observer.observe(header);
*/


const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('variation', window.scrollY > 0);
});





