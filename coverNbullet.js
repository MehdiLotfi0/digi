const MyCover = document.querySelector('.cover');
const MyBullet = document.querySelector('.bullet');

MyCover.addEventListener('click', () => {
  MyCover.classList.toggle('show');
  MyBullet.classList.toggle('show');
});



const MyCoverS = document.querySelector('.coverS');
const MyBulletS = document.querySelector('.bulletS');

MyCoverS.addEventListener('click', () => {
  MyCoverS.classList.toggle('show');
  MyBulletS.classList.toggle('show');
});



const MyCoverT = document.querySelector('.coverT');
const MyBulletT = document.querySelector('.bulletT');

MyCoverT.addEventListener('click', () => {
  MyCoverT.classList.toggle('show');
  MyBulletT.classList.toggle('show');
});



const MyCoverF = document.querySelector('.coverF');
const MyBulletF = document.querySelector('.bulletF');

MyCoverF.addEventListener('click', () => {
  MyCoverF.classList.toggle('show');
  MyBulletF.classList.toggle('show');
});



const MyCoverFif = document.querySelector('.coverFif');
const MyBulletFif = document.querySelector('.bulletFif');

MyCoverFif.addEventListener('click', () => {
  MyCoverFif.classList.toggle('show');
  MyBulletFif.classList.toggle('show');
});



const MyCoverSix = document.querySelector('.coverSix');
const MyBulletSix = document.querySelector('.bulletSix');

MyCoverSix.addEventListener('click', () => {
  MyCoverSix.classList.toggle('show');
  MyBulletSix.classList.toggle('show');
});




const MyCoverSev = document.querySelector('.coverSev');
const MyBulletSev = document.querySelector('.bulletSev');

MyCoverSev.addEventListener('click', () => {
  MyCoverSev.classList.toggle('show');
  MyBulletSev.classList.toggle('show');
});





const sortingItems = document.querySelectorAll('.SortingItemsStartRestItems');

sortingItems.forEach(item => {
    item.addEventListener('click', () => {
        // remove show class from all
        sortingItems.forEach(i => i.classList.remove('show'));

        // add show to clicked item
        item.classList.add('show');
    });
});