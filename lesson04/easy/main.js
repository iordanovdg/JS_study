'use strict';

let income = '10000',
	mission = 50000,
	budgetDay,
	period = 6;
// Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money = +prompt('Ваш месячный доход?');

console.log(money);

// Спросить у пользователя “Перечислите возможные расходы за рассчитываемый 
// период через запятую” сохранить в переменную addExpenses, вывести в консоль 
// в виде массива

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую').split(', ');

console.log(addExpenses);

// Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные 
// в переменной deposit (булевое значение true/false)

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

// Вывести в консоль типы данных money, addExpenses, deposit

console.log(typeof money, typeof income, typeof deposit);

// Спросить у пользователя по 2 раза каждый вопрос и записать ответы в переменные :
// 1 - “Какие обязательные ежемесячные расходы у вас есть?” 
// 2 - “Во сколько это обойдется?”  
// в итоге 4 вопроса и 4 переменных

let expenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?').toLocaleUpperCase();
let expenses2 = prompt('Не лукавь, есть же еще? Я никому не скажу...').toLocaleUpperCase();
let needToSpend1 = prompt('Во сколько тебе обойдется ' + expenses1, '');
let needToSpend2 = prompt('А во сколько тебе обойдется ' + expenses2, '');


console.log(expenses1);
console.log(expenses2);
console.log(needToSpend1);
console.log(needToSpend2);






//  Вычислить доход за месяц, учитывая обязательные расходы, сохранить в
//  переменную budgetMonth и вывести результат в консоль.
// Делаю проверку на ввод только символов

let budgetMonth;

if (needToSpend1.replace(/\d/g, '').length === 0 && needToSpend2.replace(/\d/g, '').length === 0) {
	budgetMonth = money - parseInt(needToSpend1) - parseInt(needToSpend2);
	alert('Ваш доход за месяц ' + budgetMonth);
	console.log(budgetMonth);
} else {
	alert('Введите только числовые значения!!!');
	needToSpend1 = prompt('Во сколько тебе обойдется ' + expenses1, '');
	needToSpend2 = prompt('А во сколько тебе обойдется ' + expenses2, '');
	budgetMonth = money - parseInt(needToSpend1) - parseInt(needToSpend2);
	alert('Ваш доход за месяц ' + budgetMonth);
}



// Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель 
// mission, вывести в консоль, округляя в большую сторону

let target = Math.ceil(mission / budgetMonth);

console.log(target);
alert('До цели вам нужно копить ' + target + ' месяца(ев)');

// Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. 
// Вывести в консоль  округлив в меньшую сторону

budgetDay = Math.floor(budgetMonth / 30);
alert('Поэтому бюджет в день, должен быть не более ' + budgetDay);
console.log(budgetDay);

alert('Подведем итог вашему уровню дохода');

if (budgetDay >= 800) {
	alert('У Вас высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800) {
	alert('У Вас cредний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 300) {
	alert('У Вас низкий уровень дохода');
} else {
	alert('В Вашей жизни что то пошло не так...');
}
// 4 урок начало
// ---------------------------------------------------------//

function getExpensesMonth() {
	return (+needToSpend1 + (+needToSpend2));
}
function getAccumulatedMonth() {
	return money;
}

let accumulatedMonth = getAccumulatedMonth() - getExpensesMonth();

function getTargetMonth() {
	return Math.ceil(mission / budgetMonth);
}

console.log(accumulatedMonth);

console.clear();

let showTypeOf = function (data) {
	console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let  getStatusIncome = function() {

if (budgetDay >= 800){
	return('У Вас высокий уровень дохода');
} else if (budgetDay >= 300 && budgetDay < 800) {
	return('У Вас cредний уровень дохода');
} else if (budgetDay >= 0 && budgetDay < 300) {
	return('У Вас низкий уровень дохода');
} else {
	return('В Вашей жизни что то пошло не так...');
}
};

console.log(getStatusIncome());