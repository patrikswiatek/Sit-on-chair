document.addEventListener("DOMContentLoaded", function () {
	
	function changeFilters() {
		
		var leftArrow = document.querySelector('.arrow-left'),
			rightArrow = document.querySelector('.arrow-right'),
			body = document.querySelector('body'),
			elements = document.querySelectorAll('body span'),
			classes = elements[9].classList,
			counter = 0;
		
		leftArrow.addEventListener('click', function (e) {
			e.preventDefault();
			counter--;
			if (counter < 0) {
				body.removeAttribute('class', classes[counter - 1]);
				counter = 7;
				body.setAttributee('class', classes[counter]);
			} else {
				body.removeAttribute('class', classes[counter - 1])
				body.setAttribute('class', classes[counter]);
			}
		})
		
		rightArrow.addEventListener('click', function (e) {
			e.preventDefault();
			counter++;
			if (counter > 7) {
				body.removeAttribute('class', classes[counter - 1]);
				counter = 0;
				body.setAttribute('class', classes[counter]);
			} else {
				body.removeAttribute('class', classes[counter - 1])
				body.setAttribute('class', classes[counter]);
			}
		})
	}
	
	changeFilters();
	
	function upandDown() {
		
		var bottom = document.querySelector('.button-slider'),
			up = document.querySelector('.button-contact')
		
		bottom.addEventListener('click', function (e) {
			e.preventDefault();
			self.location = "#bottom";
		})
		up.addEventListener('click', function (e) {
			e.preventDefault();
			self.location = "#up";
		})
	}
	upandDown();
})
	


