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
	periodSelect = document.querySelector('.period-select'),

	inputText = document.querySelectorAll('input[type="text"]'),
	checkbox = document.querySelectorAll('input[type="checkbox"]'),
	periodAmount = document.querySelector('.period-amount');

const  AppData = function() {
	this.income = {};
	this.incomeMonth = 0;
	this.addIncome = [];
	this.expenses = {};
	this.addExpenses = [];
	this.deposit = false;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
	this.budget = 0;
	this.budgetDay = 0;
	this.budgetMonth = 0;
	this.expensesMonth = 0;


};

AppData.prototype.start = function () {
		
	this.budget = +salaryAmount.value;

	this.getAddExpenses();
	this.getExpenses();
	this.getIncome();
	this.getAddIncome();
	this.getBudget();
	this.showResult();

	
	inputText.forEach(function (item) {
		item.setAttribute('disabled', 'true');
	});

	checkbox.forEach(function (item) {
		item.setAttribute('disabled', 'true');
	});

	start.style.display = 'none';
	cancel.style.display = 'block';

	console.log(this);
	
};

AppData.prototype.showResult = function () {
	budgetMonthValue.value = this.budgetMonth;
	budgetDayValue.value = this.budgetDay;
	expensesMonthValue.value = this.expensesMonth;
	additionalExpensesValue.value = this.addExpenses.join(', ');
	additionalIncomeValue.value = this.addIncome.join(', ');
	targetMonthValue.value = Math.ceil(this.getTargetMonth());
	incomePeriodValue.value = this.calcSavedMoney();
};

AppData.prototype.addExpensesBlock = function () {

	let cloneExpensesItem = expensesItems[0].cloneNode(true);
	expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plus2);
	expensesItems = document.querySelectorAll('.expenses-items');
	if (expensesItems.length === 3) {
		plus2.style.display = 'none';
	}
};
AppData.prototype.addIncomeBlock = function () {
	let cloneIncomesItem = incomeItems[0].cloneNode(true);
	incomeItems[0].parentNode.insertBefore(cloneIncomesItem, plus1);
	incomeItems = document.querySelectorAll('.income-items');
	if (incomeItems.length === 3) {
		plus1.style.display = 'none';
	}
};
AppData.prototype.getAddExpenses = function () {
	let addExpenses = additionalExpensesItem.value.split(', ');

	addExpenses.forEach(function (item) {
		item = item.trim();
		if (item !== '') {
			this.addExpenses.push(item);
		}
	}, this);

};
AppData.prototype.getExpenses = function () {

	expensesItems.forEach(function (item) {
		let itemExpenses = item.querySelector('.expenses-title').value;
		let cashExpenses = item.querySelector('.expenses-amount').value;
		if (itemExpenses !== '' && cashExpenses !== '') {
			this.expenses[itemExpenses] = cashExpenses;
		}
		this.expensesMonth += +cashExpenses;
	},this);

};
AppData.prototype.getIncome = function () {
	incomeItems.forEach(function (item) {
		let itemIncome = item.querySelector('.income-title').value;
		let cashIncome = item.querySelector('.income-amount').value;
		if (itemIncome !== '' && cashIncome !== '') {
			this.income[itemIncome] = cashIncome;
		}
		this.incomeMonth += +cashIncome;
	}, this);
};

AppData.prototype.getAddIncome = function () {
	additionalIncomeItem.forEach(function (item) {
		let itemValue = item.value.trim();
		if (itemValue !== '') {
			this.addIncome.push(itemValue);
		}
	}, this);
};

AppData.prototype.getInfoDeposit = function () {
	this.deposit = confirm('Есть ли у вас депозит в банке?');
	if (this.deposit) {
		let d = prompt('Какой годовой процент?', 10);
		while (isNaN(d) || d === '' || d === null) {
			d = prompt('Какой годовой процент?', 10);
		}
		this.percentDeposit = d;
		let f = prompt('Какая сумма заложена?', 10000);
		while (isNaN(f) || f === '' || f === null) {
			f = prompt('Какая сумма заложена?', 10000);
		}
		this.moneyDeposit = f;
	}
};

AppData.prototype.calcSavedMoney = function () {

	return this.budgetMonth * periodSelect.value;
};

AppData.prototype.getStatusIncome = function () {

	if (this.budgetDay >= 800) {
		this.getStatusIncome = 'У Вас высокий уровень дохода';
	} else if (this.budgetDay >= 300 && this.budgetDay < 800) {
		this.getStatusIncome = 'У Вас cредний уровень дохода';
	} else if (this.budgetDay >= 0 && this.budgetDay < 300) {
		this.getStatusIncome = 'У Вас низкий уровень дохода';
	} else {
		this.getStatusIncome = 'В Вашей жизни что то пошло не так...';
	}

};

AppData.prototype.getTargetMonth = function () {
	return targetAmount.value / this.budget;
};

AppData.prototype.getBudget = function () {
	this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
	this.budgetDay = Math.floor(this.budget / 30);
};

AppData.prototype.reset = function() {
		
	cancel.style.display = 'none';
	start.style.display = 'block';
	
	inputText.forEach(function (item) {
		item.removeAttribute('disabled', 'true');
		item.value = '';
	});
	
	checkbox.forEach(function (item) {
		item.removeAttribute('disabled', 'true');	
		item.checked = false;		
	});


	budgetMonthValue.value = 0;
	budgetDayValue.value = 0;
	expensesMonthValue.value = 0;
	additionalExpensesValue.value = 'Наименования';
	additionalIncomeValue.value = 'Наименования';
	targetMonthValue.value = 'Срок';
	incomePeriodValue.value = 0;
	periodSelect.value = 1,
	periodAmount.textContent = periodSelect.value;

	this.income = {},
	this.incomeMonth = 0,
	this.addIncome = [],
	this.expenses = {},
	this.addExpenses = [],
	this.deposit = false,
	this.percentDeposit = 0,
	this.moneyDeposit = 0,
	this.budget = '',
	this.budgetDay = 0,
	this.budgetMonth = 0,
	this.expensesMonth = 0
	
	start.setAttribute('disabled', 'true');
	
};
AppData.prototype.eventListener = function() {

	salaryAmount.addEventListener('input', function () {
		if (salaryAmount.value === '' || isNaN(salaryAmount.value)) {
			start.setAttribute('disabled', 'true');
		} else {
			start.removeAttribute('disabled', 'true');
		}
	});
	
	start.addEventListener('click', this.start.bind(appData));
	
	cancel.addEventListener('click', this.reset.bind(appData));
	
	
	plus1.addEventListener('click', this.addIncomeBlock);
	plus2.addEventListener('click', this.addExpensesBlock);
	
	periodSelect.addEventListener('input', function () {
	
		periodAmount.textContent = periodSelect.value;
		incomePeriodValue.value = this.budgetMonth * periodSelect.value;
	});

}; 



const  appData = new AppData();

appData.eventListener();

console.log(appData);



start.setAttribute('disabled', 'true');


