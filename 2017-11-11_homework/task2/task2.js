var anyNumber = Number(prompt("Выберете любое целое число, лежащее в диапазоне от -999 до 999 и увидите словесное описание данного числа! =)"));
if (anyNumber === parseInt(anyNumber, 10) && anyNumber >= -999 && anyNumber <= -100) {
        alert("Это отрицательное трехзначное число.");
} else if (anyNumber === parseInt(anyNumber, 10) && anyNumber >= -99 && anyNumber <= -10) {
    alert("Это отрицательное двухзначное число.");
} else if (anyNumber === parseInt(anyNumber, 10) && anyNumber >= -9 && anyNumber <= -1) {
    alert("Это отрицательное однозначное число.");
} else if (anyNumber === parseInt(anyNumber, 10) && anyNumber >= 1 && anyNumber <= 9) {
    alert("Это положительное однозначное число.");
} else if (anyNumber === parseInt(anyNumber, 10) && anyNumber >= 10 && anyNumber <= 99) {
    alert("Это положительное двузначное число.");
} else if (anyNumber === parseInt(anyNumber, 10) && anyNumber>= 100 && anyNumber <= 999) {
    alert("Это положительное трехзначное число.");
} else if (anyNumber === parseInt(anyNumber, 10) && anyNumber === 0) {
    alert("Это нулевое число.");
} else {
    alert("Упс... Вы ввели нецелое число или число вне диапазона от -999 до 999 =(");
}