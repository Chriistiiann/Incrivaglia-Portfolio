//animazione per elementi alla vista
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Funzione di callback per l'intersezione
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Non è necessario continuare a osservare dopo che è stato visibile
                observer.unobserve(entry.target);
            }
        });
    };

    // Creazione dell'istanza di IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Usa la viewport come radice
        threshold: 0.1 // Percentuale dell'elemento visibile prima di considerarlo intersezionato
    });

    // Seleziona gli elementi da osservare
    document.querySelectorAll('.animate-on-scroll, .animate-from-right, .fadeInUp').forEach(element => {
        observer.observe(element);
    });
});

//animazione per le skill card

document.addEventListener("DOMContentLoaded", function () {
    const skillCards = document.querySelectorAll('.skill-card');

    const observerOptions = {
        root: null, // Usa la viewport come riferimento
        threshold: 0.1 // Attiva quando il 10% della card è visibile
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target.querySelector('.skill-bar');
                const percent = skillBar.getAttribute('data-percent');
                skillBar.style.setProperty('--percent', percent);
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Smette di osservare dopo l'animazione
            }
        });
    }, observerOptions);

    skillCards.forEach(card => {
        observer.observe(card);
    });
});




let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function () {
    showSlider('next');
}
prevButton.onclick = function () {
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel
        .classList
        .remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel
            .classList
            .add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel
            .classList
            .add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function () {
        carousel
            .classList
            .remove('next', 'prev');
        carousel
            .classList
            .add('showDetail');
    }
});
backButton.onclick = function () {
    carousel
        .classList
        .remove('showDetail', 'gap');
}

document.addEventListener('DOMContentLoaded', function () {
    // Seleziona tutti gli elementi con la classe 'fade-in'
    const elements = document.querySelectorAll('.fade-in');

    // Aggiungi una classe 'visible' per avviare l'animazione
    elements.forEach(function (element) {
        element
            .classList
            .add('visible');
    });
});

//per il read more nel about me
document
    .getElementById('readMoreButton')
    .addEventListener('click', function () {
        var moreSection = document.getElementById('moreSection');
        if (moreSection.classList.contains('active')) {
            moreSection
                .classList
                .remove('active');
        } else {
            moreSection
                .classList
                .add('active');
        }
    });
menuIcon.onclick = () => {
    menuIcon
        .classList
        .toggle('bx-x');
    navbar
        .classList
        .toggle('active');
}





