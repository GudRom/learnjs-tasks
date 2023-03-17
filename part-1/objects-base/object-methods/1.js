// Возможно ли создать функции A и B, чтобы new A() == new B()? 
// Если да – приведите пример вашего кода.
// Ответ: Да, если в функции вернуть один и тот же объект.

const obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b); // true
