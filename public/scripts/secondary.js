$('document').ready(function() {
  var mainWrapper = $('#main-wrapper');
  var detailWrapper = $('#detail-wrapper');

  var mainHeight = mainWrapper.css('height');

  mainHeight = mainWrapper.css('height');
  mainWrapper.css('height',parseInt(mainHeight)/2);
  mainHeight = mainWrapper.css('height');

  console.log(mainHeight);

  $('#button1').click(function() {
    $.getJSON('data/data.json', function(data){
        //console.log(data);
        mainWrapper.html('');
        var movies = data.movies;
        movies.forEach(function(movies){
          mainWrapper.append('<div><a href="#" id="get-json-'+movies.id+'">'+movies.name+'</a></div>');
        });
    });
    mainWrapper.css('width','300px');
    mainWrapper.css('text-align','left');
    mainWrapper.css('margin','30px 30px 30px 30px');
    detailWrapper.css('display','inline-block');
    mainWrapper.css('display','inline-block');
  });

  $('#get-json-1').click(function() {
    $.getJSON('data/data.json', function(data){
        console.log(data);
        var movieResult = JSON['movies'].filter(function(x){ return x.id == 1; });
        detailWrapper.append('<div>'+movieResult.name+'</div>');
    });
  });

});
