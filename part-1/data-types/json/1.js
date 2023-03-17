// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
let user = {
  name: "Василий Иванович",
  age: 35,
};

let us = JSON.parse(JSON.stringify(user));
