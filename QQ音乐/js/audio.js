$('#btn').click(function(ev){
	ev.stopPropagation();
	if ($(this).hasClass('play')) {
		$(this).removeClass();
		audio.play();
	} else{
		$(this).addClass('play');
		audio.pause()
	}
	

})
mControler={
	server:"http://music.126.com/song.php?id=",
	play:function(id){
		$.ajax({
			type:"get",
			url:"data/music.json",
			async:true,
			success:function(data){
				
				var url=data[id].url;
				$("#audio").attr("src",url);
				$("#audio").get(0).play();
				$('#btn').removeClass();
			}
		});
	}
}
