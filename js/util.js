//ф-цию getRandomIntInclusive нашла на MDN, условия сама дописала
/**
 * Возвращаем случайное целое число из переданного диапазона включительно
 *
 * @param {number} min - минимальное число в диапазоне
 * @param {number} max – максимальное число в диапазоне
 * @returns {number}
 */

function getRandomIntInclusive(min, max) {
  let result;
  //если какое-то из чисел < 0, поменяем его на положительное
  if (min < max) {
    min = Math.ceil(Math.abs(min));
    max = Math.floor(Math.abs(max));
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  } else if (min > max) {
    min = Math.floor(Math.abs(min));
    max = Math.ceil(Math.abs(max));
    result = Math.floor(Math.random() * (min - max + 1)) + max;
  } else if (min === max) {
    //если числа одинаковые, при необх-ти поменяем число на положительное и округлим до целого
    result = Math.round(Math.abs(min));
  }
  return result;
}

getRandomIntInclusive(3, -47.8);

/**
 * Проверяем максимальную длину строки
 *
 * @param {number} stringLength - длина проверяемой строки
 * @param {number} maxLength – максимальная длина
 * @returns {boolean}
 */

function checkMaxLength(stringLength, maxLength) {
  return stringLength <= maxLength;
}

checkMaxLength(34, 60);

/**
 * Берем из массива случайный элемент и тут же удаляем его из массива
 *
 * @param {object} array - массив
 */
const getRandomElementFromArray = (array) => array.splice(getRandomIntInclusive(0, array.length-1), 1);

export {getRandomIntInclusive, getRandomElementFromArray};
