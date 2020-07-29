jQuery(document).ready(function($) {
	$(document).on('mouseover', '.img-hv', function() {
		$(this).find('img').first().css('display', 'none');
		$(this).find('img').last().css('display', 'block');
		$(this).find('div').css('color', '#fff');
	})
	$(document).on('mouseleave', '.img-hv', function() {
		$(this).find('img').first().css('display', 'block');
		$(this).find('img').last().css('display', 'none');
		$(this).find('div').css('color', 'black');
	})
	$(document).on('mouseover', '.img-hv-2', function() {
		$(this).find('img').first().css('display', 'none');
		$(this).find('img').last().css('display', 'block');
		$(this).find('i').css('color', '#fff');
	})
	$(document).on('mouseleave', '.img-hv-2', function() {
		$(this).find('img').first().css('display', 'block');
		$(this).find('img').last().css('display', 'none');
		$(this).find('i').css('color', 'black');
	})
	$(document).on('mouseover', '.img-hv-3', function() {
		$(this).find('img').first().css('display', 'none');
		$(this).find('img').last().css('display', 'block');
		$(this).find('span').css('color', '#fff');
	})
	$(document).on('mouseleave', '.img-hv-3', function() {
		$(this).find('img').first().css('display', 'block');
		$(this).find('img').last().css('display', 'none');
		$(this).find('span').css('color', 'black');
	})

	$('.prj-all-img').isotope(function() {
		itemSelector: '.prj-img';
	})
	$('.prj-li').first().css('backgroundColor', '#f56906').css('color', '#fff');
	$('.prj-li').click(function() {
		$('.prj-li').css('backgroundColor', "#fff").css('color', 'black');
		$(this).css('backgroundColor', '#f56906').css('color', '#fff');
		var type = $(this).attr('type');
		type = '.' + type;
		$('.prj-all-img').isotope({
			filter:type
		});
	})
	$('.email').blur(function() {
	    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
	    if (!filter.test($(this).val())) { 
	        $(this).next().css('display', 'block');
	        $(this).css('border', '1px red solid');
	    } else if (filter.test($(this).val())) {
			$(this).next().css('display', 'none');
			$(this).css('border', '1px #4EF21B solid');
		}
	})
	$('.input').blur(function() {
		if ($(this).val() == '') {
			$(this).next().css('display', 'block');
			$(this).css('border', '1px red solid');
		} else if ($(this).val() != '') {
			$(this).next().css('display', 'none');
			$(this).css('border', '1px #4EF21B solid');
		}
	})
	$('.submit-form').click(function() {
		var dem = document.getElementsByTagName('input');
		for (var i = 0; i < $('input').length; i++) {
			if (dem[i].value == '') {
				dem[i].nextElementSibling.style.display = 'block';
				dem[i].style.border = '1px red solid';
			} else if (dem[i].value != '') {
				dem[i].nextElementSibling.style.display = 'none';
				dem[i].style.border = '1px #4EF21B solid';
			}
		}
		var x = 0;
		for (var i = 0; i < $('input').length; i++) {
			if (dem[i].nextElementSibling.style.display == 'block') {
				x += 1;
			} 
		}
		if (x != 0) {
			alert('Đăng kí thất bại!');
		} else {
			alert('Đăng kí thành công!');
			for (var i = 0; i < $('input').length; i++) {
				$('input').val('');
				$('input').css('border', '1px black solid');
			}
		}
	})
	$('.team-col img').mouseover(function() {
		$(this).append('<div>abc</div>');
	})
})