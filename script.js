$(document).ready(function() {

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      //console.log($(window).scrollTop())
    if ($(window).scrollTop() > 389) {
      $('#navbar').addClass('navbar-fixed');
      $('#placebar').addClass('placebar-block');
    }
    if ($(window).scrollTop() < 390) {
      $('#navbar').removeClass('navbar-fixed');
      $('#placebar').removeClass('placebar-block');
    }
  });
});
