$('document').ready(function() {
  var mainWrapper = $('#main-wrapper');
  var detailWrapper = $('#detail-wrapper');

  $('#button1').click(function() {
    $.getJSON('data/data.json', function(data){
        console.log(data);
        mainWrapper.html('');
        var movies = data.movies;
        movies.forEach(function(movies){
          mainWrapper.append('<div><a href="#" id="get-json-'+movies.id+'">'+movies.name+'</a></div>');
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

$(document).on('click', '#get-json-1',function() {
  $.getJSON('data/data.json', function(data){
      //console.log(data);
      $('#detail-wrapper').html('');
      var movies = data.movies;
      movies.forEach(function (movie) {
          if(movie.id==1){
            $('#detail-wrapper').append('<img id="img-detail" src="'+movie.img_url+'" height="400" width="230"></div>');
            $('#detail-wrapper').append('<div id="movie-name"><p>'+movie.name+'</p></div>');
            $('#detail-wrapper').append('<div><p>Director: '+movie.director+'</p></div>');
            $('#detail-wrapper').append('<div><p>Year: '+movie.year+'</p></div>');
            $('#detail-wrapper').append('<div><p>'+movie.short_description+'</p></div>');
          }
      });
  });
});
