/*$(function(){
	var yPos = 0,
		wHeight = $(window).height(),
		$pages = $('.page'),
		cur = 1,
		totalPages = $pages.length;
		$window = $(window);

	// $window.on('click', function(){	
	// 	if( cur === totalPages ){
	// 		$($pages.get(0))
	// 			.scrollToMe();

	// 		cur = 1;

	// 		return;
	// 	}

	// 	$($pages.get(cur++))
	// 		.scrollToMe();
	// });

	$('.ppa')
});


$.fn.scrollToMe = function(coordY){
	var scrollTo = $(this).offset().top;

	$('html, body')
		.animate({
			scrollTop: coordY || scrollTo
		});
}*/
$(function(){
	
	var pages = $('.page'),
		length = pages.length - 1,
		index = 0,
		currentPage = pages.eq(index),
		nextPage = getNextPage();

	var outEffect = 
['moveToLeft',
'moveToRight',
'moveToTop',
'moveToBottom',
'moveToLeftFade',
'moveToRightFade',
'moveToTopFade',
'moveToBottomFade',
'moveToLeftEasing',
'moveToRightEasing',
'moveToTopEasing',
'moveToBottomEasing'
],
		inEffect = 
['moveFromLeft',
'moveFromRight',
'moveFromTop',
'moveFromBottom',
'fade',
'moveFromLeftFade',
'moveFromRightFade',
'moveFromTopFade',
'moveFromBottomFade'];

	var inIndex = 0,
		outIndex = 0;

	function getEffect( type , index ){
		var effect = 'page-';
		if( type == 'in' )
			effect += inEffect[index];
		else
			effect+= outEffect[index];

		return effect;
	}

	function changeEffect(){
		inIndex = inIndex < inEffect.length - 1 ? inIndex + 1 : 0;
		outIndex = outIndex < outEffect.length - 1 ? outIndex + 1 : 0;
	}

	function getNextPage(){
		index = index < length ? index + 1 : 0;
		return pages.eq(index);
	}

	function changePage(){
		console.log(index);
		currentPage.addClass( getEffect( 'out',  outIndex ) );
		nextPage.addClass( getEffect( 'in', inIndex ) +' top current');
		setTimeout(finalize, 700);
	}

	function finalize(){
		currentPage.removeClass('current ' + getEffect( 'out', outIndex ) );
		nextPage.removeClass('top '+ getEffect( 'in', inIndex ) );
		currentPage = nextPage;
		nextPage = getNextPage();
		changeEffect();
	}

	pages.on('click', changePage);

})