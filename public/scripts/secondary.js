
 $("#leftnav").hover(
    function () {
        var display =  $(this).css("display");
		if(display!='none')
		{
			$(this).hide();
		    //$("#leftnav").attr("style", "display:list-item");
		}
    }
);
