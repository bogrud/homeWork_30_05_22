// 1 Отфильтруйте отрицательные элементы в массиве, оставив только положительные

let item1 = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10]

task1(item1)

function task1(mass) {
  let result = mass.filter((item) => item > 0)
  return result
}

// 2 Найдите сумму элементов массива которые меньше 100 по значению

let item2 = [3, 2, 5, 6, 115, 196, 14]

task2(item2)

function task2(mass) {
  let sum = 0
  for (let i = 0; i < mass.length; i++) {
    if (mass[i] < 100) {
      sum += mass[i]
    }
  }
  return sum
}

// 3 Уменьшите каждый элемент массива на 3%

let item3 = [17, 26, 14, 58, 29, 30]

task3(item3)

function task3(mass) {
  for (let i = 0; i < mass.length; i++) {
    mass[i] = mass[i] - (mass[i] / 100) * 3
  }
  return mass
}

// 4 Если все элементы массива меньше 100 увеличьте их на 5%

let item4 = [56, 32, 17, 98, 24]

task4(item4)

function task4(mass) {
  for (i = 0; i < mass.length; i++) {
    if (mass[i] < 100) {
      mass[i] = mass[i] + (mass[i] / 100) * 5
    }
  }
  return mass
}

// 5 Проверьте является ли слово палиндромом (например слово abcddcba подходит т.к. оно "зеркальное")

let str = 'abcdefedcba'

task5(str)

function task5(word) {
  return word.split('').reverse().join('') == word // разбил слово на буквы => развернул в обратном направлении => обратно соеденил в цельное слово => если результаты равны => true
}

// 6 Соедините две строки в одну и переверните наоборот

let item6_1 = ['ivan', 'roma', 'den', 'mas']
let item6_2 = ['kiril', 'tom', 'box', 'zaz']

task6(item6_1, item6_2)

function task6(mass1, mass2) {
  let mass3 = mass1.concat(mass2)
  return mass3.reverse()
}

// 7* Напишите функцию, которая преобразует первую букву каждого слова строки в верхний регистр.

let item7 = ['green', 'blue', 'red', 'yellow']

task7(item7)

function task7(mass) {
  for (i = 0; i < mass.lenght; i++) {
    mass[i][0] = mass[i][0].toUpperCase()
  }
  return mass
}

// 8* Вывести индексы минимальных элементов массива
