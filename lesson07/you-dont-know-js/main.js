'use strict';

let book = document.querySelectorAll('.book'),
		books = document.querySelector('.books'),
		body = document.getElementsByTagName('body')[0],
		addClass = book[4].classList.add('title-change'),
		title = document.querySelector('.title-change h2 a'),
		baner = document.querySelector('.adv');
		

		
		body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');
		books.appendChild(book[2]);
		books.insertBefore(book[1], book[0]);
		books.insertBefore(book[3], book[2]);
		title.textContent = 'Книга 3. this и Прототипы Объектов';
		baner.classList.remove('adv');

		book[0].classList.add('chapter2');
		book[5].classList.add('chapter5');
		book[2].classList.add('newElement');

		let chapter2 = document.querySelectorAll('.chapter2 ul li'),
				UlChapter2 = document.querySelector('.chapter2 ul'),
				chapter5 = document.querySelectorAll('.chapter5 ul li'),
				UlChapter5 = document.querySelector('.chapter5 ul');
				
				UlChapter2.insertBefore(chapter2[6], chapter2[4]);
				UlChapter2.insertBefore(chapter2[8], chapter2[4]);
				UlChapter2.insertBefore(chapter2[2], chapter2[10]);

				UlChapter5.insertBefore(chapter5[2], chapter5[6]);
				UlChapter5.insertBefore(chapter5[9], chapter5[3]);
				UlChapter5.insertBefore(chapter5[5], chapter5[8]);


let newElement = document.createElement('li');
newElement.textContent = 'Глава 8: За пределами ES6';

let UlNewElement = document.querySelector('.newElement ul');
UlNewElement.appendChild(newElement);

let LiNewelement = document.querySelectorAll('.newElement ul li');

UlNewElement.insertBefore(LiNewelement[10], LiNewelement[9]);