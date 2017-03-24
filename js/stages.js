
$(document).ready(function() {

  var stage1Top = $('#stage1').offset().top;
  var stage2Top = $('#stage2').offset().top;
  var stage3Top = $('#stage3').offset().top;
  var stage4Top = $('#stage4').offset().top;
  var stage5Top = $('#stage5').offset().top;
  var stage6Top = $('#stage6').offset().top;
  var stage7Top = $('#stage7').offset().top;

  $(window).scroll( function(){  /* Every time the window is scrolled ... */

    /* Check the current top of the window */
    var windowTop = $(window).scrollTop() + 250;

    if (windowTop >= stage1Top && windowTop < stage2Top) {
      $('[id^=stage]').removeClass('active-stage');
      $('#stage1-nav').addClass('active-stage');
    } else if (windowTop >= stage2Top && windowTop < stage3Top) {
      $('[id^=stage]').removeClass('active-stage');
      $('#stage2-nav').addClass('active-stage');
    } else if (windowTop >= stage3Top && windowTop < stage4Top) {
      $('[id^=stage]').removeClass('active-stage');
      $('#stage3-nav').addClass('active-stage');
    } else if (windowTop >= stage4Top && windowTop < stage5Top) {
      $('[id^=stage]').removeClass('active-stage');
      $('#stage4-nav').addClass('active-stage');
    } else if (windowTop >= stage5Top && windowTop < stage6Top) {
      $('[id^=stage]').removeClass('active-stage');
      $('#stage5-nav').addClass('active-stage');
    } else if (windowTop >= stage6Top && windowTop < stage7Top) {
      $('[id^=stage]').removeClass('active-stage');
      $('#stage6-nav').addClass('active-stage');
    } else if (windowTop >= stage7Top) {
      $('[id^=stage]').removeClass('active-stage');
      $('#stage7-nav').addClass('active-stage');
    }

  });

  //smooth scrolls to different stages on page

  $('[id$="-nav"]').click(function() { /* class or id of button/link that will be clicked */
    var number = this.id.replace(/\D+/g, '');
      $('html, body').animate({
          scrollTop: $("#stage" + number).offset().top - 50, /* class or id of div that will be scrolled to */
          behavior: 'smooth',
      }, 1000);
  });

});
