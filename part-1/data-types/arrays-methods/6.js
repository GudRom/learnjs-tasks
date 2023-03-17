// Создайте функцию конструктор Calculator,
// которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str),
// который принимает строку типа "1 + 2" в формате
//  «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.
//  Метод должен понимать плюс + и минус -.

// Затем добавьте метод addMethod(name, func),
//  который добавляет в калькулятор новые операции.
//  Он принимает оператор name и функцию с двумя аргументами func(a,b),
//  которая описывает его.

function Calculator() {
  this.mathMethods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };

  this.calculate = function (str) {
    const elements = str.split(" ");
    return this.mathMethods[elements[1]](+elements[0], +elements[2]);
  };

  this.addMethod = function (name, func) {
    this.mathMethods[name] = func;
  };
}
