'use strict';


let money,
		expenses1,
		expenses2;

let start = function () {
	// money = prompt('Ваш месячный доход?', 50000);

	// while(isNaN(money) || money === '' || money === null) {
	// 	money = prompt('Ваш месячный доход?', 50000);
	// }

	do {
		money = prompt('Ваш месячный доход?', 50000);
	}
	while (isNaN(money) || money === '' || money === null);

}

start();

let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	mission: 50000,
	budget: money,
	period: 3,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	getTargetMonth: 0,
	asking: function () {
		appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(', ');
		appData.deposit = confirm('Есть ли у вас депозит в банке?');
		
		let x;
		for (let i = 0; i < 2; i++) {
			if (i === 0) {
				appData.expenses.expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'бензин').toLocaleUpperCase();
			}
			if (i === 1) {
				appData.expenses.expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'телефон').toLocaleUpperCase();
			}
			do {
				x = prompt('Во сколько тебе обойдется', '2500');
			}
			while (isNaN(x) || x === '' || x === null)
			appData.expensesMonth	+= +x
		}
	},
	getBudget: function () {
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budget / 30);
	},
	getTargetMonth: function () {
		appData.getTargetMonth = Math.ceil(appData.mission / appData.budget);
	},

}
appData.asking();





// function getExpensesMonth() {
// 	let sum = 0;
// 	let x;
// 	for (let i = 0; i < 2; i++) {
// 		if (i === 0) {
// 			appData.expenses.expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'бензин').toLocaleUpperCase();
// 		}
// 		if (i === 1) {
// 			appData.expenses.expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'телефон').toLocaleUpperCase();
// 		}
// 		do {
// 			x = prompt('Во сколько тебе обойдется', '2500');
// 		}
// 		while (isNaN(x) || x === '' || x === null)
// 		sum += +x
// 	}

// 	return sum;
// }









if (appData.budgetMonth < 0) {
	alert('Цель не будет достигнута');

} else {
	alert('До цели вам нужно копить ' + appData.budgetMonth + ' месяца(ев)');
}




if (appData.budgetDay < 0) {
	alert('Что-то пошло не так');
} else {
	alert('Поэтому бюджет в день, должен быть не более ' + appData.budgetDay);
}


if (appData.budgetDay >= 800) {
	appData.getStatusIncome = 'У Вас высокий уровень дохода';
} else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
	appData.getStatusIncome = 'У Вас cредний уровень дохода';
} else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
	appData.getStatusIncome = 'У Вас низкий уровень дохода';
} else {
	appData.getStatusIncome = 'В Вашей жизни что то пошло не так...';
}

console.log(appData.expensesMonth);
console.log(appData.getTargetMonth);
console.log(appData.getStatusIncome);

for (let key in appData) {
	console.log('Наша программа включает в себя данные - ' + key + ': ' + appData[key]);
}

