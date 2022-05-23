/**
* Импорт всех требуемых модулей.
* Создание потока записи в текстовый файл
* Вывод в консоль приветственного сообщения
* Ожидание ввода текста пользователем, с дальнейшей проверкой ввода на наличие ключевого слова exit
* Запись текста в файл
* Ожидание дальнейшего ввода
* Реализация прощального сообщения при остановке процесса
 */

const path = require('path');
const fs = require('fs');
// const EventEmitter = require('events');
const { stdin, stdout } = process;

const filePath = path.join(__dirname, 'text02.txt');

fs.createWriteStream(filePath);

stdout.write('Доброго времени суток!\nВведите текст\n');
stdout.write('Для выхода нажмите Ctrl + C или введите "exit"\n');

stdin.on('data', data => {
  const dataStr = data.toString().trim();

  if (dataStr == 'exit') { 
    process.exit();
  } else {
    fs.appendFile(filePath, data, () => { });
  }
});

process.on('SIGINT', () => {
  process.exit();
}); 