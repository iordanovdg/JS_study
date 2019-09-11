'use strict';

let contentBox = document.querySelector('.contentBox');

function realTime() {

function countTime() {
	let date = new Date(),
		newYear = new Date('01 januart 2020').getTime() - date.getTime(),
		timeNow = date.toLocaleTimeString('en'),
		week = date.getDay(),
		
		hours = date.getHours(),
		dayToNewYear = Math.floor(newYear / 1000 / 60 / 60 / 24);
		return {hours, dayToNewYear, week, timeNow};
}

function timeToBox() {
	let count = countTime(),
			weekText, hoursText;

	if (6 > count.hours) {
		hoursText = 'Доброй ночи';
	}
	if (6 <= count.hours <= 11) {
		hoursText = 'Доброе утро';
	}
	if (12 <= count.hours < 17) {
		hoursText = 'Добрый день';
	}
	if (18 <= count.hours < 21) {
		hoursText = 'Добрый вечер';
	} else {
		hoursText = 'Доброй ночи';
	}

	if (count.week === 0) {
		weekText = 'Воскресенье';
	} else if (count.week === 1) {
		weekText = 'Понедельник';
	} else if (count.week === 2) {
		weekText = 'Вторник';
	} else if (count.week === 3) {
		weekText = 'Среда';
	} else if (count.week === 4) {
		weekText = 'Четверг';
	} else if (count.week === 5) {
		weekText = 'Пятница';
	} else {
		weekText = 'Суббота';
	}
	return { hoursText, weekText};
}
contentBox.style.cssText = 'width: 100%; height: 100vh; display: flex;justify-content: center; align-items: center; flex-direction: column;';
contentBox.innerHTML =
	`<div> ${timeToBox().hoursText}</div>
	<div> Сегодня: ${timeToBox().weekText}</div>
	<div> Текущее время: ${countTime().timeNow}</div>
	<div> До нового года осталось: ${countTime().dayToNewYear} дней</div>`;
}



setInterval(realTime, 1000);




