$('.plus-minus-btn').click(function(e){
	var $button = $(this);
	var oldValue = $button.closest('.counter-widget').find('input').val();
					
	if ($button.text() == "+") {
		var newVal = parseFloat(oldValue) + 1;
	} else {
		// Don't allow decrementing below zero
		if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
		} else {
			newVal = 0;
		}
	}
					
	$button.closest('.counter-widget').find('input').val(newVal);
  
	e.preventDefault();
});
