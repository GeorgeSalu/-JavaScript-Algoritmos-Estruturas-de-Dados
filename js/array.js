/*var avgTemp = []

avgTemp[0] = 31.9
avgTemp[1] = 35.9
avgTemp[2] = 42
avgTemp[3] = 38
avgTemp[4] = 25.5

console.log(avgTemp[0])
*/

var daysOfWeek = ['Sunday', 'Monday', 'Yuesday', 'Wednesday', 'Trusday', 'Friday', 'Saturday'];

for (var i = 0; i < daysOfWeek.length; i++) {
    //console.log(daysOfWeek[i])
}

// fibonacci
var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for (var i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

//console.log('Fibonacci ' + fibonacci)

// inserindo elementos
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers[10] = 10
numbers.push(12)
numbers.push(13)
numbers.push(14)
numbers.push(15)
numbers.push(16)

numbers.unshift(-1)
numbers.unshift(-2)
numbers.unshift(-3)
numbers.unshift(-4)

// removendo elementos
numbers.pop(); // remove 16
numbers.pop(); // remove 15
numbers.pop(); // remove 14
numbers.pop(); // remove 13
numbers.pop(); // remove 12


numbers.shift(); //remove -4
numbers.shift(); //remove -3
numbers.shift(); //remove -2
numbers.shift(); //remove -1

//inserindo elemento em uma posição especifica
numbers.splice(3, 3)
console.log(numbers)

numbers.splice(3, 0, 3, 4, 5)
console.log(numbers)