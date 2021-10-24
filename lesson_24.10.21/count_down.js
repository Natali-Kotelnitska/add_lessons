const link = document.querySelector('a');
console.log(link);

const par = document.querySelector('.js-timer');
link.addEventListener('click', onLinkClick);

function onLinkClick(event) {
  event.preventDefault();
  let timeLeft = 6;
  let timerID = setInterval(() => {
    timeLeft--;
    par.innerHTML = `Ви покидаєте сторінку через ${timeLeft} `;

    if (timeLeft === 0) {
      clearInterval(timerID);
      par.innerHTML = 'Ви покинули сторінку';
      // document.location.replace(link.href);
      //   document.location.href = 'https://www.google.com';
      //   document.location.href = link.href;
      document.location.href = link.getAttribute('href');
    }
  }, 1000);
}
