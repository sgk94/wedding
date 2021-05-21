
  var audio = new Audio('audio/perhapslove.mp3');
  var playButton = document.getElementById('play-button');
  var pauseButton = document.getElementById('pause-button');

  playButton.addEventListener('click', function () {
  audio.play();
  audio.volume = 0.08;
  playButton.style.display = "none";
  pauseButton.style.display = "block";

  })

  pauseButton.addEventListener('click', function () {
    audio.pause();
    playButton.style.display = "block";
    pauseButton.style.display = "none";
    
  })








function initializeClock(id, endtime) {
 
  const clock = document.getElementById(id);
  
  const daysSpan = clock.querySelector('.days');
  //const hoursSpan = clock.querySelector('.hours');
  //const minutesSpan = clock.querySelector('.minutes');
  //const secondsSpan = clock.querySelector('.seconds');
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

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = (t.days + ' days');
    //hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    //minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    //secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

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

const deadline = "Sun July 18 2021 24:00:00 GMT-0700 (Pacific Daylight Time)";
initializeClock('clockdiv', deadline);

//1280x400