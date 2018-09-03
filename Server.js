'use strict'

const http = require('http'); //Подключение встроенного модуля Http (для создания серверов)
const fs = require('fs')//Подключение модуля Fs для четения файлов

const server = http.createServer(function (request, Response) { //Встроенная команда CreateServer модуля Http, для создания сервера. Принимает функцию обработчика, которая принимает 2 аргумента.
    console.log(request.method, request.url); //На каждый запрос выводит сообщение в консоль; request.method - содержит метод запроса, request.url содержит адрес по которому выполнен запрос
    if (request.url == '/style.css') { 
        const css = fs.readFileSync('style.css', 'utf8'); //Если происходит запрос к адресу Url, то отдаем на по запросу файл со стилями style.css
        Response.end(css); //Response имеет несколько методов, один из которых метод End, который сообщает о том, что запрос обработан и его можно завершить 
    } else { 

    const html = fs.readFileSync('index.html', 'utf8');//Встроенная компанда readFileSync модуля Fs, для четения файла index.html в кодировке utf8
    Response.end(html); //Отправляем содержимое файла index.html в ответ на запрос
    }
});

console.log('port = ', process.env.PORT); //Запуск сервера на специальном порту

server.listen(process.env.PORT || 4000); //Команда для запуска сервера, в качестве аргумента указан порт для запуска сервера
console.log('Server started!'); //Сообщение в консоль о том, что сервер запущен успешно.