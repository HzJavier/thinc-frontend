$(document).ready(function(){
  var mainWrapper = $('#main-wrapper');
  var wrapperHeight = mainWrapper.css('height');

  mainWrapper.css('height', wrapperHeight / 2);

  var firstChild = $('#first-child');
  var inputColor = $('#input-color');
  $('#color-button').click(function(){
    firstChild.css('background-color', inputColor.val());
  });

});
