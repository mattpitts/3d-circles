$(document).ready(function() {

	var numOfCircles = 40;
	var circles = [];
	function createCircles(num) {
		circles = [];
		$('.background').html();
		for (let i = 0; i < num; i++) {
			circles[i] = {
				class: i.toString(),
				size: 20 + i*(45/num) + (i*2),
				left: 50-(num/2),
				top: 30-(num/2),
				maxMove: i*(100/num)
			};
			let newDiv = $('<div class="'+circles[i].class+'"></div>');
			newDiv.css( {
				'height': 	circles[i].size.toString() + 'vw',
				'width': 	circles[i].size.toString() + 'vw',
				'left': 	(50-(circles[i].size/2)).toString() + 'vw',
				'top':		(30-(circles[i].size/2)).toString() + 'vw'
			});
			$('.background').append(newDiv);
		}
	}

	$(document).mousemove(function(event) {
		let width = $(window).width();
		let xMod = (event.pageX-(width/2))/width;
		let yMod = (event.pageY-(width/2))/width;
		updateCirclePositions(xMod,yMod);
	});
	function updateCirclePositions(x,y) {
		for (let i = 0; i < circles.length; i++) {
			let newX = circles[i].left + circles[i].maxMove * x;
			let newY = circles[i].top + circles[i].maxMove * y;
			let classTarget = "."+i.toString();
			$(classTarget).css( {
				'left': newX.toString() + 'vw',
				'top': newY.toString() + 'vw'
			});
		}
	}
	createCircles(numOfCircles);
	// $(window).resize(function() {
	// 	resetCirclePos();
	// });
	//
	// function resetCirclePos() {
	// 	$('.middleCircle').css({
	// 		'left': '30vw',
	// 		'top': '10vw'
	// 	});
	// 	$('.frontCircle').css({
	// 		'left': '25vw',
	// 		'top': '5vw'
	// 	});
	// 	frontCircleXPos = Number($('.frontCircle').css("left").replace(/[^0-9]/g, ''));
	// 	frontCircleYPos = Number($('.frontCircle').css("top").replace(/[^0-9]/g, ''));
	// 	middleCircleXPos = Number($('.middleCircle').css("left").replace(/[^0-9]/g, ''));
	// 	middleCircleYPos = Number($('.middleCircle').css("top").replace(/[^0-9]/g, ''));
	// 	width = $(window).width();
	// 	height = $(window).height();
	// }
	// $(document).mousemove(function(event) {
	// 	let newFrontXPos = ((event.pageX-(width/2))/width)*1.2 * frontCircleXPos;
	// 	let newFrontYPos = ((event.pageY-(height/2))/height)*3 * frontCircleYPos;
	// 	let newFrontXPosString = (frontCircleXPos + newFrontXPos).toString() + "px";
	// 	let newFrontYPosString = (frontCircleYPos + newFrontYPos).toString() + "px";
	// 	$('.frontCircle').css('left', newFrontXPosString);
	// 	$('.frontCircle').css('top', newFrontYPosString);
	// 	let newMiddleXPos = ((event.pageX-(width/2))/width)*0.48 * middleCircleXPos;
	// 	let newMiddleYPos = ((event.pageY-(height/2))/height)*0.75 * middleCircleYPos;
	// 	let newMiddleXPosString = (middleCircleXPos + newMiddleXPos).toString() + "px";
	// 	let newMiddleYPosString = (middleCircleYPos + newMiddleYPos).toString() + "px";
	// 	$('.middleCircle').css('left', newMiddleXPosString);
	// 	$('.middleCircle').css('top', newMiddleYPosString);
	//
	// });
	//
	// resetCirclePos();

});
