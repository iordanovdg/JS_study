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


export default toggleMenu;