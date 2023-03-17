// У нас есть массив объектов, который нужно отсортировать:

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

//   Напишите функцию byField, которая может быть использована для этого.

function byField(fieldName) {
  return a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField("name"));
users.sort(byField("age"));
