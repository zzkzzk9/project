$(function() {
	//二级菜单
	$('.nav_list li').each(function(i) {
		$(this).hover(function() {
			$('.nav_list li').css('background', '#c81623');
			$(this).css('background', '#FFF');
			$('.nav_list a').css('color', '#fff');
			$('.popup').eq(i).css('display', 'block').siblings().css('display', 'none');
			$(this).children().children('a').css('color', 'black');
		}, function() {

			$('.popup').eq(i).css('display', 'block').siblings().css('display', 'none');

		});

		$('.wrap').mouseleave(function() {
			$('.nav_list li').css({
				'background': '#c81623'
			});

			$('.nav_list li').children().children('a').css({
				'color': '#fff'
			});
			$('.popup').css('display', 'none')
		})

	});

	//轮播图
	$(document).ready(function() {
		var i = 0;
		var timer;

		function autoRun() {

			timer = setInterval(function() {
				i++;
				$('.banner ul').animate({
					'left': -730 * i
				}, 1000);

				if(i >= $('.banner ul li').length / 2) {
					i = 0;
					$('.banner ul').animate({
						'left': 0
					}, 0)
				};
				$('.banner ol li').eq(i).addClass('one').siblings().removeClass('one')
			}, 3000)
		};

		$('.banner ol li').click(function() {
			i = $(this).index();
			$('.banner ul').animate({
				'left': '-730' * i + 'px'
			});
			$('.banner ol li:eq(' + i + ')').addClass('one').siblings().removeClass('one');

		})

		$('.prev').click(function() {
			i--;
			if(i < 0) {
				i = $('.banner ul li').length - 1;
			};
			$('.banner ul').animate({
				'left': '-730' * i + 'px'
			});
			$('.banner ol li:eq(' + i + ')').addClass('one').siblings().removeClass('one');

		})

		$('.next').click(function() {
			i++;
			if(i == $('.banner ul li').length) {
				i = 0;
			};
			$('.banner ul').animate({
				'left': '-730' * i + 'px'
			});
			$('.banner ol li:eq(' + i + ')').addClass('one').siblings().removeClass('one');

		});
		autoRun();
		$('.banner').mouseover(function() {
			clearInterval(timer);
		});
		$('.banner').mouseout(function() {

			autoRun()
		});
	});

	//12格
	var show = true;
	$('.mod_tab_head_item').hover(
		function(ev) {
			var a = $(this).index();
			if(show) {

				$('.service').addClass('service_expand');

				$('.service_pop').eq(a).show().siblings().hide();
				$(this).addClass('acb').siblings().removeClass('acb');

			};

		},
		function() {
			show = true;

		}
	);

	$('.closeBtn').click(function() {

		$('.service').removeClass('service_expand');
		$('.mod_tab_head_item').removeClass('acb');

		show = false;
	});

	//楼层
	var ali = $('.LocationFloorList li');
	var abox = $('.louceng1').children('.page15');
	var arr = [];

	abox.each(function() {

		var _this = $(this).children('ol').children('li');

		$(this).children('.top').children('ul').children('li').hover(function() {
			var a = $(this).index();

			$(this).addClass('ac').siblings().removeClass('ac');
			_this.eq(a).show().siblings().hide()
		}, function() {

		})
	});
	for(var i = 0; i < $('.LocationFloorList li').length; i++) {
		var obj = {};
		obj.name = i;
		obj.offsettop = abox.eq(i).offset().top;
		arr.push(obj)
	};
	$(document).scroll(function() {
		var last_arr = [];
		var scrolltop = $(window).scrollTop();
		if(scrolltop > 1500) {
			$('.LocationFloorList').show()
		} else {
			$('.LocationFloorList').hide()
		};
		if(scrolltop > 9000) {
			$('.LocationFloorList').hide();
			$('.returnTop').show()
		} else {
			$('.returnTop').hide()
		};
		for(var j = 0; j < arr.length; j++) {
			if(arr[j].offsettop < scrolltop + 400) {
				last_arr.push(arr[j].name)
			}
		};
		var lastIndex = last_arr.length - 1;

		ali.removeClass('ac');
		ali.eq(lastIndex).addClass('ac')
	});
	$('.returnTop').click(function() {

		$('html,body').animate({
			'scrollTop': 0
		}, 1000);
	});
	ali.click(function() {

		if($(this).index() == 0) {

			$("html,body").animate({
				"scrollTop": 1500
			}, 1000)
		}
		$("html,body").animate({
			"scrollTop": arr[$(this).index() - 1].offsettop + 400
		}, 1000);

	});
	$(document).ready(function() {
		var i = 0;
		var timer;

		function auto() {
			timer = setInterval(function() {
				i++;
				$('.page10 ul').animate({
					'top': -128 * i
				}, 1000)
				if(i >= $('.page10 ul li').length / 2) {
					i = 0;
					$('.page10 ul').animate({
						'top': 18
					}, 0)
				};

			}, 2000)
		}
		auto();
		$('.page10 ul').mouseover(function() {
			clearInterval(timer);
		});
		$('.page10 ul').mouseout(function() {

			auto()
		});
	});
//话费
			$('.huafei1').children('.dt1').children('dd').mousemove(function(){
				$(this).addClass('dd1').siblings().removeClass('dd1')
			});
			$('.jipiao1').children('.dt1').children('dd').mousemove(function(){
				$(this).addClass('dd1').siblings().removeClass('dd1')
			});
			$('.jiudian1').children('.dt1').children('dd').mousemove(function(){
				$(this).addClass('dd1').siblings().removeClass('dd1')
			});
			$('.youxi1').children('.dt1').children('dd').mousemove(function(){
				$(this).addClass('dd1').siblings().removeClass('dd1')
			})
});