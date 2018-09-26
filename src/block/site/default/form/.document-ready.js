$(".form__control[type='tel']").mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
$(".form__block").validationEngine(
	'attach', {
		promptPosition : "bottomLeft",
		//scrollOffset: 200,		
		scroll: false
	}
); 

$('.form__control.is--input').on('focusin', function(e) {
	$(this).closest('.form__item').addClass('is--filled');
});
/*
$('.form__control').keyup(function() {
	if($(this).val().length > 0){
		$(this).closest('.form__item').addClass('is--filled');
	}
	else{
		$(this).closest('.form__item').removeClass('is--filled'); 
	}
});
*/