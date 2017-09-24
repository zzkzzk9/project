$('.navleft').click(function(){
	$('.left_mune').css({'left':0});
	$('.left_mune_inner').css({'left':0});
})
$('.left_mune').click(function(ev){
	ev.preventDefault();
	if (ev.target==$('.left_mune_inner')) {
		console.log(1)
	}
	$('.left_mune').css({'left':'-100%'});
	$('.left_mune_inner').css({'left':'-100%'});
})