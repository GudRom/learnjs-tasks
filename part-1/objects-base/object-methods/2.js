// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  // ... ваш код ...
  read() {
    this.arg1 = +prompt("Введите первое значение", 0);
    this.arg2 = +prompt("Введите второе значение", 0);
  },
  sum() {
    return this.arg1 + this.arg2;
  },
  mul() {
    return this.arg1 * this.arg2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
