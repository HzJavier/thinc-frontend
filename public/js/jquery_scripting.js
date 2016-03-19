function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function starsManagment(data, firstChild, descriptionContainer){
  data.invoices.forEach(function(invoice){
    //firstChild.append('<div>' + invoice.client + '</div>');
    var invoiceItem = $('<div style="background-color:' + getRandomColor() +';">Invoice ' + invoice.id + '</div>');
    // Setup your newEl with data here...
    invoiceItem.on('click', function() {
      descriptionContainer.html('');
      descriptionContainer.append('<div>Client ' + invoice.client + '</div><div>Total ' + invoice.total + '</div>');
      var stars = $('<div name="' + invoice.id + '" id="1">1 estrella</div>' +
                    '<div name="' + invoice.id + '" id="2">2 estrellas</div>' +
                    '<div name="' + invoice.id + '" id="3">3 estrellas</div>' +
                    '<div name="' + invoice.id + '" id="4">4 estrellas</div>' +
                    '<div name="' + invoice.id + '" id="5">5 estrellas</div>');
      //handle starts click
      stars.click(function(){
        //alert(this.id + $(this).attr('name'));
        // ajax request
        $.ajax({
          //TODO: url to post score
          url: 'data/data.json',
          type: 'post',
          dataType: 'json',
          data: {'id' : $(this).attr('name'), 'rating' : this.id},
          success: function(data, status){
            //validate api call status
            alert('rating saved');
          }
        });
      });
      descriptionContainer.append(stars);
    });
    invoiceItem.appendTo(firstChild);
  });
}

$(document).ready(function(){
  var mainWrapper = $('#main-wrapper');
  var wrapperHeight = mainWrapper.css('height');

  mainWrapper.css('height', wrapperHeight / 2);

  // div to change color
  var firstChild = $('#first-child');
  //container just for item description
  var descriptionContainer = $('#description-container');
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
      //call starsManagment to update value
      starsManagment(data, firstChild, descriptionContainer);
    }
  });

});
