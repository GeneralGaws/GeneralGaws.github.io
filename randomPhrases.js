const inspirationalQuotes = [
  'Сегодня просто БОМБИЧЕСКИЙ день',
  'Весь мир - космическая станция, а мы в ней - ядерные боеголовки',
  'Не бойся, больно не будет',
  'Вырезаем экипаж, достаём диск и забываем код',
  'Ни дня без военных преступлений',
];

const replaceQuotes = document.querySelector('.phrase-text');
const diffTextBlock = document.getElementById('job-diff');

window.onload = () => {
//Рандом цитата //
  let inspirationalQuotesSize = inspirationalQuotes.length;
  let randomQuote = Math.floor(Math.random() * inspirationalQuotesSize);
  replaceQuotes.textContent = inspirationalQuotes[randomQuote];
  
//Цвет под сложность роли
  var diffText = diffTextBlock.innerText;
  if (diffText == 'Тяжело') {diffTextBlock.style.color = 'red';}
  else if (diffText == 'Очень тяжело') {diffTextBlock.style.color = 'darkred';}
  else if (diffText == 'Легко') {diffTextBlock.style.color = 'darkgreen';}
  else if (diffText == 'Средне') {diffTextBlock.style.color = 'darkyellow';}
};
