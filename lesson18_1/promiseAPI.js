'use strict';

const output = document.getElementById('output');


// Вариант без Promise


// const getData = (url, outputData) => {

// 	const request = new XMLHttpRequest();

// 	request.open('GET', url);
// 	request.addEventListener('readystatechange', () => {
// 		if (request.readyState !== 4) {
// 			return;
// 		}
// 		if (request.status === 200) {
// 			const response = JSON.parse(request.responseText);
// 			outputData(response);

// 		} else {

// 			console.error(request.statusText);
// 		}
// 	});

// 	request.send();
// };

// const outputPhotos = (data) => {
// 	const random = Math.floor(Math.random() * data.length);
// 	const obj = data[random];
// 	output.innerHTML = `<h2>${obj.title}</h2>
// 											<img src="${obj.url}" alt="${obj.title}">`;
// };

// const urlPhoto = 'https://jsonplaceholder.typicode.com/photos';

// getData(urlPhoto, outputPhotos);


// Вариант с Promise


const getData = (url) => {

	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest();

		request.open('GET', url);
		request.addEventListener('readystatechange', () => {
			if (request.readyState !== 4) {
				return;
			}
			if (request.status === 200) {
				const response = JSON.parse(request.responseText);
				resolve(response);
	
			} else {
	
				reject(request.statusText);
			}
		});
	
		request.send();
		
	});
	
};

const outputPhotos = (data) => {
	data.forEach((item) => {
		output.insertAdjacentHTML('beforebegin',
		`<h3>${item.title}</h3>
		<img src="${item.thumbnailUrl}" alt="${item.title}">`);
	});
	
};

const urlPhoto = 'https://jsonplaceholder.typicode.com/photos';

const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1'),
			twoImg = getData('https://jsonplaceholder.typicode.com/photos/2');

// getData(urlPhoto)
// 	.then(outputPhotos)
// 	.catch(error => console.error(error));

Promise.all([oneImg, twoImg])
.then(outputPhotos)
.catch(error => console.log(error));