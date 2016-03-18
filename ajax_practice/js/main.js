$(document).ready(function(){
	var dudes;

	$.ajax({
		url:"data/data.json",
		dataType:"json",
		success: function(data){
	        dudes = data.Dudes;
			$.ajax({
				url:"backend/backend.php",
				type:"get",
				dataType:"json",
				success: function(data){
					rates = data;
					console.log(rates);
				}
			});
	        dudes.forEach(function (dude) {
	         $('#dudes-wrapper').append('<div class="dude"><div class=".dude-data">Name: ' + dude.name  + '<br>Age: '+ dude.age+'<br>Color: '+dude.color+'</div><div class="qualifications"><i class="fa fa-beer"></i><i class="fa fa-beer"></i><i class="fa fa-beer"></i><i class="fa fa-beer"></i><i class="fa fa-beer"></i><i class="fa fa-beer"></i></div></div>');
	        });
		}
	});

	$(document).on('mouseover','i',function(){
		var elem = $(this);
		elem.parent().find('.fa').css('color','#ddd');
		color = dudes[elem.parent().parent().index()].color;
		elem.css('color',color);
		if(elem.index() > 0)
			elem.prevAll().css('color',color);
	});

	$(document).on('click','i',function(){
		var beers = $(this).parent().html();
		var clickedDude = dudes[$(this).parent().parent().index()];
		$('#dudes-details').html('<br><br>wooohooo! <b>'+clickedDude.name+'</b> is happy now!!<br>Now this dude is going to take all his beers '+beers).fadeIn('slow').delay(3000).fadeOut('slow');

		$.ajax({
			url:"backend/backend.php",
			type:"post",
			dataType:"json",
			data:{"id":clickedDude.id,"quantity":$(this).index()+1},
			success: function(data){
				alert("data saved");
			}
		});
	});
});