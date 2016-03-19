$('document').ready(function() {
  var mainWrapper = $('#main-wrapper');
  var detailWrapper = $('#detail-wrapper');

  $('#button1').click(function() {
    $.getJSON('data/data.json', function(data){
        mainWrapper.html('');
        var movies = data.movies;
        movies.forEach(function(movie,index){
          var movieItem = $('<div>'+movie.name+'</div>');
          mainWrapper.append(movieItem);

          movieItem.click(function () {
            $.getJSON('data/data.json', function(data){
                $('#detail-wrapper').html('');
                console.log('click on movie', movie);
                $('#detail-wrapper').append('<img id="img-detail" src="'+movie.img_url+'" height="400" width="230"></div>');
                $('#detail-wrapper').append('<div id="movie-name"><p>'+movie.name+'</p></div>');
                $('#detail-wrapper').append('<div><p>Director: '+movie.director+'</p></div>');
                $('#detail-wrapper').append('<div><p>Year: '+movie.year+'</p></div>');
                $('#detail-wrapper').append('<div><p>'+movie.short_description+'</p></div>');
            });
          });
        });
    });
    
    $('#header-txt').css('font-size','50px');
    mainWrapper.css('width','300px');
    mainWrapper.css('text-align','left');
    mainWrapper.css('margin-right','50px');
    mainWrapper.css('margin-left','25px');
    mainWrapper.css('margin-top','0px');
    detailWrapper.css('display','inline-block');
    mainWrapper.css('display','inline-block');
  });

});
