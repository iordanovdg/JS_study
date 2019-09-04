'use strict';

let start = document.getElementById('start'),
	plus1 = document.getElementsByTagName('button')[0],
	plus2 = document.getElementsByTagName('button')[1],

	budgetMonthValue = document.querySelector('.budget_month-value'),
	budgetDayValue = document.querySelector('.budget_day-value'),
	expensesMonthValue = document.querySelector('.expenses_month-value'),
	additionalIncomeValue = document.querySelector('.additional_income-value'),
	additionalExpensesValue = document.querySelector('.additional_expenses-value'),
	incomePeriodValue = document.querySelector('.income_period-value'),
	targetMonthValue = document.querySelector('.target_month-value'),

	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelector('.income-title'),
	additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	expensesTitle = document.querySelector('.expenses-title'),
	expensesAmount = document.querySelector('.expenses-amount'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	depositCheck = document.getElementById('deposit-check'),

	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select');


let expenses1,
		expenses2;



let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	mission: 50000,
	budget: 0,
	period: 3,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	getTargetMonth: 0,
	start: function () {
		
		if	(salaryAmount.value === ''){
			alert('Ошибка, поле "месячный доход" заполнено!');
		}
		

		appData.budget = salaryAmount.value;

		console.log(appData.budget);

		// appData.asking();
		// appData.calcSavedMoney();
		// appData.getInfoDeposit();
		// appData.getExpensesMonth();
		// appData.getStatusIncome();
		// appData.getTargetMonth();
		// appData.getBudget();


	},
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

		function line() {
			let myarr = [];
			let m;

			for (let item of appData.addExpenses) {
				let h = item[0].toUpperCase() + item.slice(1);
				myarr.push(h);
			}
			m = myarr.join(', ');
			console.log(m);
		}

		line();

	},
	getExpensesMonth: function () {
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
		appData.deposit = confirm('Есть ли у вас депозит в банке?');
		if (appData.deposit) {
			let d = prompt('Какой годовой процент?', 10);
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
	},

	getStatusIncome: function () {
		if (appData.budgetDay >= 800) {
			appData.getStatusIncome = 'У Вас высокий уровень дохода';
		} else if (appData.budgetDay >= 300 && appData.budgetDay < 800) {
			appData.getStatusIncome = 'У Вас cредний уровень дохода';
		} else if (appData.budgetDay >= 0 && appData.budgetDay < 300) {
			appData.getStatusIncome = 'У Вас низкий уровень дохода';
		} else {
			appData.getStatusIncome = 'В Вашей жизни что то пошло не так...';
		}
		
	},
	getTargetMonth: function () {
		appData.getTargetMonth = Math.ceil(appData.mission / appData.budget);
	},
	getBudget: function () {
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budget / 30);
	},
}
// appData END

start.addEventListener('click', appData.start);








// if (appData.budgetMonth < 0) {
// 	alert('Цель не будет достигнута');

// } else {
// 	alert('До цели вам нужно копить ' + appData.budgetMonth + ' месяца(ев)');
// }




// if (appData.budgetDay < 0) {
// 	alert('Что-то пошло не так');
// } else {
// 	alert('Поэтому бюджет в день, должен быть не более ' + appData.budgetDay);
// }