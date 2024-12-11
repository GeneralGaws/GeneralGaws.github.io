var xx1 = document.getElementsByClassName('xx1');
var xx2 = document.getElementsByClassName('xx2');
var xx3 = document.getElementsByClassName('xx3');
var xx4 = document.getElementsByClassName('xx4');
var xx5 = document.getElementsByClassName('xx5');
var xx6 = document.getElementsByClassName('xx6');
var result = document.getElementsByClassName('.result-window');

var thMassive = [xx1, xx2, xx3, xx4, xx5, xx6];
var test = thMassive.forEach(function(elem) {
    for(var i = 0; i < elem.length; i++){    
    elem[i].style.cssText = "color: white";
    var stateText = elem[i].innerText;
    var backColor = getComputedStyle(elem[i]).backgroundColor;
    elem[i].innerHTML = 
        '<button class="stateButton" style="background-color: ' + backColor + ';">' + stateText + '</button>';

    }
});
console.log(result.innerText);
console.log(thMassive);

