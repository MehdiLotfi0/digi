const backupicon = document.querySelector('.backup-icon-svg');
const closeButton = document.querySelector('.backup-close-btn');
const contents = document.querySelector('.backup-icon-window')
const BackArrow = document.querySelector('.backup-icon-window-header-center-back-icon');
const FirstAnswer = document.querySelector('.li-first');
const FirstAnswerP = document.querySelector('.li-first-answer-paragraph');
const FirstParagraph = document.querySelector('.li-first-answer');
const SecondAnswer = document.querySelector('.li-second');
const SecondAnswerP = document.querySelector('.li-second-answer-paragraph');
const SecondParagraph = document.querySelector('.li-second-answer');
const ThirdAnswer = document.querySelector('.li-third');
const ThirdAnswerP = document.querySelector('.li-third-answer-paragraph');
const ThirdParagraph = document.querySelector('.li-third-answer');
const arrowdownfirst = document.querySelector('.li-arrow-first');
const arrowdownsecond = document.querySelector('.li-arrow-second');
const arrowdownthird = document.querySelector('.li-arrow-third');

backupicon.addEventListener('click', () => {
  closeButton.classList.add('show');
  backupicon.classList.add('show');
  contents.classList.add('show');
});
closeButton.addEventListener('click', () => {
  backupicon.classList.remove('show');
  closeButton.classList.remove('show');
  contents.classList.remove('show');
});
BackArrow.addEventListener('click', () => {
  backupicon.classList.remove('show');
  closeButton.classList.remove('show');
  contents.classList.remove('show');
});
arrowdownfirst.addEventListener('click', () => {
  FirstAnswer.classList.toggle('show');
  FirstAnswerP.classList.toggle('show');
  FirstParagraph.classList.toggle('show');
});
arrowdownsecond.addEventListener('click', () => {
  SecondAnswer.classList.toggle('show');
  SecondAnswerP.classList.toggle('show');
  SecondParagraph.classList.toggle('show');
});
arrowdownthird.addEventListener('click', () => {
  ThirdAnswer.classList.toggle('show');
  ThirdAnswerP.classList.toggle('show');
  ThirdParagraph.classList.toggle('show');
});

document.querySelectorAll('.li-arrow').forEach(arrow => {
  arrow.addEventListener('click', () => {
    const li = arrow.closest('li'); // find the parent <li>
    li.classList.toggle('show');
  });
});
// Select all question rows
document.querySelectorAll('.li-first-visible, .li-second-visible, .li-third-visible')
  .forEach(q => {
    q.addEventListener('click', () => {
      const parentLi = q.parentElement;
      parentLi.classList.toggle('active');
    });
  });

