'use strict';

let income = '10000',
	mission = 50000,
	budgetDay,
	period = 6;
// Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money;

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

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(', ');

// Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные 
// в переменной deposit (булевое значение true/false)

let deposit = confirm('Есть ли у вас депозит в банке?');

// Вывести в консоль типы данных money, addExpenses, deposit
console.log(typeof money, typeof income, typeof deposit);



let expenses1,
		expenses2;

function getExpensesMonth() {
	let sum = 0;
	let x;
		for (let i = 0; i < 2; i++) {
			if (i === 0) {
				expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'бензин').toLocaleUpperCase();
			}
			if (i === 1) {
				expenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'телефон').toLocaleUpperCase();
			}
			do {
			x = prompt('Во сколько тебе обойдется', '2500');
			}
			while (isNaN(x) || x === '' || x === null)
			sum += +x
		}

	return  sum;
}


let expensesAmount = getExpensesMonth();

console.log(expensesAmount);

function getAccumulatedMonth() {
	return money;
}

let accumulatedMonth = getAccumulatedMonth() - expensesAmount;


// Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель 
// mission, вывести в консоль, округляя в большую сторону

function getTargetMonth() {
	return Math.ceil(mission / accumulatedMonth);
}

if (getTargetMonth() < 0) {
	alert('Цель не будет достигнута');
	
} else {
	alert('До цели вам нужно копить ' + getTargetMonth() + ' месяца(ев)');	
}


console.log(getTargetMonth());


// Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. 
// Вывести в консоль  округлив в меньшую сторону


budgetDay = Math.floor(accumulatedMonth / 30);

if (budgetDay < 0) {
	alert('Что-то пошло не так');
} else {
	alert('Поэтому бюджет в день, должен быть не более ' + budgetDay);
}










let showTypeOf = function (data) {
	console.log(data, typeof (data));
};



let getStatusIncome = function () {

	if (budgetDay >= 800) {
		return ('У Вас высокий уровень дохода');
	} else if (budgetDay >= 300 && budgetDay < 800) {
		return ('У Вас cредний уровень дохода');
	} else if (budgetDay >= 0 && budgetDay < 300) {
		return ('У Вас низкий уровень дохода');
	} else {
		return ('В Вашей жизни что то пошло не так...');
	}
};

console.log(getStatusIncome());