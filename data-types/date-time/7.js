// Создайте функцию getSecondsToTomorrow(),
//  возвращающую количество секунд до завтрашней даты.

// P.S. Функция должна работать в любой день,
//  т.е. в ней не должно быть конкретного значения сегодняшней даты.

function getSecondsToday() {
  const now = new Date();
  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  return Math.round((now - tomorrow) / 1000);
}
