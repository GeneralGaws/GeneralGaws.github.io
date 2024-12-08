const inspirationalQuotes = [
  'Сегодня просто БОМБИЧЕСКИЙ день',
  'Весь мир - космическая станция, а мы в ней - ядерные боеголовки',
  'Не бойся, больно не будет',
  'Вырезаем экипаж, достаём диск и забываем код',
  'Ни дня без военных преступлений',
];

const replaceQuotes = document.querySelector('.phrase-text');
const diffTextBlock = document.getElementById('job-diff');
const ContentBlock = document.querySelector('sidebar-container');

window.onload = () => {
//Рандом цитата //
  let inspirationalQuotesSize = inspirationalQuotes.length;
  let randomQuote = Math.floor(Math.random() * inspirationalQuotesSize);
  replaceQuotes.textContent = inspirationalQuotes[randomQuote];
  
//Цвет под сложность роли
  var diffText = diffTextBlock.innerText;
  if (diffText == 'Легко') {diffTextBlock.style.cssText = "color: green; text-shadow: 0 0 10px;";}  
  else if (diffText == 'Средне') {diffTextBlock.style.cssText = "color: yellow; text-shadow: 0 0 10px;";}  
  else if (diffText == 'Тяжело') {diffTextBlock.style.cssText = "color: red; text-shadow: 0 0 10px;";}
  else if (diffText == 'Очень тяжело') {diffTextBlock.style.cssText = "color: darkred; text-shadow: 0 0 10px;";}
    
};
