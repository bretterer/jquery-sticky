(function($) {
	
	$.fn.sticky = function( options ) {

		var $element = $(this);
		var elementTopPosition = $(this).position().top;

		//get current style we are going to overwrite
		var currentPosition = $element.css('position');
		var currentBottom = $element.css('bottom');

		var scrollAmt = 0;

		var settings = $.extend({
			position	: 'fixed',
			bottom		: '0px',
			releaseAt	: null
		}, options);

		setPosition();

		$(window).bind('scroll',onPageScroll);

		function setPosition() {
			$element.css({'position':settings.position,'bottom':settings.bottom});
			// $(settings.releaseAt).css('margin-top',$element.height());
		}

		function onPageScroll() {
			scrollAmt = $(window).scrollTop();

			if(settings.releaseAt != null) {
				var position = $(settings.releaseAt).position();

			}
			console.log('position.top ==== ' + position.top);
			console.log('window height ==== ' + window.innerHeight);
			console.log('scrollAmt === ' + scrollAmt);
			console.log('');

			
			
			if(scrollAmt >= (elementTopPosition - window.innerHeight) + $element.height()) {
				$element.css({'position':currentPosition,'bottom':currentBottom});
				// $(settings.releaseAt).css('margin-top','');
			} else {
				setPosition();
			}
		}

	}
	
}(jQuery));