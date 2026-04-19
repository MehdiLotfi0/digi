const icon = document.querySelector('.icon');
const supermarket = document.querySelector('.icon-supermarket');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn'); // the button wrapping your SVG

// open
icon.addEventListener('click', () => {
  supermarket.classList.add('show');
  overlay.classList.add('show');
});

// close (via button or overlay click)
closeBtn.addEventListener('click', () => {
  supermarket.classList.remove('show');
  overlay.classList.remove('show');
});

overlay.addEventListener('click', () => {
  supermarket.classList.remove('show');
  overlay.classList.remove('show');
});
window.addEventListener('scroll', function() {
  const icon = document.querySelector('.icon');
  if (window.scrollY > 800) {
    icon.classList.add('expanded');   // add expanded styles
  } else {
    icon.classList.remove('expanded'); // back to default
  }
});
// Example: open popup
function openPopup() {
  document.querySelector('.icon').style.display = 'block';
  document.body.classList.add('noscroll'); // disable scroll
}

// Example: close popup
function closePopup() {
  document.querySelector('.icon').style.display = 'none';
  document.body.classList.remove('noscroll'); // enable scroll again
}


