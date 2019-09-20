document.addEventListener('DOMContentLoaded', () => {
	'use strict';

	// Timer
	const countTimer = (deadline) => {
		let timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');

		const getTimeRemaining = () => {
			let dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor((timeRemaining / 60 / 60) % 24),
				day = Math.floor(timeRemaining / 60 / 60 / 24);
			return {
				day,
				hours,
				minutes,
				seconds,
				timeRemaining
			};
		};

		const timeEdit = (elem) => {
			if (elem < 10) {
				return '0' + elem;
			} else {
				return elem;
			}

		};
		const updateClock = () => {
			let timeRemaining = getTimeRemaining();
			timerHours.textContent = timeEdit(timeRemaining.hours);
			timerMinutes.textContent = timeEdit(timeRemaining.minutes);
			timerSeconds.textContent = timeEdit(timeRemaining.seconds);

			if (getTimeRemaining().timeRemaining <= 0) {
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
				clearInterval(updateClock);
			}
		};
		updateClock();
		setInterval(updateClock, 1000);
	};

	countTimer('31 december 2019');


	// Menu
	const toggleMenu = () => {
		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeBtn = document.querySelector('.close-btn'),
			menuItems = menu.querySelectorAll('ul > li');

		const handlerMenu = () => {
			// Var 1
			// if (!menu.style.transform || menu.style.transform === `translate(-100%)` ) {
			// 	menu.style.transform = `translate(0)` ;
			// } else {
			// 	menu.style.transform = `translate(-100%)`;
			// }

			// Var 2
			menu.classList.toggle('active-menu');
		};

		document.addEventListener('click', (event) => {
			let target = event.target,
				menuBtn = target.closest('.menu'),
				menuClose = target.closest('.active-menu');

			if (menuBtn) {
				handlerMenu();
			} else if (target.classList.contains('close-btn') || target.matches('li > a') || !menuClose) {
				menu.classList.remove('active-menu');

			}
		});
	};

	toggleMenu();



	// popup
	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
			popupBtn = document.querySelectorAll('.popup-btn');

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

		popupBtn.forEach((elem) => {
			elem.addEventListener('click', () => {
				popup.style.display = 'block';
				popupAnimate();
			});
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

	togglePopUp();




	// Табы
	const tabs = () => {

		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');

		const toggleTabContent = (index) => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');

				} else {
					tabContent[i].classList.add('d-none');
					tab[i].classList.remove('active');
				}
			}
		};
		tabHeader.addEventListener('click', (event) => {
			let target = event.target;

			target = target.closest('.service-header-tab');

			if (target) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}
		});

	};

	tabs();


	// Слайдер

	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
			btn = document.querySelectorAll('.portfolio-btn'),
			dotWrap = document.querySelector('.portfolio-dots'),		
			slider = document.querySelector('.portfolio-content');
		console.log(slide);

		// Добавляем дотсы по количеству слайдов
		const addDots = () => {
			for(let i = 0; i < slide.length; i++) {
			let	newDot = document.createElement("li");
			newDot.classList.add('dot');		
			dotWrap.appendChild(newDot);
			}			
		};
		addDots();

		let dot = document.querySelectorAll('.dot');
		dot[0].classList.add('dot-active');
		

		let currentSlide = 0,
			interval;

		const prevSlide = (elem, index, strClass) => {
			elem[index].classList.remove(strClass);
		};

		const nextSlide = (elem, index, strClass) => {
			elem[index].classList.add(strClass);
		};

		const autoPlaySlide = () => {

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');
			currentSlide++;
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');
		};

		const startSlide = (time = 3000) => {
			interval = setInterval(autoPlaySlide, time);
		};


		const stopSlide = () => {
			clearInterval(interval);
		};

		slider.addEventListener('click', (event) => {
			event.preventDefault();
			let target = event.target;

			if (!target.matches('.portfolio-btn, .dot')) {
				return;
			}

			prevSlide(slide, currentSlide, 'portfolio-item-active');
			prevSlide(dot, currentSlide, 'dot-active');

			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dot.forEach((elem, index) => {
					if (elem === target) {
						currentSlide = index;
					}
				});
			}
			if (currentSlide >= slide.length) {
				currentSlide = 0;
			}

			if (currentSlide < 0) {
				currentSlide = slide.length - 1;
			}
			nextSlide(slide, currentSlide, 'portfolio-item-active');
			nextSlide(dot, currentSlide, 'dot-active');

		});

		slider.addEventListener('mouseover', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				stopSlide();
			}
		});

		slider.addEventListener('mouseout', (event) => {
			if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
				startSlide();
			}
		});
		startSlide();
	};

	slider();

});