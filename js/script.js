// video

var header5_start_height = 0;
	var video_container = '';

	$('.header5_play').click(function(){
		video_container = $(this).attr('data-container-id');
		header5_start_height = $('#'+video_container).outerHeight();
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
	$('.header5_pause').click(function(){
		$('#'+video_container).animate({height:header5_start_height},300);
		$('#'+video_container+' .container, .nav5').fadeIn(300);
		$('#'+video_container+' .video').fadeOut(300);
		$('#'+video_container+' video').get(0).pause();
	});


// login

function removeAlerts(){
  document.getElementById("error").innerHTML = "";
  document.getElementById("erroruser").innerHTML = "";
  document.getElementById("errorpwd").innerHTML = "";
  document.getElementById("errorpwdchar").innerHTML = "";
}

function validateForm() {
  removeAlerts();

  var username = document.forms["myForm"]["user"].value;
  var pwd = document.forms["myForm"]["pass"].value;

  if(!username && !pwd){
    document.getElementById("error").innerHTML = "Por favor ingrese usuario y contraseña";
    return false;
  } else if(username == null || username == ""){
		document.getElementById("erroruser").innerHTML = "Por favor ingrese usuario";
		return false;
  } else if(pwd == null || pwd == ""){
		document.getElementById("errorpwd").innerHTML = "Por favor ingrese contraseña";
		return false;
	} else if(pwd.length < 6){
		document.getElementById("errorpwdchar").innerHTML = "La contraseña debe tener un mínimo de 6 carácteres";
		return false;
	}

}
