<<<<<<< HEAD
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
    console.log('timeout');
  }
  console.log('before timeout');
  setTimeout(onTimeout.bind(this, 'hola'), 4000);
  console.log('after timeout');

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
        
        books.forEach(function (book) {
          mainWrapper.append('<div>' + book.name  + '</div>');
        });
      }
    });
});
=======

var personObj = {
	age: function(){
		var date = new Date();


		return date.getFullYear() - this.dob.getFullYear();
	},
	username: "Lekx",
	email: "link_mx@live.com",
	dob: new Date(1989,09,03),

}

console.log(personObj.age());

>>>>>>> 224448a610d4c5513e2213383731f8e99812e3bd
