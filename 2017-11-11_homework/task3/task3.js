var arr9 = ["ноль.", "один.", "два.", "три.", "четыре.", "пять.", "шесть.", "семь.", "восемь.", "девять."];
var anyNumber = Number(prompt("Выберите целое число в диапазоне от 0 до 9"));
if (anyNumber >= 0 && anyNumber <= 9 && anyNumber === parseInt(anyNumber, 10)) {
alert("Название выбранного числа: " + arr9[anyNumber]); 
} else {
alert("Упс... Вы ввели нецелое число или число вне диапазона от 0 до 9 =( ");
}