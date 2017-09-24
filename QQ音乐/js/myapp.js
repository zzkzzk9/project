function geturlparams(){
	var url=window.location.href;
	var arr=url.split('?');
	var str=arr[1];
	var parr=str.split('#');
	var p=[];
	var params={};
	for (var i=0;i<parr.length;i++) {
		p.push(parr[i].split('='));
		params[p[i][0]]=p[i][1]
	}
	
	return params;
	
}
function getM(){
	var url=window.location.href;
	var p=url.split('#');
	if (p.length==2) {
		var m=p[1].split('?');
	var n=m[0];
	}
	
	return n
}

function round(m,$conter){
	$conter=$conter || $('#share');
	$.ajax({
		url:'views/'+m+'.html',
		success:function(data){
			$conter.html(data);
			loadjs(m)
		}
	})
}
function fontSize(){
	     var _html = document.getElementsByTagName("html")[0];
		 var w = document.documentElement.clientWidth;
		_html.style.fontSize = w/6.4 +"px";	
	}
	
function loadjs(m){
	$.ajax({
		type:"get",
		url:"js/"+m+".js",
		async:true
	});
}
$(function(){
	fontSize();
    window.onresize=fontSize;
  
	if (!localStorage.count) {
		localStorage.count=0
	}

	localStorage.count++;

	if (localStorage.count==1) {
		round("hello");
	} else{
		round("header",$('#header'))
		round("tab",$('#main'));
		round("audio",$('#music'))
	}
	
	$(document).scroll(function(){
		if ($(window).scrollTop()>50) {
			$('.search').css({'top':0})
		}else{
			$('.search').css({'top':'0.9rem'})
		}
		
	 
	});	
})
