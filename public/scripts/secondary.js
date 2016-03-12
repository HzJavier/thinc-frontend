$(document).ready(function () {
  $('#main-wrapper').html('Content for wrapper');
  $('#main-wrapper').css('background-color', '#DDD');

  var bgColor = $('#main-wrapper').css('background-color');

  /**
   * Make div height to half
   */
  var currentHeight = $('#main-wrapper').css('height');
  $('#main-wrapper').css('height', parseInt(currentHeight)/2);
   currentHeight = $('#main-wrapper').css('height');
});
