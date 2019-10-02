const sendForm = () => {

	const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
		successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 2rem;';

	const validInput = () => {

		document.addEventListener('input', (event) => {
			const inputPhone = document.querySelectorAll('.form-phone'),
				formName = document.querySelectorAll('input[name="user_name"]'),
				messInput = document.querySelectorAll('input[name="user_message"]');

			inputPhone.forEach((elem) => {
				elem.value = elem.value.replace(/[^0-9+]/g, '');
			});

			formName.forEach((elem) => {
				elem.value = elem.value.replace(/[^а-яё\s]/g, '');
			});

			messInput.forEach((elem) => {
				elem.value = elem.value.replace(/[^а-яё\s]/g, '');
			});

		});

	};
	validInput();

	document.addEventListener('submit', (event) => {
		event.preventDefault();
		let target = event.target;
		statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';
		target.appendChild(statusMessage);
		statusMessage.textContent = loadMessage;
		const formData = new FormData(target);
		let body = {};

		formData.forEach((val, key) => {
			body[key] = val;
		});
		target.reset();

		postData(body)

			.then((response) => {
				if (response.status !== 200) {
					throw new Error('статус ответа не равен 200');
				}
				statusMessage.textContent = successMessage;
			})
			.catch((error) => {
				statusMessage.textContent = errorMessage;
				console.error(error);
			});


		const popUpClose = () => {
			const popup = document.querySelector('.popup');
			popup.style.display = 'none';
		};
		setTimeout(popUpClose, 2000);
	});


	const postData = (body) => {
		return fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'aplication/json',
			},
			body: JSON.stringify(body)
		});


	};


};

export default sendForm;