//$('.reduce').on('click',reducenums);
//$('.plus').on('click',plus);
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
