$(function() {
	var initBigImg = false;  
	// 监听小图片的mouseenter事件，获取小图的bigImageURL属性,把大图片的src修改为该图片
	// 预加载，因为图片比较大，所以需要进行预加载。
	$("img.smallImage").mouseenter(function() {
		var bigImageURL = $(this).attr("bigImageURL");
		$("img.bigImg").attr("src",bigImageURL);
		$("img.smallImage").each(function () {
        	$(this).css('border-color', 'white');
     	});
    	$(this).css('border-color', 'black');
	});

	// 在大图片加载好之后，根据每个小图片的bigImageURL ，创建一个Image对象，然后把这个image对象的src属性，设置为bigImageURL。 
	// 当这个img对象加载完毕之后，再放到被隐藏的div.img4load中，从而达到预加载的效果。
	$("img.bigImg").load(function() {
		if(initBigImg) return;
		$("img.smallImage").each(function() {
			var bigImageURL = $(this).attr("bigImageURL");
			img = new Image();
			img.src = bigImageURL;
			img.onload = function(){
				$("div.img4load").append($(img));
			};
		});
		initBigImg = true;
	});

	var stock = 66;
	$(".productNumberSet").keyup(function() {
		var num = $(".productNumberSet").val();
		num = parseInt(num);
		if(isNaN(num)) num = 1;
		if(num <= 0) num = 1;
		if(num > stock) num = stock;
		$(".productNumberSet").val(num);
	});
	$(".increaseNumber").click(function() {
		var num = $(".productNumberSet").val();
		num ++;
		if(num > stock) num = stock;
		$(".productNumberSet").val(num);
	});
	$(".decreaseNumber").click(function() {
		var num = $(".productNumberSet").val();
		--num;
		if(num <= 0) num = 1;
		$(".productNumberSet").val(num);
	});

	$("a.reviews").click(function() {
		$("div.productDetailDiv").hide();
		$("div.productReviewDiv").show();
	});
	$("a.productReviewTopPartSelectedLink").click(function() {
		$("div.productDetailDiv").show();
		$("div.productReviewDiv").hide();
	});
});