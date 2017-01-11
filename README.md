# MEVJsTask

### Tasks 1-15
Task 4 done in two variants.
###For Start:
<li>To start the download repository open a terminal in the folder with the back. 
<li>Enter in the terminal "node task-1"
<li>Node Js it must be install

###Task
	
####1.
Make all first letters in words uppercased. 
For example: 	inputString = “wSSde rr 3!D !!fg __AAs cert”
outputString = “WSSde Rr 3!D !!fg __AAs Cert”

####2.
Check if given string contains some other string. 
For example: 	For this strings function should return true.
inputString1 = “A big red apple.”
InputString2 = “RED is a registered trade mark.”
inputString3 = “ReD is his nickname.”
checkString = “red”

####3.
Truncate string. You have string and number of characters to left. After string ‘…’ should be added. 
For example: 	inputString = “This is example of log string that should be truncated.”
		length = 7
		outputString = “This is…”

####4.
Write function that will return minimum or maximum value from array depending on second argument. Input args: array, string (‘min’, ‘max). For example: findMinMax([1, 7, 90, 22], ‘min’)


####5.
Write function to transform array into object. Ex.:
{
    'a' : arr[0],
    'b' : arr[1],
    ...
    '1' : arr[n],
    '2' : arr[n+1],
    ...
} 

####6.
Write function for Array filtering. Function should get two arrays as input. It should delete from first array elements that are in second array. Function doesn’t return anything, it change first array directly.

####7.
Write function that will take object as argument and return sum of all its attribute values that are numbers.

####8.
Fix code:

var a = 10;

function equal(val1, val2) {
	return val1 === val2;
}
console.log(equal(a, b));  // Should log true to console

var b = 10;


####9.
Make this work without changing order of lines:

var a;
console.log(a()); //Should log true to console
a = function a() {
  return true;
};


####10.
Rewrite default method window.setTimeout(callback, delay) for another way of use : first argument should be a delay, second - callback. You should be able to use it like window.setTimeout(delay, callback)


####11.
Rewrite default method window.setInterval(callback, delay) in such way, that time intervals would be calculated using function from task 10. Arguments order can stay as they are for setInterval.


####12
. Написать декоратор следующего вида function createPipe (originalFnc, [fnc1, fnc2, fnc3 ... fncN]). Декоратор принимает первым параметром оригинальную функцию, вторым параметром массив функций-фильтров. Возвращенная декоратором функция должна организовать последовательный вызов каждой функции из массива след.образом: сначала вызывается fnc1 с входящим параметром, потом fnc2 с параметром, который является результатом fnc1, потом fnc3 с результатом fnc2 и так далее до конца массива функций. Когда фильтры в массиве закончились, должна быть вызвана оригинальная функция с результатом выполнения последней функции из массива.


####14.
Используя декоратор из задания 12:
на вход декорированной функции должна подаваться строка текста;
написать минимум три фильтра, но реализовать возможность добавления любого количества фильтров.
Фильтр 1 должен выкидывать из строки любые цифры
Фильтр 2 должен выкидывать из строки спецсимволы ! @ # $ % ^ & * ( ) + =
Фильтр 3 должен заменять сочетания из двух и более пробелов одним пробелом
Оригинальная функция должна каждое слово в строке начинать с большой буквы и потом выводить результат в консоль
Пример:
function originalFnc (string) {
    //...
    console.log(result);
}
function filterDigits (string) {
    //...
    return result; 
}
function filterSpecial (string) {
    //...
    return result; 
}
function filterWhiteSpaces (string) {
    //...
    return result; 
}
var pipe = createPipe(originalFnc, [filterDigits, filterSpecial, filterWhiteSpaces]);
pipe('on345l90y    te**x((((t     h$&er@@@e'); // logs 'Only Text Here' 
