const calc = (price = 100) => {

	const calcBlock = document.querySelector('.calc-block'),
		calcType = document.querySelector('.calc-type'),
		calcSquare = document.querySelector('.calc-square'),
		calcDay = document.querySelector('.calc-day'),
		calcCount = document.querySelector('.calc-count'),
		totalValue = document.getElementById('total'),
		calcBlockInput = calcBlock.querySelectorAll('input');

	const countSum = () => {
		let total = 0,
			countValue = 1,
			dayValue = 1;
		const typeValue = calcType.options[calcType.selectedIndex].value,
			squareValue = +calcSquare.value;

		if (calcCount.value > 1) {
			countValue += (calcCount.value - 1) / 10;
		}

		if (calcDay.value && calcDay.value < 5) {
			dayValue *= 2;
		} else if (calcDay.value && calcDay.value < 10) {
			dayValue *= 1.5;
		}


		if (typeValue && squareValue) {
			total = price * typeValue * squareValue * countValue * dayValue;
		}


		totalValue.textContent = total;
	};

	calcBlock.addEventListener('change', (event) => {
		let target = event.target;

		// var1

		// if(target === calcDay || target ===  calcType || target === calcSquare || target ===  calcCount) {
		// 	console.log(1);
		// }

		// var 2
		if (target.matches('select') || target.matches('input')) {

			calcBlockInput.forEach((elem) => {
				// console.log(elem);
				elem.value = elem.value.replace(/\D/g, '');
				console.log(elem.value);
			});
			countSum();
		}
	});

};

export default calc;