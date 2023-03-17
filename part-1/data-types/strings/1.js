// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

function ucFirst(str) {
    return str.substr(0, 1).toUpperCase() + str.slice(1);
}
