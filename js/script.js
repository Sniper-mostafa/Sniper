let progspan = document.querySelectorAll('.prog span');
let section = document.querySelector('.our-skills');

window.onscroll = function () {
    // Skills Animate Width
    if (window.scrollY >= section.offsetTop) {
        progspan.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};