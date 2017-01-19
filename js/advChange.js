$(function() {
	var slider = $('#scrollPics .slider');
	var imgCon = $('#scrollPics .slider li'); 
	imgCon.not(imgCon.eq(0)).hide(); 
	var num = $('#scrollPics .num'); 
	var len = slider.find('li').length;
	var html_page = '',
		index = 0;
	
	for(var i = 0; i < len; i++) {
		if(i === 0) {
			html_page += '<li class=on >' + (i + 1) + '</li>';
		} else {
			html_page += '<li>' + (i + 1) + '</li>';
		}
	}
	num.html(html_page);
	
	function showPic(index) {
		imgCon.eq(index).show().siblings("li").hide();
		num.find("li").eq(index).addClass('on').siblings("li").removeClass("on");
	}
	
	$('.num li').mouseover(function() {
		index = $(this).index(); 
		showPic(index);
	})
	$('#scrollPics').hover(function() {
		clearInterval(window.timer);
	}, function() {
		window.timer = setInterval(function() {
			showPic(index);
			index++;
			if(index === len) {
				index = 0;
			}
		}, 2000);
	}).trigger('mouseleave'); 
});