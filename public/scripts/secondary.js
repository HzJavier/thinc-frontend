$(document).ready(function () {
  var mainWrapper = $('#main-wrapper');

  mainWrapper.html('Content for wrapper');
  mainWrapper.css('background-color', '#DDD');

  var bgColor = mainWrapper.css('background-color');

  /**
   * Make div height to half
   */
  var currentHeight = mainWrapper.css('height');
  mainWrapper.css('height', parseInt(currentHeight)/2);
  currentHeight = mainWrapper.css('height');

});
