// Создайте функцию getDateAgo(date, days), возвращающую число,
//  которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)
//  вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях
// P.S. Функция не должна изменять переданный ей объект date.

function getDateAgo(date, days) {
  const dateObj = new Date(date);
  dateObj.setDate(date.getDate() - days);
  return dateObj.getDate();
}
