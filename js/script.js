
	var header1_start_height = 0;
	var video_container = '';

	$('.header1_play').click(function(){
		video_container = $(this).attr('data-container-id');
		header1_start_height = $('#'+video_container).outerHeight();
		var windowHeight=$(window).height();
		var windowWidth=$(window).width();
		$('#'+video_container).animate({height:windowHeight},300);
		$('#'+video_container+' .container, .nav5').fadeOut(300);
		$('#'+video_container+' .video').height(windowHeight).width(windowWidth).fadeIn(300);
		$('#'+video_container+' video').height(windowHeight).width(windowWidth).get(0).play();
		// check if device is mobile in portrait orientetion
		if(windowWidth<=windowHeight){
			var koeff = $('#'+video_container+' video').get(0).videoWidth/windowWidth;
			var height = $('#'+video_container+' video').get(0).videoHeight/koeff;
			$('#'+video_container).animate({height:height},300);
			$('#'+video_container+' .video').height(height).width(windowWidth).fadeIn(300);
			$('#'+video_container+' video').height(height).width(windowWidth).get(0).play();
		}
	});
	$('.header1_pause').click(function(){
		$('#'+video_container).animate({height:header1_start_height},300);
		$('#'+video_container+' .container, .nav5').fadeIn(300);
		$('#'+video_container+' .video').fadeOut(300);
		$('#'+video_container+' video').get(0).pause();
	});

