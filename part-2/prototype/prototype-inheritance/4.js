// У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

// Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?
// Потому что при работе функции this ищет stomach в speedy,
//  но так как его там нет, находит в hamster, а он общий для этих двух объектов.
// Чтобы исправить можно добавить stomach в каждый объект.

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple