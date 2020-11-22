const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('variation', window.scrollY > 0);
});

const cards = document.querySelectorAll('.card');
const arrows = document.querySelectorAll('.arrow');
const dots = document.querySelectorAll('.dot');
arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
        if (arrow.classList.contains('left')) {
            backward() 
        } else {
            forward()
        }
    });
});
let current = 0;

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        current = [...dots].indexOf(dot); 
        removeMark();
        goto(current);
        dot.classList.add('marked');
    });
});

function removeMark() {
    dots.forEach(dot => {
        dot.classList.remove('marked');
    });
}

function forward() {
    if (current === 3) {
        current = 0;
    } else {
        current++
    } 
    goto(current);
}

function backward() {
    if (current === 0) {
        current = 3;
    } else {
        current --
    }
    goto(current);
}

const deck = document.querySelector('.deck');
function goto(index) {
    if (![0,1,2,3].includes(index)) return;

    cards.forEach(card => {
        if (card.classList.contains('active')) {
            card.classList.remove('active');
        }
    });

    for (let i = 0; i<4; i++) {
        cards[4 * index + i].classList.add('active');
    }
    deck.styleLeft = index * 1230;
    removeMark()
    dots[current].classList.toggle('marked');
}




