'use strict';

const start = document.getElementById('start'),
	cancel = document.getElementById('cancel'),
	plus1 = document.querySelector('.income_add'),
	plus2 = document.querySelector('.expenses_add'),

	periodAmount = document.querySelector('.period-amount'),
	depositBank = document.querySelector('.deposit-bank'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent'),
	budgetMonthValue = document.querySelector('.budget_month-value'),
	budgetDayValue = document.querySelector('.budget_day-value'),
	expensesMonthValue = document.querySelector('.expenses_month-value'),
	additionalIncomeValue = document.querySelector('.additional_income-value'),
	additionalExpensesValue = document.querySelector('.additional_expenses-value'),
	incomePeriodValue = document.querySelector('.income_period-value'),
	targetMonthValue = document.querySelector('.target_month-value'),
	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelector('.income-title'),
	expensesTitle = document.querySelector('.expenses-title'),
	expensesAmount = document.querySelector('.expenses-amount'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	depositCheck = document.getElementById('deposit-check'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select'),
	depositСheck = document.querySelector('#deposit-check');

let additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	expensesItems = document.querySelectorAll('.expenses-items'),
	incomeItems = document.querySelectorAll('.income-items');
	




class AppData {
	constructor() {
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
	}

	start() {

		this.budget = +salaryAmount.value;
		
	
		this.getExpenses();
		this.getIncome();
		this.getExpInc('addExpenses', true);
		this.getExpInc('addIncome', false);
		this.getInfoDeposit();
		this.getBudget();
		this.showResult();
		
		let inputText = document.querySelectorAll('input[type="text"]');
		inputText.forEach((item) => {
			item.setAttribute('disabled', 'true');
		});

		let checkbox = document.querySelectorAll('input[type="checkbox"]');
		checkbox.forEach((item) => {
			item.setAttribute('disabled', 'true');
		});

		depositBank.setAttribute('disabled', 'true');

		start.style.display = 'none';
		cancel.style.display = 'block';

		console.log(this);
	}

	showResult() {
		budgetMonthValue.value = this.budgetMonth;
		budgetDayValue.value = this.budgetDay;
		expensesMonthValue.value = this.expensesMonth;
		additionalExpensesValue.value = this.addExpenses.join(', ');
		additionalIncomeValue.value = this.addIncome.join(', ');
		targetMonthValue.value = Math.ceil(this.getTargetMonth());
		incomePeriodValue.value = this.calcSavedMoney();
	}

	addExpIncBlock(elemClone, elemButton, elemSelector) {
		let cloneItem = elemClone.cloneNode(true);

		elemClone.parentNode.insertBefore(cloneItem, elemButton);
		let elements = document.querySelectorAll(elemSelector);
		cloneItem.querySelectorAll('input').forEach((item) => {
			item.value = '';
		});
		if (elements.length === 3) {
			elemButton.style.display = 'none';
		}
	}

	getExpInc = function (place, expenses) {
		let textExpenses;

		if (expenses) {
			textExpenses = additionalExpensesItem.value.split(', ');
		} else {
			textExpenses = additionalIncomeItem;
		}
		textExpenses.forEach((item) => {
			let itemValue = (expenses) ? item.trim() : item.value.trim();
			if (itemValue !== '') {
				this[place].push(itemValue);
			}
		});
	}

	getExpenses() {

		expensesItems.forEach((item) => {
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;
			if (itemExpenses !== '' && cashExpenses !== '') {
				this.expenses[itemExpenses] = cashExpenses;
			}
			this.expensesMonth += +cashExpenses;
		}, this);
	}

	getIncome() {
		incomeItems.forEach((item) => {
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;
			if (itemIncome !== '' && cashIncome !== '') {
				this.income[itemIncome] = cashIncome;
			}
			this.incomeMonth += +cashIncome;
		}, this);
	}

	getInfoDeposit() {

		if (this.deposit) {
			this.percentDeposit = depositPercent.value;
			this.moneyDeposit = depositAmount.value;
		}
	}

	calcSavedMoney() {

		return this.budgetMonth * periodSelect.value;
	}


	getTargetMonth() {
		return targetAmount.value / this.budget;
	}

	getBudget() {
		this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth + (this.moneyDeposit * this.percentDeposit) / 12;
		this.budgetDay = Math.floor(this.budget / 30);
	}

	reset() {
		let checkbox = document.querySelectorAll('input[type="checkbox"]'),
				inputText = document.querySelectorAll('input[type="text"]');
				
		cancel.style.display = 'none';
		start.style.display = 'block';

		inputText.forEach((item) => {
			item.removeAttribute('disabled', 'true');
			item.value = '';
		});

		checkbox.forEach((item) => {
			item.removeAttribute('disabled', 'true');
			item.checked = false;
		});

		depositBank.removeAttribute('disabled', 'true');
		depositBank.value = 0;
		budgetMonthValue.value = 0;
		budgetDayValue.value = 0;
		expensesMonthValue.value = 0;
		additionalExpensesValue.value = 'Наименования';
		additionalIncomeValue.value = 'Наименования';
		targetMonthValue.value = 'Срок';
		incomePeriodValue.value = 0;
		periodSelect.value = 1;
		periodAmount.textContent = periodSelect.value;

		this.income = {};
		this.incomeMonth = 0;
		this.addIncome = [];
		this.expenses = {};
		this.addExpenses = [];
		this.deposit = false;
		this.percentDeposit = 0;
		this.moneyDeposit = 0;
		this.budget = '';
		this.budgetDay = 0;
		this.budgetMonth = 0;
		this.expensesMonth = 0;

		start.setAttribute('disabled', 'true');

	}

	eventListener() {

		salaryAmount.addEventListener('input', () => {
			if (salaryAmount.value === '' || isNaN(salaryAmount.value)) {
				start.setAttribute('disabled', 'true');
			} else {
				start.removeAttribute('disabled', 'true');
			}
		});

		start.addEventListener('click', this.start.bind(appData));

		cancel.addEventListener('click', this.reset.bind(appData));

		plus1.addEventListener('click', this.addExpIncBlock.bind(appData, incomeItems[0], plus1, '.income-items'));
		plus2.addEventListener('click', this.addExpIncBlock.bind(appData, expensesItems[0], plus2, '.expenses-items'));


		periodSelect.addEventListener('input', () => {

			periodAmount.textContent = periodSelect.value;
			incomePeriodValue.value = this.budgetMonth * periodSelect.value;
		});

		depositCheck.addEventListener('change', () => {

			if (depositCheck.checked) {
				depositBank.style.display = 'inline-block';
				depositAmount.style.display = 'inline-block';
				appData.deposit = 'true';
				depositBank.addEventListener('change', () => {
					let selectIndex = this.options[this.selectedIndex].value;
					if (selectIndex === 'other') {
						depositPercent.style.display = 'inline-block';
						depositPercent.value = '';
					} else {
						depositPercent.style.display = 'none';
						depositPercent.value = selectIndex;
					}
					console.log(selectIndex);
				});
			} else {
				depositBank.style.display = 'none';
				depositAmount.style.display = 'none';
				depositAmount.value = '';
				appData.deposit = 'false';
			}
		});

	}


};



const appData = new AppData();

appData.eventListener();

console.log(appData);



start.setAttribute('disabled', 'true');