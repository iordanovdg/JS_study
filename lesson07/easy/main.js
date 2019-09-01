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
	percentDeposit: 0,
	moneyDeposit: 0,
	mission: 50000,
	budget: money,
	period: 3,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	getTargetMonth: 0,
	asking: function () {

		if (confirm('Есть ли доп заработок?')) {
			let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
			while (!isNaN(itemIncome) || itemIncome === null) {
			 itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
			}
			
			let cashIncome = prompt('Какую сумму вы зарабатываете?', 10000);
			while (isNaN(cashIncome) || cashIncome === '' || cashIncome === null) {
			 cashIncome = prompt('Какую сумму вы зарабатываете?', 10000);
			}
			
			appData.income[itemIncome] = cashIncome;
		}
		

		appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(', ');
		
		function line(){
			let myarr = [];
			let m;
			
			for (let item of appData.addExpenses ) {
				let h =	item[0].toUpperCase() + item.slice(1);			
				myarr.push(h);				
			}
			m = myarr.join(', ');
			console.log(m);
		}
		
		line();
		
		
		

		appData.deposit = confirm('Есть ли у вас депозит в банке?');

		let x;
		for (let i = 0; i < 2; i++) {
			if (i === 0) {
				let a = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'бензин');
				while (!isNaN(a) || a === null) {
				a = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'бензин');				
				}
				appData.expenses.expenses1 = a.toLocaleUpperCase();
			}
			if (i === 1) {
				let c = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'телефон');
				while (!isNaN(c) || c === null) {
				 c = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'телефон');
				}
				appData.expenses.expenses2 = c.toLocaleUpperCase();
			}
			do {
				x = prompt('Во сколько тебе обойдется', '2500');
			}
			while (isNaN(x) || x === '' || x === null)
			appData.expensesMonth += +x
		}
	},
	getInfoDeposit: function () {
		if (appData.deposit) {
			let	d = prompt('Какой годовой процент?', 10);
			while (isNaN(d) || d === '' || d === null) {
				d = prompt('Какой годовой процент?', 10);
			}
			appData.percentDeposit = d;
			let f = prompt('Какая сумма заложена?', 10000);
			while (isNaN(f) || f === '' || f === null) {
				f = prompt('Какая сумма заложена?', 10000);
			}			
			appData.moneyDeposit = f;
		}
	},
	calcSavedMoney: function () {
		return appData.budgetMonth * appData.period;
	}

}
appData.asking();
appData.calcSavedMoney();
appData.getInfoDeposit();

console.log(appData.calcSavedMoney);
console.log(appData.getInfoDeposit);
console.log(appData.percentDeposit);
console.log(appData.moneyDeposit);

console.log(appData);



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



appData.budgetMonth = appData.budget - appData.expensesMonth;

appData.getTargetMonth = Math.ceil(appData.mission / appData.budget);



if (appData.budgetMonth < 0) {
	alert('Цель не будет достигнута');

} else {
	alert('До цели вам нужно копить ' + appData.budgetMonth + ' месяца(ев)');
}


appData.budgetDay = Math.floor(appData.budget / 30);

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