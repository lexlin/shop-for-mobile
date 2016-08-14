//shopcart.js
$(function() {
    FastClick.attach(document.body);
    
});
$('.plus').on('click', plus);
$('.reduce').on('click', reduce);

$('.del').on('click', function(){
	$(this).parents('li').remove()
});
$('.clearcart').on('click', function(){

//	$('.cartlist').find('li').each(function(){
//		$(this).remove()
//	})

$('.cartlist').children().remove();
$('.null_shopping').show();

});

function reduce () {
	var num=parseInt($(this).next().children(0).val());
	if (!isNaN(num)) {
			if (num<2) {
				num=1;
			}else{
				num-=1;
			}
	}else{
		num=1;
	}
	$(this).next().children(0).val(num)
}

function plus () {
	var num=parseInt($(this).prev().children(0).val());
	console.log(num)
	if (!isNaN(num)) {	
		if (num<1) {
			num=1;
		}else{
			num+=1;
		}
	}else{
		num=1;
	}
	$(this).prev().children(0).val(num)
}
//detail.js
$('.tap-l').on('click', function(){
	$(this).addClass('on').next().removeClass('on');
	$('.fl-show').show().next().hide();
});
$('.tap-r').on('click', function(){
	$(this).addClass('on').prev().removeClass('on');
	$('.fr-show').show().prev().hide();
	
});
$('#collectDiv').on('click', function(){
	if ($(this).children('i').hasClass('fa-star-o')) {
		$(this).children('i').addClass('fa-star').removeClass('fa-star-o');
	}else{
		$(this).children('i').addClass('fa-star-o').removeClass('fa-star');
		
	}
//	$(this).children('i').addClass('fa-star').removeClass('fa-star-o');
//	$(this).children('i').toggleClass("fa-star").removeClass('fa-star-o')
});
