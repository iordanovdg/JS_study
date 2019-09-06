'use strict';

let start = document.getElementById('start'),
	cancel = document.getElementById('cancel'),
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
	expensesItems = document.querySelectorAll('.expenses-items'),
	targetAmount = document.querySelector('.target-amount'),
	incomeItems = document.querySelectorAll('.income-items'),
	periodSelect = document.querySelector('.period-select');


let expenses1,
	expenses2;



let appData = {
	income: {},
	incomeMonth: 0,
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	budget: 0,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	getTargetMonth: 0,
	start: function () {

		appData.budget = +salaryAmount.value;

		appData.getAddExpenses();
		appData.getExpenses();
		appData.getIncome();
		appData.getAddIncome();
		appData.getBudget();
		appData.showResult();

		let inputText = document.querySelectorAll('input[type="text"]');
		inputText.forEach(function (item) {
			item.setAttribute('disabled', 'true');
		});
		start.style.display = 'none';
		cancel.style.display = 'block';

		console.log(appData);
	},

	showResult: function () {
		budgetMonthValue.value = appData.budgetMonth;
		budgetDayValue.value = appData.budgetDay;
		expensesMonthValue.value = appData.expensesMonth;
		additionalExpensesValue.value = appData.addExpenses.join(', ');
		additionalIncomeValue.value = appData.addIncome.join(', ');
		targetMonthValue.value = Math.ceil(appData.getTargetMonth());
		incomePeriodValue.value = appData.calcSavedMoney();
	},

	addExpensesBlock: function () {

		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plus2);
		expensesItems = document.querySelectorAll('.expenses-items');
		if (expensesItems.length === 3) {
			plus2.style.display = 'none';
		}
	},
	addIncomeBlock: function () {
		let cloneIncomesItem = incomeItems[0].cloneNode(true);
		incomeItems[0].parentNode.insertBefore(cloneIncomesItem, plus1);
		incomeItems = document.querySelectorAll('.income-items');
		if (incomeItems.length === 3) {
			plus1.style.display = 'none';
		}
	},
	getAddExpenses: function () {
		let addExpenses = additionalExpensesItem.value.split(', ');

		addExpenses.forEach(function (item) {
			item = item.trim();
			if (item !== '') {
				appData.addExpenses.push(item);
			}
		});

	},
	getExpenses: function () {

		expensesItems.forEach(function (item) {
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;
			if (itemExpenses !== '' && cashExpenses !== '') {
				appData.expenses[itemExpenses] = cashExpenses;
			}
			appData.expensesMonth += +cashExpenses;
		});

	},
	getIncome: function () {
		incomeItems.forEach(function (item) {
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;
			if (itemIncome !== '' && cashIncome !== '') {
				appData.income[itemIncome] = cashIncome;
			}
			appData.incomeMonth += +cashIncome;
		});
	},

	getAddIncome: function () {
		additionalIncomeItem.forEach(function (item) {
			let itemValue = item.value.trim();
			if (itemValue !== '') {
				appData.addIncome.push(itemValue);
			}
		});
	},


	asking: function () {




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

		return appData.budgetMonth * periodSelect.value;
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
		return targetAmount.value / appData.budget;
	},

	getBudget: function () {
		appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
		appData.budgetDay = Math.floor(appData.budget / 30);
	},
}
// appData END
start.setAttribute('disabled', 'true');

salaryAmount.addEventListener('input', function () {
	if (salaryAmount.value === '' || isNaN(salaryAmount.value)) {
		start.setAttribute('disabled', 'true');
	} else {
		start.removeAttribute('disabled', 'true');
	}
});

start.addEventListener('click', appData.start);






plus1.addEventListener('click', appData.addIncomeBlock);
plus2.addEventListener('click', appData.addExpensesBlock);

periodSelect.addEventListener('input', function () {
	let periodAmount = document.querySelector('.period-amount');
	periodAmount.textContent = periodSelect.value;
});