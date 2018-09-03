'use strict'

const fs = require('fs'); //подключили библиотеку (модуль) FS для работы с файловой системой

const text = fs.readFileSync('script.js', 'utf8'); //прочитали файл script.js в кодировке utf8
console.log(text); //Вывели прочитанное в консоль