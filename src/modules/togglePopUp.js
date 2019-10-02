const togglePopUp = () => {
	const popup = document.querySelector('.popup'),
		popupBtn = document.querySelectorAll('.popup-btn'),
		serviceBlock = document.querySelector('.service');

	let count = 0,
		modal,
		popupContent = document.querySelector('.popup-content');

	let getWidth = window.onresize = () => {
		let width = window.innerWidth;
		return width;
	};


	let popupAnimate = () => {
		let width = getWidth();
		modal = requestAnimationFrame(popupAnimate);
		count++;
		if (width < 767) {
			modal = false;
		} else if (count < 50) {
			popupContent.style.top = count * 3 + 'px';
		} else {
			cancelAnimationFrame(modal);
			count = 0;
		}
	};

	serviceBlock.addEventListener('click', (event) => {
		let target = event.target;
		
		if(target.matches('.popup-btn')) {
			popup.style.display = 'block';
			popupAnimate();
		}
	});





	popup.addEventListener('click', (event) => {

		let target = event.target;

		if (target.classList.contains('popup-close')) {
			popup.style.display = 'none';
		} else {
			target = target.closest('.popup-content');

			if (!target) {
				popup.style.display = 'none';
			}
		}



	});

};


export default togglePopUp;