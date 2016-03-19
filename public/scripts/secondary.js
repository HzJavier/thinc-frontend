$(document).ready(function () {
  var mainWrapper = $('#main-wrapper');
  mainWrapper.css('background-color', '#DDD');

  var bgColor = mainWrapper.css('background-color');

  /**
   * Make div height to half
   */
  var currentHeight = mainWrapper.css('height');
  mainWrapper.css('height', parseInt(currentHeight)/2);
  currentHeight = mainWrapper.css('height');

  /**
   * timeout & callbacks
   */
  function onTimeout () {
  }
  setTimeout(onTimeout.bind(this, 'hola'), 4000);

  /**
   * Update background color 
   */

    // Handle button click event
    $('#change-color-button').on('click', function () {
      // Get color from textfield
      var newBgColor = $('#color-input').val();
      // Set new color on background
      mainWrapper.css('background-color', newBgColor); 
    });

    /**
     * AJAX
     */
    $.ajax({
      url: 'data/data.json',
      dataType: 'json',
      success: function (data) {
        // Do somethign with the data 
        var books = data.books;
        
        books.forEach(function (book, index) {
          var itemList = $('<div>' + book.name  + '</div>'); 
          mainWrapper.append(itemList);


            itemList.click(function () {
              console.log('click on book', book);

              $.ajax({
                url: 'data/data.json',
                method: 'POST',
                data: book,
                success: function () {

                }, 
                error: function (error) {
                  console.log('error', error);
                }
              });
            });
        });
      }
    });


    

});
