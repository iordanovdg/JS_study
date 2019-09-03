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
		

