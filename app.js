$(document).ready(function() {

	var frontCircleXPos;
	var frontCircleYPos;
	var middleCircleXPos;
	var middleCircleYPos;
	var width;
	var height;

	$(window).resize(function() {
		resetCirclePos();
	});

	function resetCirclePos() {
		$('.middleCircle').css({
			'left': '30vw',
			'top': '10vw'
		});
		$('.frontCircle').css({
			'left': '25vw',
			'top': '5vw'
		});
		frontCircleXPos = Number($('.frontCircle').css("left").substring(0,$('.frontCircle').css("left").length-2));
		frontCircleYPos = Number($('.frontCircle').css("top").substring(0,$('.frontCircle').css("top").length-2));
		middleCircleXPos = Number($('.middleCircle').css("left").substring(0,$('.middleCircle').css("left").length-2));
		middleCircleYPos = Number($('.middleCircle').css("top").substring(0,$('.middleCircle').css("top").length-2));
		width = $(window).width();
		height = $(window).height();
	}
	$(document).mousemove(function(event) {
		let newFrontXPos = ((event.pageX-(width/2))/width)*1.2 * frontCircleXPos;
		let newFrontYPos = ((event.pageY-(height/2))/height)*3 * frontCircleYPos;
		let newFrontXPosString = (frontCircleXPos + newFrontXPos).toString() + "px";
		let newFrontYPosString = (frontCircleYPos + newFrontYPos).toString() + "px";
		$('.frontCircle').css('left', newFrontXPosString);
		$('.frontCircle').css('top', newFrontYPosString);
		let newMiddleXPos = ((event.pageX-(width/2))/width)*.48 * middleCircleXPos;
		let newMiddleYPos = ((event.pageY-(height/2))/height)*.75 * middleCircleYPos;
		let newMiddleXPosString = (middleCircleXPos + newMiddleXPos).toString() + "px";
		let newMiddleYPosString = (middleCircleYPos + newMiddleYPos).toString() + "px";
		$('.middleCircle').css('left', newMiddleXPosString);
		$('.middleCircle').css('top', newMiddleYPosString);

	});

	resetCirclePos();

});
