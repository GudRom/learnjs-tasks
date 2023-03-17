// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

function printListCicle(list) {
  const values = [];
  while (list) {
    values.push(list.value);
    list = list.next;
  }
  for (let i = values.length - 1; i >= 0; i--) {
    console.log(list.value);
  }
}

function printList(list) {
  if (list.next) {
    printList(list.next);
  }
  console.log(list.value);
}
