window.addEventListener('DOMContentLoaded', () => {
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
			return { day, hours, minutes, seconds, timeRemaining };
		}

		const timeEdit = (elem) => {			
			if(elem < 10) {
				return '0' + elem;
			} else {
				return elem;
			}
		
		}
		const updateClock = () => {
			let timeRemaining = getTimeRemaining();
			timerHours.textContent = timeEdit(timeRemaining.hours);
			timerMinutes.textContent = timeEdit(timeRemaining.minutes);
			timerSeconds.textContent = timeEdit(timeRemaining.seconds);
			
		 if(timer.timeRemaining <= 0){
				timerHours.textContent = '00';
				timerMinutes.textContent = '00';
				timerSeconds.textContent = '00';
				clearInterval(updateClock);
				}	
		}
		updateClock();
		setInterval(updateClock, 1000);
	};

	countTimer('15 september 2019');

});