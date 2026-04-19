const FooterTextExpand = document.querySelector('.digi-info-text-more');
const TextBecomeVisible = document.querySelector('.digi-info-text-more-unvisible');
const DigiInfo = document.querySelector('.digi-info')
const Gradiant = document.querySelector('.digi-info-text-main-first-paragraph')
const ButtonExpand = document.querySelector('.digi-info-text-more-expand')
const ButtonClose = document.querySelector('.digi-info-text-more-close');


FooterTextExpand.addEventListener('click', () => {
    TextBecomeVisible.classList.add('show');
    DigiInfo.classList.add('show');
    Gradiant.classList.add('show');
    ButtonExpand.classList.add('show');
    ButtonClose.classList.add('show');
});
ButtonClose.addEventListener('click', () => {
    ButtonExpand.classList.remove('show');
    TextBecomeVisible.classList.remove('show');
    DigiInfo.classList.remove('show');
    Gradiant.classList.remove('show');
    ButtonExpand.classList.remove('show');
    ButtonClose.classList.remove('show');
});