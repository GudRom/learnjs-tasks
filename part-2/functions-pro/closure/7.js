// Следующий код создаёт массив из стрелков (shooters).

// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

//   Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.
// Потому что переменная i берется из внешнего окружения, когда функция makeArmy уже отработала.
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      alert(j);
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();
