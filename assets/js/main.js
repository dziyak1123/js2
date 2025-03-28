// 1
function printEvenNumbers(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

let a = parseInt(prompt("Введите число a:"));
let b = parseInt(prompt("Введите число b:"));
printEvenNumbers(a, b);

// 2
function min(a, b) {
    return a < b ? a : b;
}

let num1 = parseInt(prompt("Введите первое число:"));
let num2 = parseInt(prompt("Введите второе число:"));
alert("Меньшее число: " + min(num1, num2));

// 3
let styles = ["Джаз", "Блюз"];
alert(styles);

styles.push("Рок-н-ролл");
alert(styles);

styles[Math.floor(styles.length / 2)] = "Классика";
alert(styles);

alert("Удален первый элемент: " + styles.shift());
alert(styles);

styles.unshift("Рэп", "Регги");
alert(styles);
