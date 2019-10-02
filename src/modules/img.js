const img = () => {
	let comand = document.querySelector('.command');

	comand.addEventListener('mouseover', (event) => {

		let target = event.target;

		target.dataset.src = target.src;
		target.src = target.dataset.img;

	});

	comand.addEventListener('mouseout', (event) => {
		let target = event.target;

		target.src = target.dataset.src;

	});

};

export default img;