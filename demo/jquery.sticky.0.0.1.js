/**
 * jQuery Sticky
 * A very lightweight jQuery plugin to make an element sticky until a defined element is in view
 * 
 * Licensed under the MIT license.
 * Copyright 2013 Brian Retterer
 * https://github.com/bretterer
 */

 ;(function($) {
	
	$.fn.sticky = function( options ) {

		var $element = this;
		var elementTopPosition = $element.position().top;

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
		onPageScroll();

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
				
			
			if(scrollAmt >= (elementTopPosition - window.innerHeight) + $element.height()) {
				$element.css({'position':currentPosition,'bottom':currentBottom});
				// $(settings.releaseAt).css('margin-top','');
			} else {
				setPosition();
			}
		}

		return this;

	}
	
}(jQuery));