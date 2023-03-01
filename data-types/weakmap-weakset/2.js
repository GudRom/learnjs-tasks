// Теперь вопрос стоит так: какую структуру данных вы бы предложили
//  использовать для хранения информации о том, когда сообщение было прочитано?

// В предыдущем задании нам нужно было сохранить только факт прочтения
//  «да или нет». Теперь же нам нужно сохранить дату,
//  и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.

// P.S. Даты в JavaScript можно хранить как объекты встроенного класса Date,
//  которые мы разберём позднее.


//Ответ: можно воспользоваться WeakMap, добавляя к нужному сообщению, 
// с помощью встроенного класса Date, время прочтения.