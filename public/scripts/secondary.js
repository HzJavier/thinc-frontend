$('document').ready(function() {
  var mainWrapper = $('#main-wrapper');

  var mainHeight = mainWrapper.css('height');

  mainHeight = mainWrapper.css('height');
  mainWrapper.css('height',parseInt(mainHeight)/2);
  mainHeight = mainWrapper.css('height');

  console.log(mainHeight);

  $('#button1').click(function() {
    var newBgColor = $('#bgColor').val();
    mainWrapper.css('background-color', newBgColor);
  });
});
