// Напишите функцию aclean(arr),
// которая возвращает массив слов, очищенный от анаграмм.
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

function aclean(arr) {
  let obj = {};
  arr.forEach((el) => {
    let sorted = el.toLowerCase().split("").sort().join("");
    obj[sorted] = el;
  });
  return Object.values(obj);
}
