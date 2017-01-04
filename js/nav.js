 // адаптивное меню
$(document).ready(function() {
  $('#menu-trigger').click(function() {
    $('.navBar').slideToggle(500);
  });//end slide toggle
  
  $(window).resize(function() {		
		if (  $(window).width() > 500 ) {			
			$('.navBar').removeAttr('style');
		 }
	});//end resize
});//end ready



