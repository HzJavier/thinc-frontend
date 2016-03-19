$(document).ready(function(){
	var mainWrapper = $('#main-wrapper');

	//mainWrapper.html('Content for wrapper');
	mainWrapper.css('background-color', '#DDD');

	var bgColor = $('#main-wrapper').css('background-color');

	var currentWidth = mainWrapper.css('width');
	mainWrapper.css('width', parseInt(currentWidth)/2);
	currentWidth = mainWrapper.css('width');

	var currentHeight = mainWrapper.css('height');
	mainWrapper.css('height', parseInt(currentHeight)/2);
	currentHeight = mainWrapper.css('height');


	/*TIME OUT & CALL BACK*/
	function onTimeout(){
		console.log('timeout');
	}

	console.log('before timeout');
	setTimeout(function(){
		console.log('timeout');
	}, 4000);
	console.log('after timeout');


	/*JQUERY EVENTS*/
	$('#color-button').click(function() {
		//get
		var newcolor = $('#color').val();
		//Set
		mainWrapper.css('background-color', newcolor);
	});


	/*AJAX*/
	$.ajax({
		url: 'Data/data.json',
		dataType: 'json',
		success: function(data){
			console.log(data);
			 var series = data.series;

			 series.forEach(function (series){
			 	mainWrapper.append('<div>' + series.name + '</div>');
			 });
		}
		/*$.ajax({
			url: 'data.items.json',
			method: 'POST',
			data: restaurant,
			success: function(){

			},
			error: function(error){
				console.log('error', error);
			}
		})*/
	});




});
