$(document).ready(function(){
  var mainWrapper = $('#main-wrapper');
  var wrapperHeight = mainWrapper.css('height');

  mainWrapper.css('height', wrapperHeight / 2);

  // div to change color
  var firstChild = $('#first-child');
  // input text, should be validated
  var inputColor = $('#input-color');

  //handling click event
  $('#color-button').click(function(){
    //change color
    firstChild.css('background-color', inputColor.val());
  });


  // ajax request
  $.ajax({
    url: 'data/data.json',
    dataType: 'json',
    success: function(data, status){
      console.log(data);
      console.log(status);
      //for each invoice
      //TODO: implement list amazon style
      data.invoices.forEach(function(invoice){
        firstChild.append('<div>' + invoice.client + '</div>');
      });
    }
  });

});
