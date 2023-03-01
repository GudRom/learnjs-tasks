// Напишите функцию getSecondsToday(),
// возвращающую количество секунд с начала сегодняшнего дня.

// Функция должна работать в любой день,
//  т.е. в ней не должно быть конкретного значения сегодняшней даты.
function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((now - today) / 1000);
}
