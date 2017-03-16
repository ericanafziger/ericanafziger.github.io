$(document).ready(function() {

  /* Check the location of each stage */
  var stage1Top = $('#stage-1').offset().top;
  var stage2Top = $('#stage-2').offset().top;
  var stage3Top = $('#stage-3').offset().top;
  var stage4Top = $('#stage-4').offset().top;
  var stage5Top = $('#stage-5').offset().top;
  var stage6Top = $('#stage-6').offset().top;
  $(window).scroll( function(){  /* Every time the window is scrolled ... */

    /* Check the current top of the window */
    var windowTop = $(window).scrollTop() + 250;

  });

});
