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
const h3Block = document.querySelector('h3');
const idMassive = [ document.querySelectorAll('h3') ];

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

//Автозаполнение содержания
  var h3Text = h3Block.innerText;
  var hlink = h3Block.getAttribute('id');
  var hlinkID = hlink.innerHTML;
    var innerText = "";
    for (var j = 0; j < 10; j++) {
      innerText += `<a class="sidebar-text" href="#${hlink}">${h3Text}</div>`;
    }
  console.log(h3Text);
  console.log(hlink);
  console.log(hlinkID);
  console.log(idMassive);

};
