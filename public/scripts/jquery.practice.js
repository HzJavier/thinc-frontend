$(document).ready(function(){
	$('#main-wrapper').append('<br><br>Hey this is me, the main wrapper');


	$('#main-wrapper').css('background-color','#444');
	$('#main-wrapper').css('padding','10px');
	$('#main-wrapper').css('color','#ddd');

	var originalHeight = $('#main-wrapper').height();
	var halfHeight = originalHeight / 2;

	$('#main-wrapper').append('<br><br>My original height was: '+originalHeight+'<br>Now im: '+halfHeight);
	$('#main-wrapper').css('height',halfHeight);

	function onTimeOut(){
		console.log('4000ms have passed');
	}

	console.log('before Time Out');
	setTimeout(onTimeOut, 4000);
	console.log('after Time Out');


	$('#big-button').click(function(){
		$('#main-wrapper').css('background-color',$('#color-set').val());
			$.ajax({
				url:"data/data.json",
				dataType:"json",
				success: function(data){
					data.Teacher.forEeach(function(teacher){
						$(body).preappend(teacher);
					});
				}
			});
	});


	

});