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
    console.log(daysOfWeek[i])
}

// fibonacci
var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1
fibonacci[2] = 1

for (var i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
}

console.log('Fibonacci ' + fibonacci)

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

console.log(numbers)