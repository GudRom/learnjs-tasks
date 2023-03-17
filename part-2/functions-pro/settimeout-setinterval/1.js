// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду,
//  начиная от from и заканчивая to.

// Сделайте два варианта решения.

// Используя setInterval.
function printNumbersInterval(from, to) {
  let interval = setInterval(
    function () {
      alert(from);
      if (from == to) clearInterval(interval);
      from++;
    },
    1000,
    from,
    to
  );
}

// Используя рекурсивный setTimeout.

function printNumbers(from, to) {
  setTimeout(
    function alertNumber() {
      alert(from);
      if (from == to) setTimeout(alertNumber, 1000);
      from++;
    },
    1000,
    from,
    to
  );
}
