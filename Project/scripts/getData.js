$.ajax({
	url : 'data/data.json',
	dataType: 'json',
	success: function (data){
		var players = data.players;
		var count = 0;
		players.forEach(function (player){
		$('#content-wrapper').append('<div class="content-items" id=item'+count+'>' + player.name + '<div id="details'+count+'"></div></div>');
		$('#content-wrapper').append('<button class="button-details" onclick = "showDetails('+count+')">Details</button>');
		$('#content-wrapper').append(
			'<div id="reviews'+count+'" class="review-wrapper">'+
			'<div class="star"></div>'+
            '<div class="star"></div>'+
            '<div class="star"></div>'+
            '<div class="star"></div>'+
            '<div class="star"></div>'+
            '</div>'
            
            )
		count++;
		});
		console.log(data);
	}
});

function showDetails(count){
	$.ajax({url : 'data/data.json',
	dataType: 'json',
	success: function (data){
		var players = data.players;
		$("#details"+count).html( players[count].position + '<br>' + players[count].team);
	}}
);	
}

$(document).on("click",'.star',
    function() {
    	if ($(this).hasClass('star1')) {
    		$(this).removeClass('star1');
    	}
    	else
        	$(this).addClass('star1');
    }
);
