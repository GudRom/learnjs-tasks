// Напишите функцию camelize(str),
//  которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  const arr = str.split("-");
  arr.map((word, index) =>
    index == 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  return arr.join("");
}
