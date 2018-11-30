// document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;


function autoSlider (){
	timer = setTimeout(function (){
		var polosa = document.getElementById('polosa');
		left = left - 1400;
		if (left <= -2800) {
			left = 0;
			clearTimeout(timer);
		}
		polosa.style.left = left +'px';
		autoSlider ();
	}, 10000);
}

