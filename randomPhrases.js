const inspirationalQuotes = [
  'Сегодня просто БОМБИЧЕСКИЙ день',
  'Весь мир - станция NT, а мы в ней - ядерные боеголовки',
  'Не бойся, больно не будет',
  'Вырезаем экипаж, достаём диск и забываем код',
  'Ни дня без военных преступлений',
];

const replaceQuotes = document.querySelector('.phrase-text');

window.onload = () => {
  // Сохранить длину массива как переменную
  let inspirationalQuotesSize = inspirationalQuotes.length;
  // Генерируем рандомное число от 0 до количество записей в массиве
  let randomQuote = Math.floor(Math.random() * inspirationalQuotesSize);
  // Добавляем фразу в нам элемент ui_txt02
  replaceQuotes.textContent = inspirationalQuotes[randomQuote];
}