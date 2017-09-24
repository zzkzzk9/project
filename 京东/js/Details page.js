$(function(){
	$('.m_left .ul2 li').each(function(i){
		$(this).mousemove(function(){
			$('.m_left .ul1 li').eq(i).show().siblings().hide();
			$(this).addClass('ac').siblings().removeClass('ac');
			$('.main_inner .ul3 li').eq(i).removeClass('ac').siblings().addClass('ac');
			
		});
		
		
		//放大镜
		var oSpan=$('.m_left .ul1 span');
		var oUl1=$('.m_left .ul1');
		oUl1.mousemove(function(ev){
		
			$('.m_left .ul1 span').show();
			$('.main_inner .ul3').show();
		var l=ev.pageX-$(this).offset().left-oSpan.width()/2;
		var t=ev.pageY-$(this).offset().top-oSpan.height()/2;
		if (l<0) {
			l=0
		};
		if (t<0) {
			t=0
		};
		var max_l=$(this).width()-oSpan.width();
		var max_t=$(this).height()-oSpan.height();
		console.log(t)
		if (l>max_l) {
			l=max_l
		};
		if (t>max_t) {
			t=max_t
		};
		oSpan.css({'left':l,'top':t});
		$('.main_inner .ul3 img').css({'top':-t*2.22,'left':-l*2.22})
		})
		oUl1.mouseout(function(){
			$('.m_left .ul1 span').hide();
			$('.main_inner .ul3').hide();
		})
	});
	$('.m_mid .dd3_a .border').click(function(){	
		$(this).addClass('ab').siblings().removeClass('ab');
	});
	var i=0;
	$('.shopping .btn1').click(function(){
		i++;
		$('.shopping textarea').val(i);
	});
	$('.shopping .btn2').click(function(){
		i--;
		if (i<0) {
			i=0;
			alert('数量不能为负')
		};
		
		$('.shopping textarea').val(i);
		
	});
	$('.shopping p').click(function(){
		if ($('.shopping textarea').val()>0) {
			alert('添加成功')
		}
	});
	//下拉菜单
	var show=true;
	$('.dd1 span').click(function(){
		if (show) {
			$('.dd1 ul').show();
			show=false;
		}else{
			$('.dd1 ul').hide();
			show=true;
		};
		$('.dd1 ul li').click(function(){
			$('.dd1 input').val($(this).html());
			$('.dd1 ul').hide();
			show=true;
		})
		
	});
	
	$('.showlist .top li').each(function(i){
		$(this).mousemove(function(){
			$('.showlist .box1').eq(i).show().siblings().hide();
			$('.showlist .top li').eq(i).addClass('ac').siblings().removeClass('ac');
		
			
		})
		
	})
})