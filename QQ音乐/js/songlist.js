$('.return .glyphicon-arrow-left').click(function(){
	round('QQmusic');
	$('.body').css({'display':'block'});
	$('#share').css({'display':'none'})
})



var parmas=geturlparams();
function songid(callback){
	$.ajax({
		type:"get",
		url:"data/playlist.json",
		async:true,
		success:function(data){
			
			var list=data.playlist.tracks;
			callback(list)
		
		}
	});
}
songid(function(list){
	var item=$('#sonlist').html();
	
	var $son=$('.songList');
	for (var i=0;i<list.length;i++) {
		$item=$(item);
		var music=list[i];
		
		$item.find('.music').html(list[i].name);
		$item.find('.name').html(list[i].ar[0].name);
		$item.data('music',music).click(function(){
			
			$('#music').find('.musicbot').html($(this).data('music').name);
			$('#music').find('.imgtouxiang').attr('src',$(this).data('music').al.picUrl);
			$('#music').find('.namebot').html($(this).data('music').ar[0].name);
			
			mControler.play($(this).data('music').id);
			
		});
		$son.append($item);
	
		
		var aDiv=document.getElementsByClassName('i1');
	for(var i=0; i<aDiv.length; i++){
		aDiv[i].color=true;
		aDiv[i].onclick=run;
	};
	
	

	
	function run(ev){
		ev.stopPropagation();
		if(this.color){
			$(this).css({'color':'red'});
			this.color=!this.color;
		}else{
			$(this).css({'color':'#868686'});
			this.color=!this.color;
		};
		
	};
		
	}
})
