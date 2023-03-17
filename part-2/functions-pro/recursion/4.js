// Напишите функцию printList(list), которая выводит элементы списка по одному.

// Сделайте два варианта решения: используя цикл и через рекурсию.

// Как лучше: с рекурсией или без? С точки зрения быстродействия, лучше без рекурсии. 

function printListCicle(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}
