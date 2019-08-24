let money = 20000,
	income = '10000',
	addExpenses = 'Школа, 500, 5000, 1000'
	deposit = true,
	mission = 50000,
	period = 6,
	budgetDay = 15700;

console.log(typeof money, typeof income, typeof deposit);
console.log(income.length);
console.log('Период' + ' ' + period + ' ' + 'месяцев');
console.log('Цель заработать' + ' ' + mission + ' ' + 'рублей');
console.log(addExpenses.toLocaleUpperCase()); 
console.log(addExpenses.toLocaleLowerCase()); 
console.log(addExpenses.split(', ')); 
console.log(budgetDay / 30);
console.log(budgetDay % 30);