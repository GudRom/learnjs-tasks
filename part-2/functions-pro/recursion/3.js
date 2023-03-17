// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fib(n) {
  let f1 = 1;
  let f2 = 1;
  for (let i = 3; i <= n; i++) {
    let f = f1 + f2;
    f1 = f2;
    f2 = f;
  }
  return f2;
}
