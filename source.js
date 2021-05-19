function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  console.log(id);
  const clock = document.getElementById(id);
  console.log(clock);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, 
    {
      fullWidth: true
    }
    );
});

function moveNextCarousel() {
  var elem = document.querySelector('.carousel.carousel-slider');
  var moveRight = M.Carousel.getInstance(elem);
  moveRight.next();
}

function movePrevCarousel() {
  var elem = document.querySelector('.carousel.carousel-slider');
  var moveLeft = M.Carousel.getInstance(elem);
  moveLeft.prev();
}

const deadline = "2021-07-18";
initializeClock('clockdiv', deadline);

//1280x400