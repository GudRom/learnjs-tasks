// Создайте функцию-конструктор Calculator,
//  которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt
// и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.

function Calculator() {
  this.read = function () {
    this.arg1 = +prompt("Введите первое значение", 0);
    this.arg2 = +prompt("Введите второе значение", 0);
  };
  this.sum = function () {
    return this.arg1 + this.arg2;
  };
  this.mul = function () {
    return this.arg1 * this.arg2;
  };
}
