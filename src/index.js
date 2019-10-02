'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import img from './modules/img';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

// Timer
countTimer('31 december 2019');

// Menu
toggleMenu();

// popup
togglePopUp();


// Табы
tabs();


// Слайдер
slider();

img();

// калькулятор
calc(100);


// Отправка форм
sendForm();