$(document).ready(function () {
  $("#mobileMenu").click(function () {
    $(this).toggleClass("active");
    $(this).toggleClass("not-active");
    $("#menuList").toggleClass("show");
  });
});

//VEDIO PLAY & PAUSE
var video = document.getElementById("myVideo");
var btn = document.getElementById("vedioPlay");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "<i class='fas fa-regular fa-pause'></i>";
  } else {
    video.pause();
    btn.innerHTML = "<i class='fas fa-regular fa-play'></i>";
  }
}

// COUNT DOWN SCRIPT

// Set the date we're counting down to
var countDownDate = new Date("marc 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//slider using light slider

$(document).ready(function () {
  $("#sponsorship_list").lightSlider({
    item: 5,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,

    addClass: "",
    mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear", //'for jquery animation',////

    speed: 500, //ms'
    auto: false,
    loop: true,
    slideEndAnimation: true,
    pause: 2000,

    keyPress: false,
    controls: true,
    prevHtml: '<i class="fas fa-long-arrow-alt-left"></i>',
    nextHtml: '<i class="fas fa-long-arrow-alt-right"></i>',

    rtl: false,
    adaptiveHeight: false,

    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,

    thumbItem: 10,
    pager: false,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: "middle",

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 680,
        settings: {
          item: 2,
          slideMove: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
        },
      },
    ],

    onBeforeStart: function (el) {},
    onSliderLoad: function (el) {},
    onBeforeSlide: function (el) {},
    onAfterSlide: function (el) {},
    onBeforeNextSlide: function (el) {},
    onBeforePrevSlide: function (el) {},
  });
  $("#partnes_list").lightSlider({
    item: 5,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,

    addClass: "",
    mode: "slide",
    useCSS: true,
    cssEasing: "ease", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "linear", //'for jquery animation',////

    speed: 500, //ms'
    auto: false,
    loop: true,
    slideEndAnimation: true,
    pause: 2000,

    keyPress: false,
    controls: true,
    prevHtml: '<i class="fas fa-long-arrow-alt-left"></i>',
    nextHtml: '<i class="fas fa-long-arrow-alt-right"></i>',

    rtl: false,
    adaptiveHeight: false,

    vertical: false,
    verticalHeight: 500,
    vThumbWidth: 100,

    thumbItem: 10,
    pager: false,
    gallery: false,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: "middle",

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 680,
        settings: {
          item: 2,
          slideMove: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 1,
          slideMove: 1,
        },
      },
    ],

    onBeforeStart: function (el) {},
    onSliderLoad: function (el) {},
    onBeforeSlide: function (el) {},
    onAfterSlide: function (el) {},
    onBeforeNextSlide: function (el) {},
    onBeforePrevSlide: function (el) {},
  });
  $("#media_list").lightSlider({
    item: 1,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,
    pager: false,
    speed: 500, //ms'
    auto: false,
    loop: true,
    slideEndAnimation: true,
    pause: 2000,
    keyPress: false,
    controls: true,
    prevHtml: '<i class="fas fa-long-arrow-alt-left"></i>',
    nextHtml: '<i class="fas fa-long-arrow-alt-right"></i>',
    responsive: [
      {
        breakpoint: 900,
        settings: {
          item: 1,
          slideMove: 1,
          slideMargin: 6,
        },
      },
    ],
  });
});
