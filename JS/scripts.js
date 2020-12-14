// task 1 

console.log('task1'+'\n'+'Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.');

function getRezult(a,b,c) {
    return (a-b)/c;
}
var rezult = getRezult(4,2,2);
console.log('Результат: '+rezult);

console.log ('--------------------');

//task 2
console.log('task2'+'\n'+'Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.');

function getRezult2(a){
    return 'Куб числа: ' + Math.pow(a,3) + '\n'+ 'Квадрат числа: ' + Math.pow(a,2);
}
var b = getRezult2(3);
console.log(b);

console.log ('--------------------');

//task 3
console.log('task3'+'\n'+'Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b.');

function maxMin(a,b) {
    return 'Min число: ' + Math.min(a,b) + '\n'+ 'Max число: ' + Math.max(a,b); 
}
var compare = maxMin(6,3);
console.log(compare);

console.log ('--------------------');

//task 4
console.log('task4'+'\n'+'Напишите две функции: первая ф-ция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая – выводить полученный массив.');

function getArray(a,b){
    var array = [];
    for (let i=a; i<=b; i++){
        array.push(i);       
    }
    console.log(array);
}
var a = +prompt('введите первый элемент массив: ');
var b = +prompt('введите второй элемент массив: ');
getArray(a,b);

console.log ('--------------------');

//task 5
console.log('task5'+'\n'+'Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное — false.');

// var isEven = function(someNumber) {
//     return (someNumber % 2 == 0) ? true : false;
// };
// console.log(isEven(64));

function isEven(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log('Второй способ: ' + isEven(9));

console.log ('--------------------');

//task 6
console.log('task6'+'\n'+'Напишите ф-цию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.');

var number = [1,3,6,9,2,8];
function newArray(number) {

    var newArray2 = [];
    for (let i=0; i < number.lenght; i++){
        if (isEven(number[i]) == true) {
            newArray2.push(number);          
        }                 
    }
    console.log(newArray2);
}
newArray(number);  

console.log ('--------------------');

//task 7
console.log('task7'+'\n'+'Напишите ф-цию, которая рисует следующую пирамидку (исп. вложенные    циклы):   Кол-во рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный ф-цией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом, например:');
let symbol = prompt('Введите символ: ');
function piramida(height){
    for (let i = 1; i<=height; i++){
        let m = '';
        for(let j=0; j<i; j++){
            m+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
        }
        if (symbol == Number.isNaN(NaN)) {
            symbol = m+1;
        }
        console.log(m+'\n');
    }
}
piramida(prompt('Введите число строк'));

console.log ('--------------------');

//task 8
document.write('task8'+'</br>'+'8. Напишите ф-цию, которая рисует равнобедренный треугольник из звездочек Кол-во рядов должно вводиться с клавиатуры. Доп., напишите такую же фцию, но которая выведет перевернутый треугольник.');
// let element = '*';
function elka(height){
    var str = height,
        probel = height - 1,
        star = 1;
    for (let i=0; i<height;i++){
        for (let j=0; j<probel;j++){
           document.write("&nbsp\n");
        }
        for(let p=0; p<star;p++){
            document.write('*');
        }
        probel -= 1;
        star += 2;
        document.write('</br>');
    }
}
elka(prompt('Введите высоту:'));

document.write ('--------------------'+'</br>');

function elkaReverse(height){
    var str = height*2-1,
        probel = 1,
        star = str - 1;
    for (let i=0; i<str;i++){
        for(let p=0; p<probel;p++){
            document.write('&nbsp\n');
        }
        for (let j=0; j<=star;j++){
            document.write("*");
        }
        probel += 1;
        star -= 2;
        document.write('</br>');
    }
}
elkaReverse(prompt('Введите высоту:'));



//task 9
console.log('task9'+'\n'+'Напишите ф-цию, которая возвращает массив заполненный числами Фибоначи от 0 до 1000.');

function fibonachi(arr){
    for (let i = 2; i < 17; i++){
        arr[i] = arr[i-1] + arr[i-2]; 
        arr.push(arr[i]);    
    }
    return arr;    
}
var arr = [0,1];
console.log(fibonachi(arr));

console.log ('--------------------');

//task 10
console.log('task10'+'\n'+'Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Исп. Рекурсию.');

function summa(num){
    console.log(num);
    let sum = 0;
    for (let i=0; i<num.lenght; i++){
        sum += +num[i];     
    }
    if (sum > 9) {
        summa(sum + '');
    } else console.log(sum);
}
summa(934956);

console.log ('--------------------');

//task 11
console.log('task11'+'\n'+'Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.');

function printArray(arr) {
    console.log(arr[i]); 
    i++;
    if(i < arr.length) printArray(arr);
}
var i = 0; 

printArray([1, 89, 2, -9, 6]); // 1

console.log ('--------------------');

//task 12
console.log('task12'+'\n'+'Напишите ф-цию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введённые данные в следующем виде.Размер рамки должен определятся автоматически по самой длинной строке. Рамку вывести в консоль.');

function border(lenght){
    var border = [];
    for ( let i = 0;i<lenght;i++){
        border += '*';
    }
    console.log(border);
}
var string = [];
var name = prompt('Введите имя:'),
    lastName = prompt('Ведите фамилию:'),
    middleName = prompt('Ведите отчество:'),
    goupNumber = prompt('Ведите номер группы:'),
    homeWork = 'Домашняя работа: "Функции"';
string.push(homeWork);
string.push('Выполнил: студент гр.' + goupNumber);
var str3 = lastName + ' ' + name+ ' ' +middleName;
string.push(str3);
console.log(string);
var long = 0;
for (let i=0; i<string.length;i++){
    if (long<string[i].length){
        long=string[i].length;
    }
}
long += 2;
border(long);
for (let i=0; i<string.length;i++){
    var resultString = '*';
    for (var j=0; j<long;j++){
        if(string[i][j] === undefined){
            if(j === long-2){
                resultString += '*';
            }
            else{
                resultString += ' ';
            }
        }
        else {
            resultString += string[i][j];
        }
    }
    console.log(resultString);
}
border(long);

console.log ('--------------------');