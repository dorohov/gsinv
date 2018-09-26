(function(){ 
	
	var leavetimeout;
	
	/*$(document.body).on('azbn.azbn7__layouts-content.hide', '.azbn7__layouts-content', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var note = block.find('.azbn-layout-note');
		var panel = block.find('.azbn7__layout-panel');
		
		//panel.fadeOut(150);
		//note.fadeIn(150);
		panel.toggleClass("is-visible is-hidden");
		note.toggleClass("is-hidden is-visible");
		
		block.attr('data-status', 0);
		
	});*/
	
	$(document.body).on('azbn.azbn7__layouts-content.setStatus', '.azbn7__layouts-content', {}, function(event, status, apFree, apSale, apReserv, apArea, apNumber){
		event.preventDefault();
		
		var block = $(this);
		var panel = block.find('.azbn7__layout-panel');
		
		var _s = parseInt(block.attr('data-status')) || 0;
		
		window.clearTimeout(leavetimeout);
		
		if(status) {
			panel.find('.azbn7__ap_free').html(apFree);
			panel.find('.azbn7__ap_sale').html(apSale);
			panel.find('.azbn7__ap_reserv').html(apReserv);
			panel.find('.azbn7__ap_area').html(apArea);
			panel.find('.azbn7__ap_number').html(apNumber);
			
			if(_s == 0) {
				panel.toggleClass("is--hidden");
			} else {
				
			}
		} else {
			//panel.toggleClass("is--hidden");
		}
		
		block.attr('data-status', status);
		
	});
	$(document.body).on('mouseenter.azbn', '.azbn7__layouts-content .azbn7__layout-rect', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var apFree = parseInt(block.attr('data-ap-free')) || 0;
		var apSale = parseInt(block.attr('data-ap-sale')) || 0;
		var apReserv = parseInt(block.attr('data-ap-reserv')) || 0;
		var apArea = parseInt(block.attr('data-ap-area')) || 0;
		var apNumber = parseInt(block.attr('data-ap-number')) || 0;
		
		$('.azbn7__layouts-content').trigger('azbn.azbn7__layouts-content.setStatus', [1, apFree, apSale, apReserv, apArea, apNumber]);
		
	});
	
	$(document.body).on('mouseleave.azbn', '.azbn7__layouts-content .azbn7__layout-rect', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var floor = parseInt(block.attr('data-floor')) || 0;
		
		leavetimeout = setTimeout(function(){
			$('.azbn7__layouts-content').trigger('azbn.azbn7__layouts-content.hide');
		}, 250);
		
	});
	
	/*$(document.body).on('click.azbn', '.azbn7__layouts-content .azbn7__layout-rect', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var link = block.attr('data-link') || '';
		var floor = parseInt(block.attr('data-floor-id')) || 0;
		
		var _href = $('.azbn7__layouts-content').attr('data-base-url') || '';
		
		if(link != '') {
			window.location.href = link;
		} else {
			window.location.href = _href + floor;
		}
		
	});*/
	
	$('.azbn7__layouts-content').trigger('azbn.azbn7__layouts-content.setStatus', [0, 0]);
	
})();