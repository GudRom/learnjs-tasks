// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему? 
// Самый быстрый с использованием формулы (так как всего 3 операции),
//  самый медленный с рекурсией(так как некоторые мощности тратятся на организацю вложенных вызовов).

// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)? 
// Можно, но только если есть автоматические оптимизации, например, оптимизация хвостового вызова.
// В противном случае максимальная глубина рекурсии ограничена движком JS
//  и можно рассчитывать на 10 000 вложенных вызовов.

function sumToCicle(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumToRecursion(n) {
  return n === 1 ? n : n + sumToRecursion(n - 1);
}

function sumTo(n) {
  return ((1 + n) / 2) * n;
}
