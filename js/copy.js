const button = document.querySelector('.info-block-button');//сама кнопка
const textForCopy = document.getElementById('address');
var copyText = textForCopy.innerHTML;
//вешаем событие на клик
button.addEventListener('click', function(event) {
    navigator.clipboard.writeText(copyText);
    button.innerText = 'Скопировано!';
});